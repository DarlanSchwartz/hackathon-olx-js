import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { BsGrid, BsChat, BsBell, BsSearch } from 'react-icons/bs';
import OrangeButton from './OrangeButton';
import { useNavigate } from 'react-router-dom';

const PLACEHOLDER_SEARCH_WORDS = [
  "Celular",
  "Carro",
  "Apartamento"
];

export default function Header({ show_sb, show_items, show_announce_btn }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [textoOriginal, setTextoOriginal] = useState(PLACEHOLDER_SEARCH_WORDS[0]);
  const [textoAtual, setTextoAtual] = useState('');
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    function adicionarLetra() {
      if (index < textoOriginal.length) {
        setTextoAtual((prevTexto) => prevTexto + textoOriginal[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Apagar o texto atual letra por letra
        if (textoAtual.length > 0) {
          setTextoAtual((prevTexto) => prevTexto.slice(0, -1));
        } else {
          // Quando o texto atual estiver vazio, mude para a próxima palavra
          setIndex(0);
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % PLACEHOLDER_SEARCH_WORDS.length);
          setTextoOriginal(PLACEHOLDER_SEARCH_WORDS[(wordIndex + 1) % PLACEHOLDER_SEARCH_WORDS.length]);
        }
      }
    }

    const interval = setInterval(adicionarLetra, 200);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [index, textoOriginal, textoAtual, wordIndex]);


  return (
    <HeaderContainer>
      <img src="/olx-logo.png" alt="" onClick={() => navigate('/')} />
      {show_sb && (
        <SearchBarContainer>
          <input
            type="text"
            placeholder={("Buscar &quot;" + textoAtual + "&quot;").replace(/&quot;/g, '"')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="icon" />
        </SearchBarContainer>
      )}
      {show_items && (
        <>
          <HeaderItem>
            <PiSuitcaseSimpleDuotone />
            <span>Plano Profissional</span>
          </HeaderItem>
          <HeaderItem onClick={() => navigate('/my-announces')}>
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
      )}
      <HeaderUser>
        <div></div>
        <span>Fulano</span>
      </HeaderUser>
      {show_announce_btn && (
        <OrangeButton onClick={() => navigate('/register')} style={{ maxWidth: "107.08px" }}>
          Anunciar
        </OrangeButton>
      )}
    </HeaderContainer>
  );
}


const HeaderUser = styled.div`
width: 100%;
    max-width: 232px;
    height: 58px;
    border-radius: 40px;
    border: 1px solid #C8C8C8;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    white-space: nowrap;
    div{
        flex-shrink: 0;
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
        cursor: pointer;
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
