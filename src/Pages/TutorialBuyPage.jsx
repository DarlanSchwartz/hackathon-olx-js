import React from 'react'
import styled from 'styled-components';
import OrangeButton from '../Components/OrangeButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TutorialBuyPage() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <PageContainer>
            <Items>
                <List>
                    <Item>
                        <h1>Você realiza um PIX para o endereço do contrato</h1>
                        <div className='image-box'>
                            <img src="/images/first.png" alt="" />
                        </div>

                        <p style={{ width: "291px", height: "96px" }}>
                            Quando você realiza esse envio, o dinheiro não irá diretamente para o vendedor, e ficará em um “Contrato Inteligente”, ou seja a OLX armazenará seu dinheiro com segurança.
                        </p>
                    </Item>
                    <Item>
                        <h1>Entrega do veículo</h1>
                        <div className='image-box'>
                            <img src="/images/second.png" alt="" />
                        </div>
                        <p style={{ width: "291px", height: "96px" }}>
                            No mesmo endereço que você depositou seu dinheiro, o vendedor também depositou o DUT do veículo. Dessa forma, ambas as partes estão protegidas ao se encontrarem e fazer a troca de posse do veículo.
                        </p>
                    </Item>
                    <Item>
                        <h1>Transferências de bens</h1>
                        <div className='image-box'>
                            <img src="/images/third.png" alt="" />
                        </div>
                        <p style={{ width: "317px", height: "96px" }}>
                            Você realiza uma vistoria ao receber o veículo, pela Plataforma OLX. Após esse momento, você tem 30 dias de segurança para contestar algo que tenha saído errado no processo de venda. Após esses 30 dias, você terá o veículo registrado em seu nome e o vendedor receberá o seu dinheiro.
                        </p>
                    </Item>
                </List>
                <Footer>
                    <OrangeButton
                        style={{ maxWidth: '225px', width: '100%' }}
                        onClick={() => navigate('/qr-code-pay',
                            {
                                state:
                                {
                                    price: location.state?.price
                                }
                            }
                        )}>Fazer transferência</OrangeButton>
                </Footer>
            </Items>

        </PageContainer>
    )
}
const List = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: row;
`;
const Footer = styled.footer`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

`;
const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    margin-bottom: 70px;
`;
const PageContainer = styled.div`
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: 496px;
    height: 556px;
    border-radius: 10px;
    border: 1px solid #6E0AD6;
    padding: 30px;
    h1{
        color: #1A1D23;
        text-align: center;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 28.1px;
        height: 39px;
    }
    .image-box{
        width: 314px;
        height: 273px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
        }
    }
    

    p{
        color: #1A1D23;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        height: 96px;
    }
`;
