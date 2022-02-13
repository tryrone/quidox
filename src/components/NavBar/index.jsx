import React, { useContext } from 'react';
import styled  from 'styled-components';
import { ReactComponent as Logo } from '../../assets/svgs/brand-icon.svg';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import { ReactComponent as BookSvg } from '../../assets/svgs/books.svg';
import { ReactComponent as CartSvg } from '../../assets/svgs/cart.svg';
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg';
import { size } from '../../utils/constants';
import { BookContext } from '../../context/BookContext';
import {Link} from 'react-router-dom';


const NavWrapper = styled.nav`
  padding: 25px 40px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #eeeeee;
  position: fixed;
  width: 96%;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  top: 0;
  @media (max-width: ${size.mobileL}) {
    padding: 15px; 
    width: 92%;
  }
  @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
    padding: 15px;
    width: 95%;
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    padding: 15px;
    width: 97%;
  }
  @media (min-width: ${size.laptop}) {
    padding: 15px;
    width: 98%;
  }
  @media (min-width: ${size.desktop}) {
    padding: 15px;
    width: 99%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ jc }) => jc || 'center'};
  width: ${({ width }) => width || 'auto'};
  cursor: ${({cursor}) =>  cursor || 'auto'};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ml}) => ml || '0px'};
`;

const Title = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  color: black;
  @media (max-width: ${size.tablet}) {
    font-weight: bold;
    font-size: 14px;
  }
`;

const SubTitle = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  text-decoration: none;
  color: #aaaaaa;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const WebSearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-right: none;
  padding-left: 21px;
  padding-right: 21px;
  height: 36px;
  width: 55%;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #999999;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9fb;
  border: 1px solid #dddddd;
  padding-left: 12px;
  padding-right: 12px;
  height: 40px;
  outline: none;
  cursor:  pointer;
`;

const CartIcon = styled(CartSvg)`
  margin-left: 29px;
  @media (max-width: ${size.tablet}) {
    margin-left: 16px;
    margin-right: 12px;
  }
`;

const CartWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartTotalWrap = styled.div`
  height: 20px;
  width: 20px;
  border-radius: ${20 * 0.5}px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #65c100;
  position: absolute;
  top: -10px;
  right: -10px;
  @media (max-width: ${size.tablet}) {
    right: 4px;
  }
`; 

const CartTotalText = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;

const SearchWrap = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const MobileSearch = styled(Search)`
  margin-right: 37px;
  cursor: pointer;
  @media (min-width: ${size.tablet}) {
    display: none;
  }
`;



const NavBar = () => {
  const { setSearchModal, setCartModal, searchText,setSearchText } = useContext(BookContext);
  return (
    <NavWrapper>
      <Link to="/">
        <Row cursor="pointer">
          <Logo />
          <Col ml="15px">
            <Title>Quidax Books</Title>
            <SubTitle>A flimsy book company</SubTitle>
          </Col>
        </Row>
      </Link>

      <SearchWrap>
        <Row width="70%">
          <WebSearchInput
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search books, genres, authors, etc."
          />
          <SearchBtn onClick={() => setSearchText('')}>
            {searchText ? <CloseSvg /> : <Search />}
          </SearchBtn>
        </Row>
      </SearchWrap>

      <Row>
        <MobileSearch
          onClick={() => {
            setSearchModal(true);
          }}
        />
        <BookSvg />
        <CartWrap onClick={() => setCartModal(true)}>
          <CartIcon />
          <CartTotalWrap>
            <CartTotalText>3</CartTotalText>
          </CartTotalWrap>
        </CartWrap>
      </Row>
    </NavWrapper>
  );
}

export default NavBar