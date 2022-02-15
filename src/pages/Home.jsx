import React, { useContext } from 'react';
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
import {Query} from 'react-apollo'
import { GET_BOOKS } from '../graphql/queries';
import { BookContext } from '../context/BookContext';
import { addToCart, availableCopiesAfterAddedToCart } from '../utils/helpers';
import { Link } from 'react-router-dom';




const HomeHeadCont = styled.div`
  margin-top: 120px;
  padding-bottom: 72px;
  @media (max-width: ${size.mobileL}) {
    margin-top: 80px;
    padding-bottom: 32px;
  }
`;

export const HeadTitle = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  font-size: 14px;
  color: #000000;
`;

export const HeadTitleWrap = styled.div`
  padding: 0px 0px 14px 0px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 23px;
  @media (max-width: ${size.mobileL}) {
    margin-bottom: 0px;
    margin-top: 60px;
  }
`;

const Padded = styled.div`
  padding: 0px 52px;
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
export const AllBooksPadding = styled.div`
  padding: 20px 52px;

  


  margin-top: ${({ mt }) => mt || '65px'};
  
  background-color: white;
  height: ${({ height }) => height || 'auto'};

  

  @media (max-width: ${size.mobileL}) {
    padding: 0px 19px;
    margin-top: 29px;
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
    height: 230px;
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
    height: 230px;
  }
`;

const ImageCard = styled.img`
  height: 324px;
  width: auto;
  object-fit: cover;
  @media (max-width: ${size.mobileL}) {
    height: 221px;
    width: 134px;
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

export const BooksRow = styled.div`
  display: flex;
  padding-right: ${({pr}) => pr  || '0px'}};
  margin-top: ${({mt}) => mt  || '0px'}};
  border-right: ${({br}) => br  ? '1px solid #EEEEEE' : 'none'}};
  align-items: center;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' :'no-wrap'};
  justify-content: ${({jc}) => jc || 'initial'};
`;

export const BookWrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-top: ${({ mt }) => mt || '40px'};
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
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    width: 50%;
  }

`;

const BookImage = styled.img`
  height: 183px;
  width: 110px;
  object-fit: fill;
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

export const BookItem = ({ mt, data, handleClose }) => {
  const {
    image_url,
    title,
    rating,
    price,
    available_copies,
    likes,
    number_of_purchases,
    published_at,
    authors,
    genres,
  } = data;

  const { cartData, setCartData } = useContext(BookContext);

  const publishedDate = new Date(published_at);

  const actualCopiesAvailable =
    parseInt(available_copies) -
    availableCopiesAfterAddedToCart(cartData, data);

  return (
    <BookWrap mt={mt}>
      <Link to={`/details/${data.id}`}>
        <div onClick={() => handleClose && handleClose()}>
          <BookImage src={image_url} />
        </div>
      </Link>

      <div onClick={() => handleClose && handleClose()}>
        <Col>
          <Link to={`/details/${data.id}`}>
            <BookTitle>{title}</BookTitle>
            <BookAuthor mt="6px">
              {authors.map(
                (author, index) =>
                  `${author?.name} ${index === authors.length - 1 ? '' : ' ,'}`
              )}{' '}
              - {publishedDate.getFullYear()}
            </BookAuthor>
            <BookAuthor>
              {genres.map(
                (genre, index) =>
                  `${genre?.name} ${index === genres.length - 1 ? '' : ' ,'}`
              )}
            </BookAuthor>

            <Row mt="12px">
              <Row br pr="14px">
                <Col>
                  <PeopleSvg />
                  <Fontmd>{number_of_purchases}</Fontmd>
                </Col>

                <Col>
                  <HeartSvg />
                  <Fontmd>{likes}</Fontmd>
                </Col>
              </Row>

              <Col ml="10px">
                <Fontmd textAlign="left">Rating:{rating} </Fontmd>
                <StarRatings
                  rating={rating}
                  starRatedColor="#EBA430"
                  numberOfStars={5}
                  starDimension={'15px'}
                  starSpacing="2px"
                  name="rating"
                />
              </Col>
            </Row>

            <Row mt="13px">
              <Fontmd>${price}</Fontmd>
              <Fontmd
                ml="6px"
                color={actualCopiesAvailable !== 0 ? '#65C100' : ' #C12300'}
              >
                {actualCopiesAvailable !== 0
                  ? `${actualCopiesAvailable} Copies Available`
                  : 'Out of stock'}
              </Fontmd>
            </Row>
          </Link>

          {actualCopiesAvailable !== 0 && (
            <Row
              onClick={() => addToCart(data || {}, cartData, setCartData)}
              mt="10px"
            >
              <CartSvg />

              <Fontmd fontWeight="bold" ml="6px">
                Add to Cart
              </Fontmd>
            </Row>
          )}
        </Col>
      </div>
    </BookWrap>
  );
};

const Home = () => {    
  const {setBookData} = useContext(BookContext);

  const { width } = useViewport();  
    return(
    <Query query={GET_BOOKS}>
      {({loading,error,data}) => {
      setBookData(data?.books);
      return loading && error ? (
        <></>
      ) : (
        <HomeHeadCont>
          <Padded>
            <HeadTitleWrap>
              <HeadTitle>Featured Books</HeadTitle>
            </HeadTitleWrap>
          </Padded>

          <Carousel
            cellSpacing={
              width >= sizeInt.mobileL && width <= sizeInt.tablet
                ? 15
                : width >= sizeInt.laptopL && width <= sizeInt.desktop
                ? 10
                : 5
            }
            autoplay
            slidesToShow={
              width >= sizeInt.laptopL && width <= sizeInt.desktop
                ? 5
                : width >= parseInt(sizeInt.laptopL)
                ? 8
                : width >= sizeInt.laptop && width <= sizeInt.laptopL
                ? 4.5
                : width >= sizeInt.tablet && width <= sizeInt.laptopL
                ? 3
                : width >= sizeInt.mobileL && width <= sizeInt.tablet
                ? 2.3
                : 2.5
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
            {data?.books?.map((book) => {
              return (
                <Link style={{display:'inline-block'}} to={`/details/${book.id}`}>
                  <ImageCard key={book.id + 'featured'} src={book.image_url}/>
                </Link>
              );
            })}
          </Carousel>

          <AllBooksPadding>
            <HeadTitleWrap>
              <HeadTitle>All Books</HeadTitle>
            </HeadTitleWrap>

            <BooksRow jc="space-between" wrap>
              {data?.books?.map((book) => {
                return(<BookItem key={book.id} data={book} />);
              })}
              <BookWrap/>
            </BooksRow>
          </AllBooksPadding>
        </HomeHeadCont>
      );
      }}
    </Query>)
}

export default Home;