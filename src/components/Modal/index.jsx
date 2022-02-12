import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg';
import { ReactComponent as MinusSvg } from '../../assets/svgs/minus.svg';
import { ReactComponent as PlusSvg } from '../../assets/svgs/plus.svg';
import { ReactComponent as CartSvg } from '../../assets/svgs/cart.svg';
import { ReactComponent as ArrowSvg } from '../../assets/svgs/arrow.svg';
import {gsap} from 'gsap';
import { size } from '../../utils/constants';
import {Checkoutbtn} from '../Buttons/index';

const MobileModal = styled.div`
  position: fixed;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @media (min-width: ${size.tablet}) {
    display:none;
  }
`;

const CartModalWrap = styled.div`
  position: fixed;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: flex-end;
  flex-direction:column;
`;

const SearchWrap = styled.div`
  width: 89%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
    width: 95%;
  }
`;

const CartCont = styled.div`
  height: 100vh;
  width: 37vw;
  align-self: flex-end;
  background: #fefefe;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
  @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
    width: 74vw;
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    width: 54vw;
  }
`;

const CartNavCont = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  @media (max-width: ${size.mobileL}) {
    width: 88.3%;
  }
  @media (min-width: ${size.laptopL}) {
    width: 94%;
  }
`;

const ArrowWrap = styled(ArrowSvg)`
      cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ jc }) => jc || 'center'};
  width: ${({ width }) => width || 'auto'};
  cursor: ${({ cursor }) => cursor || 'auto'};
  margin-top: ${({ mt }) => mt || '0px'};
`;

const WebSearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-right: none;
  padding-left: 21px;
  padding-right: 21px;
  height: 36px;
  width: 100%;
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
`;

const BackText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  margin-left: 10px;
  color: #000000;
  cursor:pointer;
`;

const CartHeadingText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  margin-right: 10px;
`;

const CartItemWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 11px;
`;

const CartPadding = styled.div`
  padding: 0px 30px;
  overflow-y: scroll;
`;

const CartImage = styled.img`
  height: 90px;
  width: 60px;
  object-fit: cover;
  margin-right: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({jc}) => jc || 'initial'};
`;

const CartItemTitle = styled.p`
  font-style: normal;
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({width}) => width || '100%'};
  text-align: ${({textAlign}) => textAlign || 'left'};
  margin-top: ${({mt}) => mt || '0px'};
`;

const CartItemAuthor = styled.p`
  font-style: normal;
  font-family: Ubuntu;
  font-weight: normal;
  font-size: 12px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CartItemPrice = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: right;
  color: #000000;
`;

const Remove = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  cursor: pointer;
`;

const CounterBox = styled.div`
  cursor: pointer;
  background: ${({bg}) => bg ? '#f9f9fb' :'#FFFFFF' };
  border: 1px solid #dddddd;
  border-right: ${({br}) => br ? '1px solid #dddddd' : 'none'};
  border-left: ${({bl}) => bl ? '1px solid #dddddd' : 'none'};
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityText = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #000000;
`;

const SubtotalText = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
`;
const SubtotalAmount = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  text-align: right;
  letter-spacing: -1px;
  color: #000000;
`;

const SubtotalWrap = styled.div`
    margin-top: 38px;
`;


export const SearchModal = ({visible,setVisible}) => {
  const header = React.createRef();


  useEffect(() => {
      gsap.fromTo(header.current, { y: -100},{y:0});
  }, [visible]);

  const handleClose = () => {
     gsap.fromTo(header.current, { y: 0 },{y:-100});
     setTimeout(()=>{
      setVisible(false);
     },400);
  }

  return (
    <MobileModal visible={visible}>
      <SearchWrap ref={header}>
        <ArrowWrap onClick={handleClose} />

        <Row width="80%">
          <WebSearchInput placeholder="Books, genres, authors, etc." />
          <SearchBtn>
            <Search />
            {/* <CloseSvg /> */}
          </SearchBtn>
        </Row>
      </SearchWrap>
    </MobileModal>
  );
}

const CartItem = () => {
  return (
    <CartItemWrap>
      <Row alignItems="inital" jc="space-between">
        <CartImage src={require('../../assets/images/ee.png')} />
        <Col jc="space-between">
          <Col>
            <CartItemTitle width="80%">The Effective engineer</CartItemTitle>
            <CartItemAuthor>Edmond Lau</CartItemAuthor>
          </Col>

          <Remove>Remove</Remove>
        </Col>
      </Row>

      <Col jc="space-between">
        <Col>
          <CartItemPrice>$29.99</CartItemPrice>
          <CartCounter />
        </Col>

        <CartItemTitle mt="17px" textAlign="right">$59.98</CartItemTitle>
      </Col>
    </CartItemWrap>
  );
}

const CartCounter = () => {
  return (
    <Row mt="5px">
      <CounterBox br bl bg>
        <MinusSvg />
      </CounterBox>
      <CounterBox>
        <QuantityText>2</QuantityText>
      </CounterBox>
      <CounterBox br bl bg>
        <PlusSvg />
      </CounterBox>
    </Row>
  );
}


export const CartModal = ({visible,setVisible}) => {
  const searchHeader = React.createRef();

  useEffect(() => {
    gsap.fromTo(searchHeader.current, { x: 500 }, { x: 0 });
  }, [visible]);

  const handleClose = () => {
    gsap.fromTo(searchHeader.current, { x: 0 }, { x: 500 });
    setTimeout(() => {
      setVisible(false);
    }, 400);
  };

  return (
    <CartModalWrap visible={visible}>
      <CartCont
        ref={searchHeader}
      >
        <CartNavCont>
          <Row onClick={handleClose}>
            <ArrowWrap />
            <BackText>Back</BackText>
          </Row>

          <Row>
            <CartHeadingText>Your Cart</CartHeadingText>
            <CartSvg />
          </Row>
        </CartNavCont>

        <CartPadding>
          <CartItem />
          <SubtotalWrap>
            <Row width="100%" jc="space-between">
              <SubtotalText>Subtotal</SubtotalText>
              <SubtotalAmount>$94.76</SubtotalAmount>
            </Row>
          </SubtotalWrap>

          <Checkoutbtn />
        </CartPadding>
      </CartCont>
    </CartModalWrap>
  );
}
