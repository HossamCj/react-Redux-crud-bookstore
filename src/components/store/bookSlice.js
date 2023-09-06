import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import { insertLog } from './reportSlice'



export const getBooks = createAsyncThunk(
    'book/getBooks', 
    async(_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        
        try {
            const response = await fetch('http://localhost:3005/books')
            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
})


export const getBook = createAsyncThunk(
    'book/getBook',
    async(bookItem, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await fetch(`http://localhost:3005/books/${ bookItem.id }`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            const data = await response.json()
            return data
            

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const insertBook = createAsyncThunk(
    'book/inserBook',
    async(bookData, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI

        try {
            bookData.username = getState().auth.name

            // Dispatch
            // dispatch(deleteBook({ id: 3}))
             
            const response = await fetch('http://localhost:3005/books', {
                method: 'POST',
                body: JSON.stringify(bookData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            const data = await response.json()
            dispatch(insertLog({ name: 'insertBook', status: 'Success'}))
            return data
            
        } catch (error) {   
            dispatch(insertLog({ name: 'insertBook', status: 'Faild' }))
            return rejectWithValue(error.message)
        }
    }
)


export const deleteBook = createAsyncThunk(
    'book/deleteBook',
    async(bookItem, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        
        try {
            await fetch(`http://localhost:3005/books/${bookItem.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            return bookItem
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const bookSlice = createSlice({
    name: "book",
    initialState: {books: [], isLoading: false, error: null, bookInfo: null},
    extraReducers: (builder) => {
        // GET Books
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
            state.error = null;
        });
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Insert/ADD Books
        builder.addCase(insertBook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(insertBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.books.push(action.payload);
        });
        builder.addCase(insertBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // DELETE Book
        builder.addCase(deleteBook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.books = state.books.filter((element) => element.id !== action.payload.id);
        });
        builder.addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Get Book Info
        builder.addCase(getBook.pending, (state, action) => {
            state.isLoading = false;
            state.bookInfo = action.payload;
        });
    },
})


export default bookSlice.reducer