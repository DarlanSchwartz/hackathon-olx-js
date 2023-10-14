import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components'

export default function ModalPaymentInProgress() {
    return (
        <ModalContainer>
            <h1>Estamos processando seu pagamento</h1>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#6E0AD6"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    h1{
        color: #242424;
        text-align: center;
        font-family: Inter;
        font-size: 29.089px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
