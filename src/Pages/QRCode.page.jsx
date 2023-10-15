import React from 'react'
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { MdPix } from 'react-icons/md';
import { useLocation, useNavigate } from "react-router-dom";
import ModalPaymentInProgress from './ModalPaymentInProgress.modal';
const paymentSucessAfter = 3000;
const copyCodeValue = "PIXomQ1rSEZUclE7aepI+TqRsQQtTwEv3W6oQ3wvB6g89RMSGcLK4Vw4QQBt3Co4JP7ZsJTUEywhs+9PpKa1LCAR3EvRImlQljJcyVEirhZ/3DhDMgfMcbOFt80JpIOIbrAcwWAVb4VsKXznOmtvhuyQhPUGNuOmnt4LpzHhsdaZMwn/";
export default function QRCodePage() {
    const [showModal, setShowModal] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [copyQrCodeValue, setCopyQrCodeValue] = useState("");
    const navigate = useNavigate();
    const state = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1 < 0 ? 0 : seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    function segundosParaMinutos(segundos) {
        if (segundos === 0) return "Expirado";
        var minutos = Math.ceil(segundos / 60);
        return minutos + " minutos";
    }
    useEffect(() => {
        setSeconds(1800);
        setCopyQrCodeValue(copyCodeValue);
        window.scrollTo(0, 0);
    }, []);

    function pay() {
        setShowModal(true);
        setTimeout(async () => {
            navigate('/status-buyer');
        }, paymentSucessAfter);
    }

    async function copyTextToClipboard() {
        try {
            await navigator.clipboard.writeText(copyQrCodeValue);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PageContainer>

            <EffetuatePixPaymentContainer>
                <Title>
                    <MdPix className="icon" />
                    <p>PIX</p>
                </Title>

                <MainContainer>
                    <ContentMainContainer>
                        <LeftTutorialContainer>
                            <TutorialStep>
                                <span>1</span>
                                <h1>Abra seu aplicativo de pagamentos ou internet baking</h1>
                            </TutorialStep>
                            <TutorialStep>
                                <span>2</span>
                                <h1>Busque pela opção “pagamento via PIX”</h1>
                            </TutorialStep>
                            <TutorialStep>
                                <span>3</span>
                                <h1>Copie o codigo abaixo</h1>
                            </TutorialStep>
                            <CopyPIXInput autoFocus value={copyQrCodeValue} />
                        </LeftTutorialContainer>

                        <RightQRCodeContainer>
                            <ValueBox>
                                <h1>Valor</h1>
                                <span>{state?.state?.price || "R$ 89.000,90"}</span>
                            </ValueBox>
                            <img onClick={pay} src="/images/imagem-q-rcode.png" alt="" />
                            <p>Válido por {segundosParaMinutos(seconds)}</p>
                        </RightQRCodeContainer>
                    </ContentMainContainer>
                </MainContainer>

                {
                    showModal &&
                    <ModalPaymentInProgress />
                }
            </EffetuatePixPaymentContainer>
        </PageContainer>
    )
}

const ValueBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
flex-direction: column;
position: absolute;
right: 100px;
top: 50px;

h1{
    color: #3C4453;

text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 19.6px; /* 81.667% */
}
span{
    color: #3C4453;

text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 19.6px; 
}
`;


const PageContainer = styled.div`
width: 100%;
height: 100%;
min-height: 100svh;
padding-top: 140px;
padding-left: 30px;
padding-right: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ContentMainContainer = styled.div`
    display: flex;
    width: 100%;
`;
const RightQRCodeContainer = styled.div`
    max-width: 225px;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    p{
        color: #808080;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    &:focus{
        outline: none;
    }

    img{
        width: 225px;
        aspect-ratio: 1;
    }
`;

const CopyPIXInput = styled.textarea`
    display: flex;
    width: 100%;
    max-width: 426px;
    height: 88px;
    padding: 8px 7px 9px 7px;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #717171;
    resize: none;
    &:focus{
        outline: none;
    }
`

const TutorialStep = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        color: #6E0AD6;
        border-radius: 50%;
        border: 3px solid #510a9c;
        height: 38px;
        width: 38px;
        flex-shrink: 0;
    }
    h1{
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:#808080;
    }
`;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 36px;
`;
const LeftTutorialContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 450px;
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 40px;

    gap: 6px;
    flex-shrink: 0;
    color: #808080;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    .icon{
        flex-shrink: 0;
        color: #510a9c;
    }
`;

const EffetuatePixPaymentContainer = styled.div`
    max-width: 804px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    border-radius: 20px;
    border: 1px solid #e2e2e2;
    position: relative;
    .copy-btn{
        margin-top: 25px;
    }
`;