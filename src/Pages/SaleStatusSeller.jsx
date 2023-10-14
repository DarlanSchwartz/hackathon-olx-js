import React from 'react'
import styled from 'styled-components';

export default function SaleStatusSeller() {
  return (
    <PageContainer>
    <h1 className='title'>Status da venda</h1>
    <ProgressBar>
        <div className='line'></div>
        <div className='rounded purple'>
            <StatusInfo translate='translateX(0)'>
                <h1>PIX recebido</h1>
                <p>
                    Agora com o PIX recebido. Você precisa marcar com o comprador para ele avaliar o carro e submeter as imagem na plataforma da OLX
                </p>
            </StatusInfo>
        </div>
        <div className='rounded'>
            <StatusInfo translate='translateX(-40%)'>
                <h1 className='center'>Auditoria do veiculo</h1>
                <p className='center'>
                    Nessa etapa a OLX avalia se o veiculo está como anunciado e de acordo com os parâmetros da plataforma
                </p>
            </StatusInfo>

        </div>
        <div className='rounded'>
            <StatusInfo translate='translateX(-80%)'>
                <h1 className='right'>DUT Transferido</h1>
                <p className='right'>
                    Após a avaliação do veiculo e 30 dias para contestação do usuário o DUT é transferido via DREX para conta atrelada ao comprador pelo banco central.
                </p>
            </StatusInfo>

        </div>
    </ProgressBar>
</PageContainer>
  )
}

const StatusInfo = styled.div`
width: 210px;

display: flex;
justify-content: center;
flex-direction: column;
position: absolute;
top: 120%;
left: 0;
transform: ${props => props.translate};
h1{
    color: #1A1D23;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 33.1px; /* 206.875% */
}
.right{
    text-align: right;
}

.center{
    text-align: center;
}
p{
    color: #1A1D23;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.1px; /* 100.714% */
}
`;

const PageContainer = styled.div`
padding-left: 20px;
padding-right: 20px;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 200px;
.title{
    color: #1A1D23;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.6px; /* 81.667% */
}
`;

const ProgressBar = styled.div`
width: 100%;
max-width: 1366px;
margin-top: 60px;
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
.rounded{
    width: 36px;
height: 36px;
flex-shrink: 0;
background-color: #D9D9D9;
border-radius: 50%;
position: relative;
}

.line{
    height: 2px;
    background-color: black;
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
}

.purple{
    background-color: #6E0AD6;
}
`;

