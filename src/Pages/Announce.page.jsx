
import styled from 'styled-components';
import { SlArrowUp } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AiOutlineCalculator } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFlag } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


import SCAnnouceInfo from '../Components/SCAnnouceInfo.component';

export default function AnnouncePage() {

    const [Car, setCar] = useState();
    const state = useLocation();
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(updateCarInfo, []);
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    function updateCarInfo() {
        const car = state.state;
        setCar(car);
        setMainImage(getMainImg(car));
    }

    function getMainImg(car) {

        if (car?.images?.[0] && typeof car?.images?.[0] === 'string') {
            return car?.images?.[0];
        }

        return URL.createObjectURL(car?.images?.[0]);
    }

    function getImage(img) {
        if (img && typeof img === 'string') {
            return img;
        }
        return URL.createObjectURL(img);
    }
    function changeCurrentImageButtonAction(up) {

        if (up) {
            if (Car?.images?.[currentImageIndex - 1]) {
                setMainImage(getMainImg({ ...Car, images: [Car?.images?.[currentImageIndex - 1]] }));
                setCurrentImageIndex(cur => {
                    return cur - 1;
                });

            }
        }
        else {
            if (Car?.images?.[currentImageIndex + 1]) {
                setMainImage(getMainImg({ ...Car, images: [Car?.images?.[currentImageIndex + 1]] }));
                setCurrentImageIndex(cur => {
                    return cur + 1;
                });
            }
        }
    }

    return (
        <PageContainer>
            
            <ProductContainer>
            <h1 className='car-title'>{Car?.name || "Carregando.."}</h1>
                <PhotoContainer>
                    <img src={mainImage} className='main-photo' alt="" />
                    <PhotoList>
                        <button onClick={() => changeCurrentImageButtonAction(true)}>
                            <SlArrowUp />
                        </button>
                        {
                            Car?.images?.map((img, index) => (
                                <PhotoListImg onClick={() => {
                                    setMainImage(getMainImg({ ...Car, images: [img] }));
                                    setCurrentImageIndex(index);
                                }} src={getImage(img)} />
                            ))
                        }
                        {/*change image to before button */}
                        <button onClick={() => changeCurrentImageButtonAction(false)}>
                            <SlArrowUp style={{ transform: "rotateZ(180deg)" }} />
                        </button>
                    </PhotoList>
                    <button onClick={() => changeCurrentImageButtonAction(false)} className='arrow right'>
                        <SlArrowUp style={{ transform: "rotateZ(90deg)" }} />
                    </button>
                    <button onClick={() => changeCurrentImageButtonAction(true)} className='arrow left'>
                        <SlArrowUp style={{ transform: "rotateZ(-90deg)" }} />
                    </button>
                </PhotoContainer>
                <CarInfo>
                    <SimulateContainer>
                        <AiOutlineCalculator className="icon" />
                        Simular Financiamento
                    </SimulateContainer>
                    <h2>Estado financeiro</h2>
                    <ItemList>
                        <Item>
                            Aceita trocas
                        </Item>
                    </ItemList>
                    <h2>Documentação e regularização</h2>
                    <ItemList>
                        <Item>
                            IPVA pago
                        </Item>
                    </ItemList>
                    <h2>Conservação e garantia</h2>
                    <ItemList>
                        <Item>
                            Único dono
                        </Item>
                        <Item>
                            Com manual
                        </Item>
                        <Item>
                            Chave reserva
                        </Item>
                        <Item>
                            Revisõpes feitas em concessionária
                        </Item>
                        <Item>
                            Com arantia
                        </Item>

                    </ItemList>
                </CarInfo>
                <EmptyBox />
                <ActionList>
                    <div>
                        <AiOutlineHeart className="icon" />
                        Favoritar
                    </div>
                    <div>
                        <AiOutlineShareAlt className="icon" />
                        Compartilhar
                    </div>
                    <div>
                        <BsFlag className="icon" />
                        Denunciar
                    </div>
                </ActionList>
                <PriceReference>
                    <h1>Referência de preço</h1>
                    <img src="/box-reference-price.png" alt="" />
                </PriceReference>
                <Caracteristicas>
                    <img src="/caracteristicas.png" alt="" />
                </Caracteristicas>
            </ProductContainer>

            <BuyContainer>
                <PriceContainer>
                    <span>{Car?.price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, }) || "R$ 0,00"}</span>
                </PriceContainer>
                <BuyBox>
                    <h1>Comprar via DREX</h1>
                    <button onClick={() => navigate('/qr-code-pay', { state: { price: Car?.price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, }) || "R$ 0,00" } })}>Comprar</button>
                </BuyBox>
                <SCAnnouceInfo />
            </BuyContainer>
        </PageContainer>
    )
}

const Caracteristicas = styled.div`
margin-bottom: 100px;
`;

const PriceReference = styled.div`
    margin-top: 30px;
    display: flex;
    h1{
        color: #1A1D23;
        font-family: Nunito Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 26.4px;
    }
    img{
        width: 326px;
    }
`;

const ActionList = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    div{
        display: flex;
        align-items: center;

        height: 40px;
        padding: 8px 24.601px 8px 25px;
        justify-content: center;

        gap: 8px;
        border-radius: 500px;
        border: 1px solid #C8C8C8;
        color: #C8C8C8;

        text-align: center;
        font-family: Nunito Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
    }
`;
const EmptyBox = styled.div`
    width: 100%;
    height: 116px;
    border-radius: 10px;
    background: #F5F6F7;
    margin-top: 30px;
`;

const Item = styled.div`
    display: flex;
    height: 26px;
    padding: 5px 7.691px 5px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #F5F6F7;
    color: #888;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 150% */
`;
const ItemList = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin-top: 15px;
`;
const SimulateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #888;
    .icon{
        font-size: 25px;
    }

    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.6px; 
`;

const CarInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;

    h2{
        margin-top: 20px;
        color: #626262;

        font-family: Nunito Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 19.6px; /* 140% */
    }
`;

const BuyBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 80px;
border-radius: 8px;
border: 1px solid #CFD4DD;
height: 218.5px;
background: #FFF;
width: 100%;
margin-top: 16px;
h1{
    color: #1A1D23;

text-align: center;
font-family: Nunito Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 31.68px; /* 132% */
}
button{

    color: #FFF;

text-align: center;
font-family: Nunito Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
    display: flex;
width: 216px;
height: 40px;
padding: 8.33px 17px 7.67px 17px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 24px;
background: #F28000;
border:1px solid transparent;

&:hover{
    background: white;
    color: #F28000;
    border: 1px solid #F28000;
    opacity: 0.8;
}
}
`;

const PriceContainer = styled.div`
width: 100%;
height: 64px;
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
border: 1px solid #5206AE;

background: #FFF;
span{
color : #5206AE;
text-align: center;
font-family: Nunito Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 44px;
}
`;

const PageContainer = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    justify-content:center;

    .car-title{
        position: absolute;
        left: 0;
        top: -50px;
        color: #1A1D23;

        text-align: center;
        font-family: Nunito Sans;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.68px; /* 132% */
    }
`;
const PhotoListImg = styled.img`
    width: 56px;
    height: 56px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`;
const PhotoList = styled.div`
    width: 56px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: absolute;
    right: -64px;
    top: 0;

    button{
        background-color: #cecbcb;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 0;
        color: gray;
        border-radius: 4px;
        width: 56px;
        height: 32px;
    }
`;

const BuyContainer = styled.div`
width: 40%;
margin-top: 200px;
max-width:  288px;
margin-left: 100px;
`;

const ProductContainer = styled.div`
    width: 60%;
    margin-top: 200px;
    position: relative;
`;

const PhotoContainer = styled.div`
height: 408px;
width: 100%;
max-width: 776px;
background-color: #F1F1F1;
display: flex;
align-items: center;
justify-content: center;
position: relative;

.left{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}


.right{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.arrow{
height: 56px;
width: 24px;
display: flex;
align-items: center;
justify-content: center;
border: 0;
border-radius: 4px 0px 0px 4px;
opacity: 0.8;
background: #D9D9D9;
&:hover{
   background-color: #F28000;
}
}
.main-photo{
    max-width: 700px;
    width: 80%;
    height: 100%;
    max-height: 408px;
    object-fit: cover;
    &:hover{
        border: 1px solid #F28000;
        scale: 1.3;
        z-index: 5;
    }
}
`;