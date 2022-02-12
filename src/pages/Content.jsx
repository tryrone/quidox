import React, { useContext } from 'react'
import { CartModal, SearchModal } from '../components/Modal';
import NavBar from '../components/NavBar';
import { BookContext } from '../context/BookContext';
import Home from './Home';

function Content() {
  const { searchModal, setSearchModal, cartModal, setCartModal } =
    useContext(BookContext);
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SearchModal visible={searchModal} setVisible={setSearchModal} />
      <CartModal visible={cartModal} setVisible={setCartModal} />
    </div>
  );
}

export default Content