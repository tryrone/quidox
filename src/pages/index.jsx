import React, { useContext } from 'react'
import { CartModal, SearchModal, WebSearchModal } from '../components/Modal';
import NavBar from '../components/NavBar';
import { BookContext } from '../context/BookContext';
import Home from './Home';
import BookDetails from './BookDetails';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function Pages() {
  const { searchModal, setSearchModal, cartModal, setCartModal, searchText , setSearchText} =
    useContext(BookContext);
  return (
    <Router>
      <div>
        <NavBar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details/:id" element={<BookDetails />} />
          </Routes>
        </div>

        <SearchModal visible={searchModal} setVisible={setSearchModal} />
        <WebSearchModal visible={searchText ? true : false} setVisible={() => setSearchText('')} />
        <CartModal visible={cartModal} setVisible={setCartModal} />
      </div>
    </Router>
  );
}

export default Pages;