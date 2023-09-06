import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookInfo from './BookInfo';
import BooksList from './BooksList';

import { getBooks, deleteBook } from '../store/bookSlice';


import './Book.css';



const PostContainer = () => {
  // STATES
  const [selectedBookData, setSelectedBookData] = useState({})
  const { isLoading, books } = useSelector((state) => state.books)
  const { isLoggedIn } = useSelector((state) => state.auth)
  
  // Define the reduxDispatch
  const dispatch = useDispatch()

  // Creating a useEffect To bring the books after the first RENDER
  // and make it re-Render again after every dispatch
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  
  
  // Bringing the exact first ID in the array of the books
  // and put it in the selectedBookData State to show it in the BookInfo Component
  //
  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id)
    setSelectedBookData(
      (previousState) => {
        return { ...previousState, ...selectedBook}
      }
    )
  }

  return (
    <Fragment>
      <hr className='my-5' /> 
      <div className='row'>
        <div className='col'>

          <BooksList 
            isLoggedIn={isLoggedIn} 
            isLoading={isLoading} 
            books={books} 
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}  
          />
          
        </div>
        <div className='col side-line'>
          <BookInfo selectedBookData={selectedBookData} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;