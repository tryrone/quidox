import React,{useState} from 'react';

export const BookContext = React.createContext({});

export const BookProvider = ({children}) => {
    const [searchModal,setSearchModal] = useState(false);
    const [cartModal,setCartModal] = useState(false);
    const [searchText,setSearchText] = useState('');
    const [bookData,setBookData] = useState([]);
    const [cartData,setCartData] = useState([]);

  return (
    <BookContext.Provider
      value={{
        searchModal,
        setSearchModal,
        cartModal,
        setCartModal,
        searchText,
        setSearchText,
        bookData,
        setBookData,
        cartData,
        setCartData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
