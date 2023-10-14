import styled from 'styled-components';
import { useState } from 'react';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { BsGrid, BsChat, BsBell, BsSearch } from 'react-icons/bs';
import OrangeButton from '../Pages/OrangeButton';
import { useNavigate } from 'react-router-dom';

export default function Header({ show_sb, show_items, show_announce_btn }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <img src="/olx-logo.png" alt="" />
            {
                show_sb &&
                <SearchBarContainer>
                    <input type="text" placeholder="Buscar..." value={search} onChange={e => setSearch(e.target.value)} />
                    <BsSearch className="icon" />
                </SearchBarContainer>
            }
            {
                show_items &&
                <>
                    <HeaderItem>
                        <PiSuitcaseSimpleDuotone />
                        <span>Plano Profisional</span>
                    </HeaderItem>
                    <HeaderItem>
                        <BsGrid />
                        <span>Meus anúncios</span>
                    </HeaderItem>
                    <HeaderItem>
                        <BsChat />
                        <span>Chat</span>
                    </HeaderItem>
                    <HeaderItem>
                        <BsBell />
                        <span>Notificações</span>
                    </HeaderItem>
                </>
            }
            <HeaderUser>
                <div></div>
                <span>Nome e sobrenome</span>
            </HeaderUser>
            {
                show_announce_btn &&
                <OrangeButton onClick={() => navigate('/register')} style={{ maxWidth: "107.08px" }}>
                    Anunciar
                </OrangeButton>
            }
        </HeaderContainer>
    )
}

const HeaderUser = styled.div`
width: 232px;
height: 58px;
border-radius: 40px;
border: 1px solid #C8C8C8;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
gap: 15px;
background: #FFF;
color: #5E6A82;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 150% */
padding-right: 20px;
cursor: pointer;
div{
    width: 42px;
height: 42px; 
background-color: #D9D9D9;
border-radius: 50%;
}
`;

const HeaderContainer = styled.header`
display: flex;
width: 100%;
padding: 0px 12.648px 0px 27.825px;
border-bottom: 1.265px solid #888;
z-index: 99;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 12.648px;
position: fixed;
top: 0;
left: 0;
background: #FFF;

img{
    width: 98.652px;
height: 98.652px;
}
`;

const SearchBarContainer = styled.div`
display: flex;
align-items: center;
position: relative;
justify-content: center;
width:100%;
max-width: 420px;
font-size: 17.707px;
color: #888;

.icon{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
input{
    border-radius: 6.324px;
    border: 1.265px solid #888;
    background: #FFF;
    padding: 5.059px 10.118px;
   width:100%;
   height: 45px;

    font-family: Inter;
   
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;

const HeaderItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
max-width: fit-content;
gap: 10px;
cursor: pointer;
color: #888;

text-align: center;
font-family: Inter;
font-size: 17.707px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
