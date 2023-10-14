import React from 'react'
import styled from 'styled-components';
import OrangeButton from '../Pages/OrangeButton';
import Product from './Product.component';

export default function MyAnnounce({ product,onClick }) {
  return (
    <MyAnnounceContainer>
      <Product product={product} />
      <Actions>
        <OrangeButton onClick={() => onClick()}>
          Status de venda
        </OrangeButton>
        <OrangeButton disabled>
          Editar
        </OrangeButton>
      </Actions>
    </MyAnnounceContainer>
  )
}

const MyAnnounceContainer = styled.div`
width: 651px;
height: 404px;
border-radius: 10px;
border: 1px solid #888;
display: flex;
justify-content: space-between;
padding: 25px;
`;

const Actions = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 58px;
height: 100%;
`;