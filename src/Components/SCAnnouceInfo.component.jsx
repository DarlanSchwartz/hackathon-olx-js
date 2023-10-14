import { CiLocationOn } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import styled from 'styled-components';

export default function SCAnnouceInfo() {
    return (
        <ContactInfoBox>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
            <div className='divider'></div>
            <div className='box-icon'>
                <CiLocationOn />
                <div className='box2'></div>
            </div>
            <div className='divider'></div>
            <div className='box-icon'>
                <BiTimeFive />
                <div className='box2'></div>
            </div>
            <div className='divider'></div>
            <div className='box-icon'>
                <BsFacebook />
                <div className='box2'></div>
            </div>
            <div className='box-icon'>
                <MdEmail />
                <div className='box2'></div>
            </div>
            <div className='box-icon'>
                <AiFillPhone />
                <div className='box2'></div>
            </div>
        </ContactInfoBox>
    )
}


const ContactInfoBox = styled.div`
display: flex;
flex-direction: column;
padding: 25px 17px;
border-radius: 8px;
border: 1px solid #CFD4DD;
display: flex;
width: 100%;
height: 380px;
padding: 25px 17px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 16px;
flex-shrink: 0;
margin-top: 16px;

.box1{
    width: 100%;
    height: 26.39px;
    border-radius: 5px;
background: #C8C8C8;
}
.box2, .box3{
    width: 103px;
    height: 16px;
    border-radius: 5px;
background: #D9D9D9;
}

.box-icon{
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    color:#a3a3a3;
}

.divider{
   height: 1px;
   background-color: #CFD4DD;
   width: 100%;
}

`;

