import React, { useContext } from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowSvg} from '../assets/svgs/arrow.svg';
import { ReactComponent as PeopleSvg } from '../assets/svgs/people.svg';
import { ReactComponent as HeeartSvg } from '../assets/svgs/heart.svg';
import {AddToCartBtn} from '../components/Buttons';
import { size } from '../utils/constants';
import StarRatings from 'react-star-ratings';
import {Query} from 'react-apollo';
import {GET_BOOK} from '../graphql/queries';
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../assets/svgs/cartWhite.svg';
import { addToCart, availableCopiesAfterAddedToCart, returnArrayText } from '../utils/helpers';
import { BookContext } from '../context/BookContext';
import moment from 'moment';

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
  margin-bottom: 100px;
  @media (max-width: ${size.mobileXL}) {
    margin-top: 7px;
    margin-bottom: 100px;
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
  const params = useParams();
  const { cartData, setCartData } = useContext(BookContext);
  const {id} = params;
  return (
    <Query variables={{id}} query={GET_BOOK}>
      {({ loading, error, data }) => {
       
        const {
          image_url,
          title,
          subtitle,
          rating,
          full_description,
          price,
          available_copies,
          likes,
          number_of_purchases,
          published_at,
          authors,
          release_date,
          genres,
          tags,
          publisher,
        } = data?.book || {};

    
        const actualCopiesAvailable = parseInt(available_copies) - availableCopiesAfterAddedToCart(cartData,data?.book);
        const publishedDate = new Date(published_at);


        return loading && error ? (
          <></>
        ) : (
          <DetailCont>
            <Link to="/">
              <Row>
                <ArrowSvg />
                <Font12 ml="5px" fontWeight="bold">
                  Back
                </Font12>
              </Row>
            </Link>

            <DetailRow wrap mt="38px" alignItems="initial">
              <BookCol>
                <BookCoverImage src={image_url} />
                <Font14 mt="73px" mHide color={actualCopiesAvailable !==0 ? "#65C100" :"#C12300"}>
                 {actualCopiesAvailable !== 0 ? `${actualCopiesAvailable} Copies Available` : 'out of stock'}
                </Font14>
                <Font36 mHide fontWeight="300">
                  ${price}
                </Font36>

                {actualCopiesAvailable !== 0 && (
                  <AddToCartBtn
                    onClick={() => addToCart(data.book || {}, cartData, setCartData)}
                  />
                )}
              </BookCol>

              <DetailCol>
                <Font36 fontWeight="bold">{title}</Font36>
                <Col>
                  <Font14 fontWeight="bold" mt="20px">
                    {authors &&
                      authors.map(
                        (author, index) =>
                          `${author?.name} ${
                            index === authors?.length - 1 ? '' : ' ,'
                          }`
                      )}
                  </Font14>
                  <Font14 mt="7px">{publishedDate.getFullYear()}</Font14>
                </Col>

                <Row wrap justifyContent="space-between" mt="27px">
                  <Row br pr="14px">
                    <DetailColItem>
                      <PeopleSvg />
                      <Font12 textAlign="center" mt="7px">
                        {number_of_purchases}
                      </Font12>
                    </DetailColItem>
                    <DetailColItem>
                      <HeeartSvg />
                      <Font12 textAlign="center" mt="7px">
                        {likes}
                      </Font12>
                    </DetailColItem>
                  </Row>

                  <DetailColItem mt="10px">
                    <Font14>
                      <span style={{ fontWeight: 'bold' }}>Ratings:</span>{' '}
                      {rating}
                    </Font14>
                    <StarRatings
                      rating={rating}
                      starRatedColor="#EBA430"
                      numberOfStars={5}
                      starDimension={'15px'}
                      starSpacing="2px"
                      name="rating"
                    />
                  </DetailColItem>
                  <DetailColItem mt="10px">
                    <Font14 fontWeight="bold">Genre</Font14>
                    <Font14>{returnArrayText(genres || [])}</Font14>
                  </DetailColItem>
                  <DetailColItem mt="10px">
                    <Font14 fontWeight="bold">Tags</Font14>
                    <Font14>{returnArrayText(tags || [])}</Font14>
                  </DetailColItem>
                  <DetailColItem mt="10px">
                    <Font14 fontWeight="bold">Publisher</Font14>
                    <Font14>{publisher}</Font14>
                  </DetailColItem>
                  <DetailColItem mt="10px">
                    <Font14 fontWeight="bold">Released</Font14>
                    <Font14>
                      {moment(release_date).format('d MMMM, YYYY')}
                    </Font14>
                  </DetailColItem>
                </Row>

                <SubtitleText>{subtitle} </SubtitleText>
                <DescriptionText>{full_description}</DescriptionText>
              </DetailCol>
            </DetailRow>
            {actualCopiesAvailable !== 0 && (
              <AddToCartBtnWrap
                onClick={() => addToCart(data.book || {}, cartData, setCartData)}
              >
                <CartSvg />
                <Col>
                  <Font12 fontWeight="bold" color="white">
                    Add to Cart
                  </Font12>
                  <Font12 color="#65C100">
                    {actualCopiesAvailable} Copies Available
                  </Font12>
                </Col>
                <Font28 fontWeight="300" color="white">
                  ${price}
                </Font28>
              </AddToCartBtnWrap>
            )}
          </DetailCont>
        );
      
      
      }}
    </Query>
  );
}

export default BookDetails