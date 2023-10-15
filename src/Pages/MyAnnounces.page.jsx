import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import MyAnnounce from '../Components/MyAnnounce.component';
import ApplicationContext from '../AppContext';
import { useNavigate } from 'react-router-dom';

export default function MyAnnouncesPage() {
    const { products, setProducts } = useContext(ApplicationContext);
    const  navigate  = useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <PageContainer>
            <h1 className='title'>Meus anúncios</h1>
            <AnnouncesList>
            {
                products.map((product) => (
                    <MyAnnounce key={product.name} product={product} onClick={()=> navigate('/status-seller')} />
                ))
            }
            <NewAnnounce>
                <button onClick={()=> navigate('/register')}>+</button>
            </NewAnnounce>
            </AnnouncesList>
           
        </PageContainer>
    )
}

const PageContainer = styled.div`
width: 100%;
padding-top: 140px;
padding-left: 30px;
padding-right: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.title{
    width: 100%;
    max-width: 1559px;
    text-align: left;
    color: #1A1D23;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 33.1px; /* 103.437% */
}
`;

const NewAnnounce = styled.li`
width: 651px;
height: 404px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 1px dashed #6E0AD6;
button{
    border-radius: 50%;
    width: 58px;
height: 58px;
flex-shrink: 0;
background-color: #9747FF;
border: 0;
font-size: 50px;
display: flex;
align-items: center;
justify-content: center;
color: white;
padding-bottom: 5px;
}
`;

const AnnouncesList = styled.ul`

width: 100%;
display: flex;
flex-direction: row;
height: 344px;
gap: 26px;
flex-wrap: wrap;
margin-top: 25px;
max-width: 1559px;
margin-bottom: 100px;
`;