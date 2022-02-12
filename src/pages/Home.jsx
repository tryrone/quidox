import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { sizeInt, size } from '../utils/constants';
import { ReactComponent as PrevSvg } from '../assets/svgs/caretBack.svg';
import { ReactComponent as NextSvg } from '../assets/svgs/caretForward.svg';
import { ReactComponent as PeopleSvg } from '../assets/svgs/people.svg';
import { ReactComponent as HeartSvg } from '../assets/svgs/heart.svg';
import { ReactComponent as CartSvg } from '../assets/svgs/smallCart.svg';
import { useViewport } from '../utils/hooks';
import StarRatings from 'react-star-ratings';



const HomeHeadCont = styled.div`
  margin-top: 120px;
  padding-bottom: 72px;
  @media (max-width: ${size.mobileL}) {
    margin-top: 80px;
    padding-bottom: 32px;
  }
`;

const HeadTitle = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;

const HeadTitleWrap = styled.div`
  padding: 0px 0px 14px 0px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 23px;
`;

const Padded = styled.div`
  padding: 0px 52px;
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
const AllBooksPadding = styled.div`
  padding: 0px 52px;
  margin-top: 65px;
  @media (max-width: ${size.mobileL}) {
    padding: 0px 20px;
  }
`;

const SwiperPrevBtn = styled.div`
  background: linear-gradient(
    180deg,
    rgba(248, 248, 250, 0.8) 0%,
    #f8f8fa 51.36%,
    rgba(248, 248, 250, 0.8) 100%
  );
  color: black;
  width: 40px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 330px;
  mix-blend-mode: normal;
  opacity: 0.8;
  @media (max-width: ${size.mobileL}) {
    height: 210px;
  }
`;

const SwiperNextBtn = styled.div`
  background: linear-gradient(
    180deg,
    rgba(248, 248, 250, 0.8) 0%,
    #f8f8fa 51.36%,
    rgba(248, 248, 250, 0.8) 100%
  );
  color: black;
  width: 40px;
  margin: 0%;
  padding: 0%;
  height: 330px;
  mix-blend-mode: normal;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${size.mobileL}) {
    height: 210px;
  }
`;

const ImageCard = styled.img`
  height: 330px;
  object-fit: contain;
  @media (max-width: ${size.mobileL}) {
    height: 210px;
    width: 140px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ml}) => ml ||  '0px'}
`;

const Row = styled.div`
  display: flex;
  padding-right: ${({pr}) => pr  || '0px'}};
  margin-top: ${({mt}) => mt  || '0px'}};
  border-right: ${({br}) => br  ? '1px solid #EEEEEE' : 'none'}};
  align-items: center;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' :'no-wrap'};
  justify-content: ${({jc}) => jc || 'initial'};
`;

const BooksRow = styled.div`
  display: flex;
  padding-right: ${({pr}) => pr  || '0px'}};
  margin-top: ${({mt}) => mt  || '0px'}};
  border-right: ${({br}) => br  ? '1px solid #EEEEEE' : 'none'}};
  align-items: center;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' :'no-wrap'};
  justify-content: ${({jc}) => jc || 'initial'};
`;

const BookWrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-top: 40px;
  width: 30%;
  :hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
  @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
    width: 100%;
  }
  @media (min-width: ${size.mobileL}) and (max-width: ${size.laptop}) {
    width: 40%;
  }
`;

const BookImage = styled.img`
  height: 183px;
  width: 110px;
  object-fit: cover;
  margin-right: 13px;
`;

const BookTitle = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookAuthor = styled.p`
  margin-top: ${({ mt }) => mt || '0px'};
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;

const Fontmd = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  font-size: 12px;
  color: ${({ color }) => color || '#000000'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin-left: ${({ml}) => ml || '0px'};
`;


const BookItem = () => {
  return (
    <BookWrap>
      <BookImage src={require('../assets/images/ee.png')} />
      <Col>
        <BookTitle>The Effective Engineer</BookTitle>
        <BookAuthor mt="6px">Jim Collins, Jerry I. Porras - 2001</BookAuthor>
        <BookAuthor>Business, Entrepreneurship</BookAuthor>

        <Row mt="12px">
          <Row br pr="14px">
            <Col>
              <PeopleSvg />
              <Fontmd>13</Fontmd>
            </Col>

            <Col>
              <HeartSvg />
              <Fontmd>29</Fontmd>
            </Col>
          </Row>

          <Col ml="10px">
            <Fontmd textAlign="left">Rating: 4.0 </Fontmd>
            <StarRatings
              rating={4}
              starRatedColor="#EBA430"
              numberOfStars={5}
              starDimension={'15px'}
              starSpacing="2px"
              name="rating"
            />
          </Col>
        </Row>

        <Row mt="13px">
          <Fontmd>$29.99</Fontmd>
          <Fontmd ml="6px" color="#65C100">
            23 Copies Available
          </Fontmd>
        </Row>

        <Row mt="8px">
          <CartSvg />
          <Fontmd ml="6px">Add to Cart</Fontmd>
        </Row>
      </Col>
    </BookWrap>
  );
};

const Home = () => {    
  const { width } = useViewport();  
  return (
    <HomeHeadCont>
      <Padded>
        <HeadTitleWrap>
          <HeadTitle>Featured Books</HeadTitle>
        </HeadTitleWrap>
      </Padded>

      <Carousel
        cellSpacing={5}
        initialSlideWidth={220}
        wrapAround
        autoplay
        slidesToShow={
          width >= parseInt(sizeInt.laptopL)
            ? 8
            : width >= sizeInt.tablet && width <= sizeInt.laptopL
            ? 5
            : width >= sizeInt.mobileL && width <= sizeInt.tablet
            ? 4
            : 3
        }
        slidesToScroll={1}
        renderCenterLeftControls={({ previousSlide }) => (
          <SwiperPrevBtn onClick={previousSlide}>
            <PrevSvg />
          </SwiperPrevBtn>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SwiperNextBtn onClick={nextSlide}>
            <NextSvg />
          </SwiperNextBtn>
        )}
      >
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
        <ImageCard src={require('../assets/images/ee.png')} />
      </Carousel>

      <AllBooksPadding>
        <HeadTitleWrap>
          <HeadTitle>All Books</HeadTitle>
        </HeadTitleWrap>

        <BooksRow jc="space-between" wrap>
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </BooksRow>
      </AllBooksPadding>
    </HomeHeadCont>
  );
}

export default Home