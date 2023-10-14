import React from 'react'
import styled from 'styled-components';
import { MdOutlinePlace } from "react-icons/md";

export default function Product({ product, click }) {
    function getImg() {
        if (product?.images?.[0] && typeof product?.images?.[0] === 'string') {
            return product?.images?.[0];
        }
        
        return URL.createObjectURL(product?.images?.[0]);
    }
    return (
        <ProductItem onClick={()=> click()} key={product.name}>
            <img src={getImg()} alt={product} />
            <p className='price'>R$ {product?.price}</p>
            <p className='name'>{product?.name}</p>
            <p className='location'>{product?.location}</p>
            <p className='time'><MdOutlinePlace />{product?.createdAt}</p>

        </ProductItem>
    )
}


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
  transition: all 700ms;
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
