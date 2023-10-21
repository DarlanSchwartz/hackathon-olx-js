import styled from "styled-components";

const OrangeButton = styled.button`

display: flex;
width: 211px;
height: 52px;
padding: 0px 26.074px;
justify-content: center;
align-items: center;
gap: 11.852px;
flex-shrink: 0;
border-radius: 35.556px;
background: #FFA800;
border: 1px solid transparent;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
position: relative;

&:enabled{
    &:hover{
    color: #FFA800;
    border: 1px solid #FFA800;
    background-color: white;
}
}
&:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}
`;

export default OrangeButton;