import React, {Fragment} from 'react'


const BooksList = ({ isLoading, books, isLoggedIn }) => {
    
    const bookList = books.length > 0 ?  books.map((book) => (
            <ul className='list-group'>
                <li 
                    key={ book.id }
                    className='list-group-item d-flex  justify-content-between align-items-center'
                >
                    <div key={ book.id }>{ book.title }</div>
                    <div key={ book.id } className='btn-group' role='group'>
                        <button 
                            key={ book.id }
                            type='button' 
                            className='btn btn-primary'
                            disabled={!isLoggedIn}
                        >
                            Read
                        </button>
                        <button 
                            key={ book.id } 
                            type='button' 
                            className='btn btn-danger'
                            disabled={!isLoggedIn}
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