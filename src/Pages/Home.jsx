import React, { useContext } from 'react'
import styled from 'styled-components'
import { PHOTO_CATEGORIES } from './constants';
import ApplicationContext from '../AppContext';

import Product from '../Components/Product.component';

export default function Home() {
  const { products, setProducts } = useContext(ApplicationContext);
  return (
    <PageContainer>
      <Banner>
        <img src="/images/banner.png" alt="" />
      </Banner>
      <CategorieList>
        {
          PHOTO_CATEGORIES.map((category) => (

            <CategoryItem key={category.name}>
              <div className='back'></div>
              <img src={category.image} alt={category} />
              <p>{category.name}</p>
            </CategoryItem>
          ))
        }
      </CategorieList>

      <h1 className='recommended-text'>Recomendados para você da categoria Carros, vans e utilitários</h1>

      <ProductList>
        {
          products.map((product) => (

            <Product key={product.name} product={product}/>
          ))
        }
      </ProductList>
    </PageContainer>
  )
}

const ProductList = styled.ul`
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


const PageContainer = styled.div`
width: 100%;
padding-top: 140px;
padding-left: 30px;
padding-right: 30px;
display: flex;
flex-direction: column;
align-items: center;

.recommended-text{
  text-align: left;
  max-width: 1559px;
  width: 100%;
  color: #1A1D23;

  font-family: Inter;
  font-size: 22.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 31.68px; /* 140.8% */
  margin-top: 100px;
}
`;

const Banner = styled.div`
border-radius: 16px;
width: 100%;
height: 350px;
padding-left: 20px;
padding-right: 20px;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 40px;
}
`;

const CategorieList = styled.ul`
width: calc(100% - 40px);
display: flex;
flex-direction: row;
gap: 44px;
justify-content: center;
flex-wrap: wrap;
margin-top: 25px;
`;

const CategoryItem = styled.li`
display: flex;
width: 92px;
flex-direction: column;

padding: 14px;
justify-content: center;
align-items: center;
flex-shrink: 0;
position: relative;
p{
  margin-top: 8px;
  color: #1A1D23;
text-align: center;
font-family: Inter;
font-size: 12.688px;
font-style: normal;
font-weight: 600;
line-height: 19.6px; /* 154.483% */
}
.back{
  width: 92px;
  flex-shrink: 0;
  border-radius: 16px;
background: #F5F6F7;
height: 92px;
}

img{
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
}
`;
