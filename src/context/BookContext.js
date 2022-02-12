import React,{useState} from 'react';

export const BookContext = React.createContext({});

export const BookProvider = ({children}) => {
    const [searchModal,setSearchModal] = useState(false);
    const [cartModal,setCartModal] = useState(false);

  return (
    <BookContext.Provider
      value={{
        searchModal,
        setSearchModal,
        cartModal,
        setCartModal,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
