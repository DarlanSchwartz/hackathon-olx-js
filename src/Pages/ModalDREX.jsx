import React from 'react'
import styled from 'styled-components';

export default function ModalDREX({children}) {
  return (
    <ModalContainer>
{children}
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
    width: 100%;
    height: 100svh;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`;
