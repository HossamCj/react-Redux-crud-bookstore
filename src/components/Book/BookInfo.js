import React, { Fragment } from 'react';


const BookInfo = ({ selectedBookData }) => {
  console.log(selectedBookData)
  
  return (
    <Fragment>
      <h2>Book Details</h2>
      <div className='alert alert-secondary' role='alert'>
        {
          Object.values(selectedBookData).length > 0 ? (
            <div>
              <h4 className='fw-bold'>Title: { selectedBookData.title }</h4>
              <h5 className='fw-light'>Description: { selectedBookData.description }</h5>
              <h5 className='fst-italic'>Price: { selectedBookData.price }</h5>
              <h5 className='fst-italic'>Inserted By: { selectedBookData.username }</h5>
            </div> 

            ) : 'No  book has been selected yet. Please make a selection!'
            
        }
        
      </div>
    </Fragment>
  );
};

export default BookInfo;