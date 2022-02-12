import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CartSvg } from '../../assets/svgs/cartWhite.svg';

const BtnWrap = styled.button`
  outline: none;
  border: none;
  background: #000000;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  margin-top: 18px;
  padding: 19px; 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

const GhostBlock = styled.div`
  height: 20px;
  width: 20px;
`;

const CheckoutText = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

export const Checkoutbtn = () => {
  return (
    <BtnWrap>
      <CartSvg />
      <CheckoutText>Proceed to Checkout</CheckoutText>
      <GhostBlock />
    </BtnWrap>
  );
}
