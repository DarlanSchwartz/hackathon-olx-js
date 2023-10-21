import styled from 'styled-components';
import { BRANDS_OPTIONS, DOORS_OPTIONS, MODELS_OPTIONS, PHOTO_TIPS, STATE_OF_FINANCING_OPTIONS, YEAR_OPTIONS } from '../constants';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Web3 from 'web3';
import { Alchemy, Network } from "alchemy-sdk";
import OrangeButton from '../Components/OrangeButton';
import { useNavigate } from 'react-router-dom';
import ApplicationContext from '../AppContext';
import ModalDREX from './ModalDREX';
import { useLockBodyScroll, useWindowScroll } from '@uidotdev/usehooks';
import { toast } from 'react-toastify';

export default function RegisterVehiclePage() {

    const [userAddress, setUserAddress] = useState(null);
    const [nftsEspecificacoes, setNftsEspecificacoes] = useState();
    const { products, setProducts } = useContext(ApplicationContext);
    const [selectedMethod, setSelectedMethod] = useState("MANUAL");
    const [photos, setPhotos] = useState([]);
    const photosRef = useRef();
    const doorRef = useRef();
    const yearRef = useRef();
    const priceRef = useRef();
    const locationRef = useRef();
    const brandRef = useRef();
    const modelRef = useRef();
    const plateRef = useRef();
    const plateFinalRef = useRef();
    const [DUTImage, setDUTImage] = useState(null);
    const [filledForm, setFilledForm] = useState(false);
    const [{ x, y }, scrollTo] = useWindowScroll();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (selectedMethod == "DREX") {
            setPhotos([]);
            scrollTo(0, 700);
            setShowModal(true);
        }
        else {
            setDUTImage(null);
        }
    }, [selectedMethod]);

    const navigate = useNavigate();
    function updatePhotos() {
        let files = [];
        for (let i = 0; i < photosRef?.current.files.length; i++) {
            files.push(URL.createObjectURL(photosRef.current?.files[i]));
        }
        setPhotos(files);
    }
    useEffect(() => {
        getNftByAdress();

    }, [userAddress])

    const getNftByAdress = async () => {

        const nftManiaContract = "0xa2d9ded6115b7b7208459450d676f0127418ae7a"

        const config = {
            apiKey: import.meta.env.VITE_PUBLIC_API,
            network: Network.MATIC_MAINNET,
        };
        const alchemy = new Alchemy(config)

        if (userAddress) {
            const nfts = await alchemy.nft.getNftsForOwner(userAddress)
            const nftList = nfts["ownedNfts"]

            const ownedNfts = nftList.filter((nft) => nft.contract.address === nftManiaContract)
            setNftsEspecificacoes(ownedNfts);
            setDUTImage(ownedNfts?.[0]?.media?.[0]?.gateway);
            console.log(ownedNfts)
        }
    }

    function fillForm() {
        modelRef.current.value = "Uno";
        brandRef.current.value = "Fiat";
        yearRef.current.value = "2010";
        priceRef.current.value = "31990";
        locationRef.current.value = "São Paulo - SP";
        doorRef.current.value = "4";
        plateRef.current.value = "BRA2E19";
        plateFinalRef.current.value = "9";
        setPhotos([
            "https://img.olx.com.br/images/90/904301553269682.jpg",
            "https://img.olx.com.br/images/90/900379794880835.jpg",
            "https://img.olx.com.br/images/90/905379918162159.jpg",
            "https://img.olx.com.br/images/90/900307195504143.jpg",
            "https://img.olx.com.br/images/90/901396430371336.jpg"
        ]);
        setFilledForm(true);
    }

    useEffect(() => {
        if (DUTImage) {
            fillForm();
        }
    }, [DUTImage])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const connectWallet = useCallback(async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();

            const accounts = await window.web3.eth.getAccounts();
            if (accounts.length > 0) {
                setUserAddress(accounts[0]);
                // localStorage.setItem('userAddress', accounts[0]);
                //console.log("Endereço da carteira conectada:", accounts[0]);
            }

            const polygonNetwork = {
                chainId: '0x89',
                chainName: 'Matic Network',
                nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                },
                rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
                blockExplorerUrls: ['https://explorer.matic.network/']
            };

            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [polygonNetwork]
            }).then(() => {
                setShowModal(false);
                toast.success('Carteira conectada com sucesso!',{
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    theme: 'colored',
                })
            }).catch((error) => {
                setShowModal(false);
            });
        } else {
            alert('MetaMask não encontrada. Você precisa instalar o MetaMask para usar este aplicativo.');
        }
    }, []);

    function register() {
        const newProduct = {
            name: `${brandRef?.current?.value} ${modelRef?.current?.value} ${yearRef?.current?.value}`,
            price: Number(priceRef.current.value) || 0,
            location: locationRef?.current?.value,
            createdAt: `Hoje, ${new Date().getHours()}:${new Date().getMinutes()}`,
            images: filledForm ? [...photos] : [...photosRef.current.files]
        }
        setProducts([...products, newProduct]);
        navigate('/');
        toast.success('Carro registrado para a venda!',{
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            theme: 'colored',
        })
    }
    return (
        <PageContainer $sm={showModal.toString()}>
            {showModal &&
                <ModalDREX >

                </ModalDREX>}
            <h1 className='title'>O que você está anunciando?</h1>

            <MainBox>
                <BackButton onClick={() => navigate('/my-announces')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="24" viewBox="0 0 43 24" fill="none">
                        <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807609 11.0711 0.807609 10.4853 1.3934L0.939339 10.9393ZM43 10.5L2 10.5L2 13.5L43 13.5L43 10.5Z" fill="#6E0AD6" />
                    </svg>
                    <span>Meus anúncios</span>
                </BackButton>
                <SellMethod>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                        <path d="M33.9221 18.4237L24.9819 15.2105L21.2449 10.5184C20.92 10.1211 20.5107 9.80118 20.0467 9.58178C19.5827 9.36239 19.0757 9.24905 18.5624 9.25001H9.31706C8.75162 9.24982 8.19472 9.38795 7.6949 9.65237C7.19509 9.91678 6.76755 10.2995 6.44956 10.767L3.31381 15.3723C2.66071 16.3308 2.31175 17.4639 2.3125 18.6237V27.75C2.3125 28.0567 2.43432 28.3508 2.65116 28.5676C2.868 28.7844 3.16209 28.9063 3.46875 28.9063H5.94544C6.19696 29.8986 6.77219 30.7787 7.58012 31.4074C8.38804 32.0361 9.38253 32.3775 10.4063 32.3775C11.43 32.3775 12.4245 32.0361 13.2324 31.4074C14.0403 30.7787 14.6155 29.8986 14.8671 28.9063H22.1329C22.3845 29.8986 22.9597 30.7787 23.7676 31.4074C24.5755 32.0361 25.57 32.3775 26.5938 32.3775C27.6175 32.3775 28.612 32.0361 29.4199 31.4074C30.2278 30.7787 30.803 29.8986 31.0546 28.9063H33.5313C33.8379 28.9063 34.132 28.7844 34.3488 28.5676C34.5657 28.3508 34.6875 28.0567 34.6875 27.75V19.5117C34.6875 19.2736 34.6139 19.0413 34.4769 18.8466C34.3399 18.6519 34.1462 18.5042 33.9221 18.4237ZM10.4063 30.0625C9.94888 30.0625 9.50178 29.9269 9.1215 29.6728C8.74121 29.4187 8.44481 29.0575 8.26978 28.635C8.09475 28.2124 8.04896 27.7474 8.13819 27.2989C8.22741 26.8503 8.44766 26.4382 8.77107 26.1148C9.09448 25.7914 9.50652 25.5712 9.9551 25.4819C10.4037 25.3927 10.8687 25.4385 11.2912 25.6135C11.7138 25.7886 12.0749 26.085 12.329 26.4652C12.5831 26.8455 12.7188 27.2926 12.7188 27.75C12.7178 28.363 12.4739 28.9507 12.0404 29.3842C11.6069 29.8177 11.0193 30.0616 10.4063 30.0625ZM26.5938 30.0625C26.1364 30.0625 25.6893 29.9269 25.309 29.6728C24.9287 29.4187 24.6323 29.0575 24.4573 28.635C24.2823 28.2124 24.2365 27.7474 24.3257 27.2989C24.4149 26.8503 24.6352 26.4382 24.9586 26.1148C25.282 25.7914 25.694 25.5712 26.1426 25.4819C26.5912 25.3927 27.0562 25.4385 27.4787 25.6135C27.9013 25.7886 28.2624 26.085 28.5165 26.4652C28.7706 26.8455 28.9063 27.2926 28.9063 27.75C28.9056 28.3631 28.6618 28.951 28.2283 29.3845C27.7947 29.8181 27.2069 30.0619 26.5938 30.0625ZM32.375 26.5938H31.0546C30.803 25.6014 30.2278 24.7213 29.4199 24.0926C28.612 23.4639 27.6175 23.1225 26.5938 23.1225C25.57 23.1225 24.5755 23.4639 23.7676 24.0926C22.9597 24.7213 22.3845 25.6014 22.1329 26.5938H14.8671C14.6155 25.6014 14.0403 24.7213 13.2324 24.0926C12.4245 23.4639 11.43 23.1225 10.4063 23.1225C9.38253 23.1225 8.38804 23.4639 7.58012 24.0926C6.77219 24.7213 6.19696 25.6014 5.94544 26.5938H4.625V18.6237C4.62488 17.9275 4.83439 17.2474 5.22625 16.672L8.36084 12.0689C8.46684 11.9129 8.60939 11.7852 8.77606 11.697C8.94273 11.6087 9.12846 11.5625 9.31706 11.5625H18.5624C18.7307 11.5618 18.897 11.5982 19.0497 11.6689C19.2023 11.7396 19.3376 11.843 19.4458 11.9718L23.3771 16.9078C23.5108 17.0757 23.6885 17.203 23.8904 17.2755L32.375 20.3246V26.5938Z" fill="#1A1D23" />
                    </svg>
                    <span>Método de venda</span>
                </SellMethod>
                <h1 className='choose-a-method'>Escolha um método de venda:</h1>
                <SellMethods>
                    <SMethod $attention={(selectedMethod == "DREX").toString()} onClick={() => setSelectedMethod("DREX")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M17.475 27.5L7.5 37.5L17.475 47.5V40H35V35H17.475V27.5ZM52.5 22.5L42.525 12.5V20H25V25H42.525V32.5L52.5 22.5Z" fill="#1A1D23" fillOpacity="0.533333" />
                        </svg>
                        <h1>Troca fácil DREX</h1>
                        <span>1,99% de taxa sobre o valor vendido</span>
                        <p >Com troca fácil DREX, você realiza a transferência do veiculo automaticamente ao receber o pagamento, garantido pela OLX.</p>
                    </SMethod>

                    <SMethod $attention={(selectedMethod == "MANUAL").toString()} onClick={() => setSelectedMethod("MANUAL")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                            <path d="M43.875 23.335V43.875C43.875 45.2177 43.3416 46.5053 42.3922 47.4547C41.4428 48.4041 40.1552 48.9375 38.8125 48.9375H15.1875C13.8448 48.9375 12.5572 48.4041 11.6078 47.4547C10.6584 46.5053 10.125 45.2177 10.125 43.875V10.125C10.125 8.78234 10.6584 7.49467 11.6078 6.54527C12.5572 5.59587 13.8448 5.0625 15.1875 5.0625H25.6025C26.4973 5.06264 27.3555 5.4181 27.9882 6.05074L42.8868 20.9493C43.5194 21.582 43.8749 22.4402 43.875 23.335Z" stroke="#1A1D23" strokeWidth="1.6875" strokeLinejoin="round" />
                            <path d="M27 5.90625V18.5625C27 19.4576 27.3556 20.316 27.9885 20.949C28.6215 21.5819 29.4799 21.9375 30.375 21.9375H43.0312" stroke="#1A1D23" strokeWidth="1.6875" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h1>Venda Manual</h1>
                        <span></span>
                        <p>Você assume toda responsabilidade do registro e venda do veiculo</p>
                    </SMethod>
                </SellMethods>
                {
                    selectedMethod == "DREX" &&
                    <ConnectToDREX $sm={showModal.toString()}>
                        <div className='invisible-box'>
                            <OrangeButton className={showModal ? 'modal-btn' : ''} onClick={connectWallet}>
                                <ModalInfo className={!showModal ? 'hidden' : ''}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="185" height="113" viewBox="0 0 185 113" fill="none">
                                        <path d="M41.3151 62.5265C49.1832 44.2547 63.4044 27.3089 83.2273 15.5349C118.011 -5.12502 158.716 -3.54965 184.674 16.6432L169.931 32.0292C160.02 24.317 147.206 20.089 133.313 19.9476C119.42 19.8062 105.157 23.7585 92.5564 31.2415C77.9697 39.9054 67.3414 52.3374 61.2724 65.801L101.86 72.4605L34.5365 112.448L0.952053 55.9038L41.3151 62.5265Z" fill="white" />
                                    </svg>
                                    <div className='info'>
                                        <h1>Realize o deposito do seu DUT clicando no botão abaixo.</h1>
                                        <h2>Para isso você precisa ter a carteira autorizada pelo Detran com seu DUT habilitada no seu computador.</h2>
                                    </div>
                                </ModalInfo>
                                Conectar ao DREX
                            </OrangeButton>
                        </div>
                        <div className='nft-box'>
                            {
                                DUTImage &&
                                <img onClick={() => window.open(DUTImage, "_blank")} src={DUTImage} alt="" />
                            }

                        </div>
                    </ConnectToDREX>
                }

                <VehicleForm style={{ marginTop: `${selectedMethod == "DREX" ? "50px" : "200px"}` }}>
                    <InputContainer>
                        <label htmlFor="plate">Placa do carro</label>
                        <InputForm ref={plateRef} type='text' id='plate' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="plate-final">Qual o final da Placa?</label>
                        <InputForm ref={plateFinalRef} type='text' id='plate-final' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="doors">Quantas portas?</label>
                        <SelectForm ref={doorRef} name="doors" id="doors">
                            {
                                DOORS_OPTIONS.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </SelectForm>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="brands">Quantas a marca do veículo?</label>
                        <SelectForm ref={brandRef} name="brands" id="brands">
                            {
                                BRANDS_OPTIONS.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </SelectForm>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="models">Qual é o modelo do veículo?</label>
                        <SelectForm ref={modelRef} name="models" id="models">
                            {
                                MODELS_OPTIONS.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </SelectForm>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="year">Qual é o ano de fabricação?</label>
                        <SelectForm ref={yearRef} name="year" id="year">
                            {
                                YEAR_OPTIONS.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </SelectForm>
                    </InputContainer>
                    <SellMethod style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <path d="M33.9221 18.4237L24.9819 15.2105L21.2449 10.5184C20.92 10.1211 20.5107 9.80118 20.0467 9.58178C19.5827 9.36239 19.0757 9.24905 18.5624 9.25001H9.31706C8.75162 9.24982 8.19472 9.38795 7.6949 9.65237C7.19509 9.91678 6.76755 10.2995 6.44956 10.767L3.31381 15.3723C2.66071 16.3308 2.31175 17.4639 2.3125 18.6237V27.75C2.3125 28.0567 2.43432 28.3508 2.65116 28.5676C2.868 28.7844 3.16209 28.9063 3.46875 28.9063H5.94544C6.19696 29.8986 6.77219 30.7787 7.58012 31.4074C8.38804 32.0361 9.38253 32.3775 10.4063 32.3775C11.43 32.3775 12.4245 32.0361 13.2324 31.4074C14.0403 30.7787 14.6155 29.8986 14.8671 28.9063H22.1329C22.3845 29.8986 22.9597 30.7787 23.7676 31.4074C24.5755 32.0361 25.57 32.3775 26.5938 32.3775C27.6175 32.3775 28.612 32.0361 29.4199 31.4074C30.2278 30.7787 30.803 29.8986 31.0546 28.9063H33.5313C33.8379 28.9063 34.132 28.7844 34.3488 28.5676C34.5657 28.3508 34.6875 28.0567 34.6875 27.75V19.5117C34.6875 19.2736 34.6139 19.0413 34.4769 18.8466C34.3399 18.6519 34.1462 18.5042 33.9221 18.4237ZM10.4063 30.0625C9.94888 30.0625 9.50178 29.9269 9.1215 29.6728C8.74121 29.4187 8.44481 29.0575 8.26978 28.635C8.09475 28.2124 8.04896 27.7474 8.13819 27.2989C8.22741 26.8503 8.44766 26.4382 8.77107 26.1148C9.09448 25.7914 9.50652 25.5712 9.9551 25.4819C10.4037 25.3927 10.8687 25.4385 11.2912 25.6135C11.7138 25.7886 12.0749 26.085 12.329 26.4652C12.5831 26.8455 12.7188 27.2926 12.7188 27.75C12.7178 28.363 12.4739 28.9507 12.0404 29.3842C11.6069 29.8177 11.0193 30.0616 10.4063 30.0625ZM26.5938 30.0625C26.1364 30.0625 25.6893 29.9269 25.309 29.6728C24.9287 29.4187 24.6323 29.0575 24.4573 28.635C24.2823 28.2124 24.2365 27.7474 24.3257 27.2989C24.4149 26.8503 24.6352 26.4382 24.9586 26.1148C25.282 25.7914 25.694 25.5712 26.1426 25.4819C26.5912 25.3927 27.0562 25.4385 27.4787 25.6135C27.9013 25.7886 28.2624 26.085 28.5165 26.4652C28.7706 26.8455 28.9063 27.2926 28.9063 27.75C28.9056 28.3631 28.6618 28.951 28.2283 29.3845C27.7947 29.8181 27.2069 30.0619 26.5938 30.0625ZM32.375 26.5938H31.0546C30.803 25.6014 30.2278 24.7213 29.4199 24.0926C28.612 23.4639 27.6175 23.1225 26.5938 23.1225C25.57 23.1225 24.5755 23.4639 23.7676 24.0926C22.9597 24.7213 22.3845 25.6014 22.1329 26.5938H14.8671C14.6155 25.6014 14.0403 24.7213 13.2324 24.0926C12.4245 23.4639 11.43 23.1225 10.4063 23.1225C9.38253 23.1225 8.38804 23.4639 7.58012 24.0926C6.77219 24.7213 6.19696 25.6014 5.94544 26.5938H4.625V18.6237C4.62488 17.9275 4.83439 17.2474 5.22625 16.672L8.36084 12.0689C8.46684 11.9129 8.60939 11.7852 8.77606 11.697C8.94273 11.6087 9.12846 11.5625 9.31706 11.5625H18.5624C18.7307 11.5618 18.897 11.5982 19.0497 11.6689C19.2023 11.7396 19.3376 11.843 19.4458 11.9718L23.3771 16.9078C23.5108 17.0757 23.6885 17.203 23.8904 17.2755L32.375 20.3246V26.5938Z" fill="#1A1D23" />
                        </svg>
                        <span>Sobre o carro</span>
                    </SellMethod>
                    <InputContainer>
                        <label htmlFor="km">Qual é a quilometragem</label>
                        <InputForm type='text' id='km' />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="state">Estado do financiamento?</label>
                        <SelectForm name="state" id="state">
                            {
                                STATE_OF_FINANCING_OPTIONS.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })
                            }
                        </SelectForm>
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="location">Localização</label>
                        <InputForm type='text' id='location' ref={locationRef} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="price">Preço de venda:</label>
                        <InputForm ref={priceRef} type='number' id='price' />
                    </InputContainer>

                    <TipPhotos>
                        <span>
                            <img src="/camera.png" alt="" />
                            Veja algumas dicas de fotos para você destacar no seu anuncio
                        </span>
                        <PhotoList>
                            {
                                PHOTO_TIPS.map((tip) => {
                                    return <img key={tip} src={tip} alt="" />
                                })
                            }
                        </PhotoList>
                    </TipPhotos>
                    <AddPhotosContainer>
                        <h1>Adicionar Fotos</h1>
                        <div className="list">
                            <div className="add-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                                </svg>
                                <input multiple ref={photosRef} type="file" onChange={updatePhotos} />
                            </div>
                            {
                                photos.map((photo) => {
                                    return (
                                        <div key={Math.random()} className="preview">
                                            <img src={photo} alt="" />
                                        </div>
                                    );
                                })
                            }

                        </div>
                    </AddPhotosContainer>
                    <Bottom>
                        <p className='agreement'>Ao continuar, você está ciente que a OLX poderá compartilhar seus dados com instituições financeiras parceiras, que poderão oferecer soluções para potenciais compradores e que não compartilhamos seus dados com empresas de fora do Grupo OLX Brasil que oferecem atividades similares às nossas.O uso dos seus dados pode ser consultado na Política de privacidade, com a qual você concorda ao enviar o anúncio.</p>
                        <OrangeButton onClick={() => register()}>
                            Enviar anúncio
                        </OrangeButton>
                    </Bottom>
                </VehicleForm>

            </MainBox>

        </PageContainer>
    )
}

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    margin-bottom:100px;

    .agreement{
        padding-right: 20px;
        color: #1A1D23;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 33.1px; /* 206.875% */
    }
`;

const AddPhotosContainer = styled.div`
    flex-wrap: wrap;
    width: calc(100% -40px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 65px;
    margin-top: 53px;
    .list{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        flex-wrap: wrap;
    }

    .preview{
        background-color: gray;
        width: 153px;
        height: 153px;
        flex-shrink: 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }
    .add-btn{
        width: 153px;
        height: 153px;
        border: 1px dashed #9747FF;
        background: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        &:hover{
            opacity: 0.7;
        }

        input{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    h1{
        color: #1A1D23;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.6px; /* 122.5% */
    }
`;

const PhotoList = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
flex-direction: row;
flex-wrap: wrap;
img{
    width: 142px;
height: 77px;
}
`;

const TipPhotos = styled.div`
border: 1px solid #C8C8C8;
height: 239px;
max-width: 650px;
background: #FFF;
display: flex;
flex-direction: column;

span{
    display: flex;
    align-items: center;
    gap: 20px;
    color: #1A1D23;
    padding-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px; /* 140% */
}
`;

const SelectForm = styled.select`
height: 50px;
font-size: 14px;
width: 100%;
max-width: 584px;
border: 1px solid #C8C8C8;
padding-left: 10px;
padding-right: 10px;
background: #FFF;
border-radius: 10px;
cursor: pointer;
&:focus{
    outline: 1px solid #9747FF;
}
`;

const VehicleForm = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 52px;
`;

const InputForm = styled.input`
height: 50px;
border: 1px solid #C8C8C8;
background: #FFF;
font-size: 14px;
padding-left:10px;
border-radius: 10px;
&:focus{
    outline: 1px solid #9747FF;
}
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
max-width: 584px;

label{
    color: #1A1D23;

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19.6px; /* 122.5% */
}
`;

const ModalInfo = styled.div`
        display: flex;
        position: absolute;
        align-items: center;
        gap: 100px;
        right: -800px;
        top: 0;
        transform: translateY(-280px);
    h1,h2{
        color: #FFF;
        font-family: Inter;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 42.1px; 
        text-align: left;
    }

    .info{
        display: flex;
    width: 656px;
    height: 307px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    gap: 20px;
    }
`;



const ConnectToDREX = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    height: 323px;
    width: 100%;
    max-width: 844px;
    gap: 68px;
   
    .modal-btn{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 101;
    }

    .invisible-box{
        width: 100%;
        max-width: 388px;
        height: 323px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nft-box{
        width: 100%;
        max-width: 388px;
        height: 323px;
        border-radius: 10px;
        border: 1px dashed #9747FF;

        background: #FFF;
        display:flex;
        align-items: center;
        justify-content:center ;
        img{
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            padding: 10px;
            cursor: pointer;

            &:hover{
                border: 1px solid #9747FF;
            }
        }
    }
`;

const SMethod = styled.div`
width: 100%;
max-width:388px;
border-radius: 10px;
border: ${p => p.$attention == "true" ? "3px" : "1px"} solid ${p => p.$attention == "true" ? " #9747FF" : "#C8C8C8"};
background: #FFF;
box-shadow: ${p => p.$attention == "true" ? "0px 4px 20px 0px #9747FF" : "none"};
cursor: pointer;
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
gap: 15px;
h1{
    color: #1A1D23;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 125% */
}
span{
    color: #888;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 19.6px; /* 140% */
}
p{
    position: absolute;
    top: 120%;
    color: #1A1D23;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19.6px; /* 122.5% */
}
`;

const SellMethods = styled.div`
margin-top: 22px ;
    display: flex;
    align-items: center;
    padding-left: 50px;
    gap :68px;
    width: 100%;
    height: 180px;
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1320px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #C8C8C8;
    margin-top: 30px;
    position: relative;
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 60px;

    .choose-a-method{
        color: #1A1D23;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.6px; /* 122.5% */
        margin-top: 25px;
    }
`;

const SellMethod = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    margin-top: 100px;
    span{
        padding-top: 5px;
        color: #1A1D23;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 19.6px; /* 108.889% */
    }
`;

const BackButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: absolute;
    left: 40px;
    top: 30px;
    cursor: pointer;

    span{
        color: #1A1D23;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.6px; /* 122.5% */
    }
`;

const PageContainer = styled.div`
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        color: #1A1D23;
        text-align: center;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 19.6px; /* 81.667% */
    }
    overflow: ${p => p.$sm == 'true' ? "hidden" : "auto"};

    .hidden{
        display: none;
    }
`;
