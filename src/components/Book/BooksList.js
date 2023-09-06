import React, {Fragment} from 'react'


const BooksList = ({ isLoading, books, isLoggedIn, dispatch, deleteBook, getBookId }) => {
    
    const bookList = books.length > 0 ?  books.map((bookItem) => (
            <ul className='list-group' key={ bookItem.id }>
                <li className='
                    list-group-item 
                    d-flex  
                    justify-content-between
                    align-items-center'
                >
                    <div >{ bookItem.title }</div>
                    <div  className='btn-group' role='group'>
                        <button 
                            type='button' 
                            className='btn btn-primary'
                            disabled={!isLoggedIn}
                            onClick={() => getBookId(bookItem.id)}
                        >
                            Read
                        </button>
                        <button 
                            type='button' 
                            className='btn btn-danger'
                            disabled={!isLoggedIn}
                            onClick={
                                () => dispatch(deleteBook(bookItem))
                                    .unwrap()
                                    .then((originalPromiseResult) => {
                                        console.log(originalPromiseResult)
                                    })
                                    .catch((rejectedValueOrSerializedError) => {
                                        console.log(rejectedValueOrSerializedError)
                                    })
                            }
                        >
                            Delete
                        </button>
                    </div>
                </li>
            </ul>
        )
    
    ) : "There are no available books"
    

    return (
        <Fragment>
            <div>
                <h2>Books List</h2>
                {
                    isLoading ? 'loading....' : bookList

                }
            </div>
        </Fragment>
    )
}

export default BooksList