import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from './store/bookSlice';



const Addform = () => {
  const {isLoggedIn } = useSelector((state) => state.auth)
  
  // Refs
  const title = useRef(null)
  const price = useRef()
  const description = useRef(null)
  
  // Setting up the useDispatch
  const dispatch = useDispatch()
  
  // Setting up the handleSubmit ===> in the form 
const handleSubmit = (e) => {
  e.preventDefault()
  
  dispatch(insertBook({
    title: title.current.value,
    price: price.current.value,
    description: description.current.value
  }))
  
  title.current.value = null
  price.current.value = null 
  description.current.value = null
  
}

  // Make sure you add the  < ref={...} inside the form elements 
  // Like the title input, price input, description input to catch the data
  
  
  
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input ref={title} type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input ref={price} type='number' className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              ref={description}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
          {
            !isLoggedIn && (
              <div className="alert alert-warning mt-2" role="alert">
                Please Login first before you post a book.
              </div>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default Addform;