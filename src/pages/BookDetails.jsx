import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowSvg} from '../assets/svgs/arrow.svg';
import { ReactComponent as PeopleSvg } from '../assets/svgs/people.svg';
import { ReactComponent as HeeartSvg } from '../assets/svgs/heart.svg';
import {AddToCartBtn} from '../components/Buttons';
import { size } from '../utils/constants';
import StarRatings from 'react-star-ratings';
import { ReactComponent as CartSvg } from '../assets/svgs/cartWhite.svg';

const DetailCont = styled.div`
   margin-top: 100px;
   padding: 0px 15px;
   overflow-y: scroll;
   position: relative;
`;

const Row = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'normal')};
  height: ${({ height }) => height || 'auto'};
  margin-top: ${({ mt }) => mt || '0px'};
  padding-right: ${({ pr }) => pr || '0px'}};
  border-right: ${({ br }) => (br ? '1px solid #EEEEEE' : 'none')}};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  @media (max-width: ${size.mobileXL}) {
    margin-top: 0px;
  }
`;

const DetailRow = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'normal')};
  height: ${({ height }) => height || 'auto'};
  margin-top: ${({ mt }) => mt || '0px'};
  padding-right: ${({ pr }) => pr || '0px'}};
  border-right: ${({ br }) => (br ? '1px solid #EEEEEE' : 'none')}};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;

const Font12 = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: 12px;
  color: ${({ color }) => color || '#000000'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-top: ${({ mt }) => mt || '0px'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
const Font14 = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: 14px;
  color: ${({ color }) => color || '#000000'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-top: ${({ mt }) => mt || '0px'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  @media (max-width: ${size.tablet}) {
    display: ${({ mHide }) => (mHide ? 'none' : 'block')};
  }
`;

const Font36 = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: 36px;
  color: ${({ color }) => color || '#000000'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-top: ${({ mt }) => mt || '0px'};
  @media (max-width: ${size.tablet}) {
    display: ${({ mHide }) => (mHide ? 'none' : 'block')};
    font-size: 28px;
  }
`;

const Font28 = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: 28px;
  color: ${({ color }) => color || '#000000'};
  margin-left: ${({ ml }) => ml || '0px'};
  margin-top: ${({ mt }) => mt || '0px'};
  @media (max-width: ${size.tablet}) {
    display: ${({ mHide }) => (mHide ? 'none' : 'block')};
    font-size: 28px;
  }
`;

const BookCol = styled.div`
  flex:1;
`;
const DetailCol = styled.div`
  flex: 7;
  padding-right: 15%;
  padding-left: 7%;
  @media (max-width: ${size.tablet}) {
    padding: 0px;
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    padding-right: 5%;
    padding-left: 7%;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ mt }) => mt || '0px'};
`;
const DetailColItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ mt }) => mt || '0px'};
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    width:30%;
  }
  @media (max-width: ${size.tablet}) {
    width:50%;
    margin-top: 25px;
  }
`;

const BookCoverImage = styled.img`
  width: 243px;
  height: 364.5px;
  object-fit: fill;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);
  @media (max-width: ${size.mobileXL}) {
    width: 133.33px;
    height: 200px;
    margin-bottom: 32px;
  }
`;

const SubtitleText = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  margin-top: 62px;
  line-height: 150%;
  @media (max-width: ${size.mobileXL}) {
    margin-top: 19px;
  }
`;
const DescriptionText = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
  margin-top: 12px;
  line-height: 150%;
  @media (max-width: ${size.mobileXL}) {
    margin-top: 7px;
  }
`;
const AddToCartBtnWrap = styled.button`
  outline: none;
  border: none;
  background: #000000;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 19px; 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 91%;
  bottom: 20px;
  cursor: pointer;
   @media (min-width: ${size.tablet}) {
   display:none;
  }
`;


const BookDetails = () => {
  return (
    <DetailCont>
      <Row cursor>
        <ArrowSvg />
        <Font12 ml="5px" fontWeight="bold">
          Back
        </Font12>
      </Row>

      <DetailRow wrap mt="38px" alignItems="initial">
        <BookCol>
          <BookCoverImage src={require('../assets/images/ee.png')} />
          <Font14 mt="73px" mHide color="#65C100">
            23 Copies Available
          </Font14>
          <Font36 mHide fontWeight="300">
            $29.99
          </Font36>

          <AddToCartBtn />
        </BookCol>

        <DetailCol>
          <Font36 fontWeight="bold">
            Big Magic: Creative Living Beyond Fear
          </Font36>
          <Col>
            <Font14 fontWeight="bold" mt="20px">
              Elizabeth Gilbert
            </Font14>
            <Font14 mt="7px">2016</Font14>
          </Col>

          <Row wrap justifyContent="space-between" mt="27px">
            <Row br pr="14px">
              <DetailColItem>
                <PeopleSvg />
                <Font12 textAlign="center" mt="7px">
                  31
                </Font12>
              </DetailColItem>
              <DetailColItem>
                <HeeartSvg />
                <Font12 textAlign="center" mt="7px">
                  29
                </Font12>
              </DetailColItem>
            </Row>

            <DetailColItem mt="10px">
              <Font14>
                <span style={{ fontWeight: 'bold' }}>Ratings:</span> 4.0
              </Font14>
              <StarRatings
                rating={4}
                starRatedColor="#EBA430"
                numberOfStars={5}
                starDimension={'15px'}
                starSpacing="2px"
                name="rating"
              />
            </DetailColItem>
            <DetailColItem mt="10px">
              <Font14 fontWeight="bold">Genre</Font14>
              <Font14>Motivational</Font14>
            </DetailColItem>
            <DetailColItem mt="10px">
              <Font14 fontWeight="bold">Tags</Font14>
              <Font14>Creativity, Better Living</Font14>
            </DetailColItem>
            <DetailColItem mt="10px">
              <Font14 fontWeight="bold">Publisher</Font14>
              <Font14>Savannah Books</Font14>
            </DetailColItem>
            <DetailColItem mt="10px">
              <Font14 fontWeight="bold">Released</Font14>
              <Font14>21 January, 2016</Font14>
            </DetailColItem>
          </Row>

          <SubtitleText>The instant #1 NEW YORK TIMES Bestseller </SubtitleText>
          <DescriptionText>
            The instant #1 NEW YORK TIMES Bestseller "A must read for anyone
            hoping to live a creative life... I dare you not to be inspired to
            be brave, to be free, and to be curious.” —PopSugar From the
            worldwide bestselling author of Eat Pray Love and City of Girls: the
            path to the vibrant, fulfilling life you’ve dreamed of. Readers of
            all ages and walks of life have drawn inspiration and empowerment
            from Elizabeth Gilbert’s books for years. Now this beloved author
            digs deep into her own generative process to share her wisdom and
            unique perspective about creativity. With profound empathy and
            radiant generosity, she offers potent insights into the mysterious
            nature of inspiration. She asks us to embrace our curiosity and let
            go of needless suffering. She shows us how to tackle what we most
            love, and how to face down what we most fear. She discusses the
            attitudes, approaches, and habits we need in order to live our most
            creative lives. Balancing between soulful spirituality and cheerful
            pragmatism, Gilbert encourages us to uncover the “strange jewels”
            that are hidden within each of us. Whether we are looking to write a
            book, make art, find new ways to address challenges in our work,
            embark on a dream long deferred, or simply infuse our everyday lives
            with more mindfulness and passion, Big Magic cracks open a world of
            wonder and joy. "A must read for anyone hoping to live a creative
            life... I dare you not to be inspired to be brave, to be free, and
            to be curious.” —PopSugar From the worldwide bestselling author of
            Eat Pray Love and City of Girls: the path to the vibrant, fulfilling
            life you’ve dreamed of. Readers of all ages and walks of life have
            drawn inspiration and empowerment from Elizabeth Gilbert’s books for
            years. Now this beloved author digs deep into her own generative
            process to share her wisdom and unique perspective about creativity.
            With profound empathy and radiant generosity, she offers potent
            insights into the mysterious nature of inspiration. She asks us to
            embrace our curiosity and let go of needless suffering. She shows us
            how to tackle what we most love, and how to face down what we most
            fear. She discusses the attitudes, approaches, and habits we need in
            order to live our most creative lives. Balancing between soulful
            spirituality and cheerful pragmatism, Gilbert encourages us to
            uncover the “strange jewels” that are hidden within each of us.
            Whether we are looking to write a book, make art, find new ways to
            address challenges in our work, embark on a dream long deferred, or
            simply infuse our everyday lives with more mindfulness and passion,
            Big Magic cracks open a world of wonder and joy.
          </DescriptionText>
        </DetailCol>
      </DetailRow>
      <AddToCartBtnWrap>
        <CartSvg />
        <Col>
          <Font12 fontWeight="bold" color="white">
            Add to Cart
          </Font12>
          <Font12 color="#65C100">23 Copies Available</Font12>
        </Col>
        <Font28 fontWeight="300" color="white">$29.99</Font28>
      </AddToCartBtnWrap>
    </DetailCont>
  );
}

export default BookDetails