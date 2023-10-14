import React from 'react'
import styled from 'styled-components';

export default function Compliance() {
  return (
    <PageContainer>
        <h1 className='title'>Tire a fotos do veiculo como na imagem a baixo</h1>
    </PageContainer>
  )
}


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