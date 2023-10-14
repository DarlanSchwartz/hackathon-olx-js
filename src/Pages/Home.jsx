import React, { useContext } from 'react'
import styled from 'styled-components'
import { PHOTO_CATEGORIES } from './constants';
import ApplicationContext from '../AppContext';
import { MdOutlinePlace } from "react-icons/md";

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

            <ProductItem key={product.name}>
              <img src={product.images[0]} alt={product} />
              <p className='price'>R$ {product.price}</p>
              <p className='name'>{product.name}</p>
              <p className='location'>{product.location}</p>
              <p className='time'><MdOutlinePlace />{product.createdAt}</p>

            </ProductItem>
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

const ProductItem = styled.li`
width: 248.66px;
height: 344px;
border-radius: 8px;
overflow: hidden;
position: relative;
border: 1px solid #e6e6e6;
cursor: pointer;
p{
  padding-left: 16px;
}
img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
}
.price{
  color: #1A1D23;
font-family: Inter;
font-size: 17.297px;
font-style: normal;
font-weight: 600;
line-height: 27px; /* 156.098% */
margin-top: 190px;
margin-bottom: 18px;
}
.name{
  color: #1A1D23;
font-family: Inter;
font-size: 13.453px;
font-style: normal;
font-weight: 400;
line-height: 18.48px; /* 137.366% */
}

.location{
  color: #3C4453;

  font-family: Inter;
  font-size: 11.438px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 35px;
  .icon{
    font-size: 16px;
  }
}

.time{
  color: #3C4453;

font-family: Inter;
font-size: 11.625px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
}

&:hover{
  img{
    transform: scale(1.3);
    height: 45%;
  }
}
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
