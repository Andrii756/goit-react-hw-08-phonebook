import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// Operations
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) { 
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() { 
        axios.defaults.headers.common.Authorization = '';
    }
}


export const register = createAsyncThunk('auth/register',
    async credentials => {
        console.log(credentials);
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data
    }
);

export const login = createAsyncThunk('auth/login',
    async credentials => {
        // console.log(credentials);
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data
            // console.log(error);
    }
);

export const logout = createAsyncThunk('auth/logout',
    async () => { 
            await axios.post('/users/logout');
            token.unset();
            // console.log(error);
    }
)

export const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        // console.log(persistedToken);
        if (persistedToken === null) {
            return thunkApi.rejectWithValue();
        }
        token.set(persistedToken);

        const { data } = await axios.get('/users/current');
        return data;
            // console.log(error);

    }
)


// Reducers
const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshingUser: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       resetError(state, _) { 
            state.error = null;
    }
     },
    extraReducers: {
        [register.pending]: (state, _) => { 
            state.isLoading = true;
             state.error = null;
            
         },
         [register.fulfilled]: (state, action) => { 
            //  console.log('action ', action);
             state.isLoading = false;
             state.user = action.payload.user;
             state.token = action.payload.token;
             state.isLoggedIn = true;
             state.error = null;
        },
        [register.rejected]: (state, action) => { 
            // console.log(action);
            state.isLoading = false;
            state.error = action.error.message;
        },
            [login.pending]: (state, _) => { 
                state.isLoading = true;
             state.error = null;
                
         },
          [login.fulfilled]: (state, action) => { 
            //  console.log('action ', action);
             state.user = action.payload.user;
             state.token = action.payload.token;
              state.isLoggedIn = true;
                state.isLoading = false;
              
        },
           [login.rejected]: (state, action) => { 
            // console.log(action);
            state.isLoading = false;
            state.error = action.error.message;
        },
            [logout.pending]: (state, _) => { 
            //  console.log('action ', action);
                state.isLoading = true;
                
         },
          [logout.fulfilled]: (state, _) => { 
            //  console.log('action ', action);
              state.user = { name: null, email: null };
              state.isLoading = false;
              state.token = null;
              state.isLoggedIn = false;
        },
                  [logout.rejected]: (state, _) => { 
            //  console.log('action ', action);
              state.isLoading = false;
         },
        [fetchCurrentUser.pending]: (state) => { 
            //  console.log('action ', action);
             state.isRefreshingUser = true;
         },
         [fetchCurrentUser.fulfilled]: (state, action) => { 
            //  console.log('action ', action);
             state.user = action.payload ;
             state.isLoggedIn = true;
             state.isRefreshingUser = false;
         },
        [fetchCurrentUser.rejected]: (state, _) => { 
            //  console.log('action ', action);
             state.isRefreshingUser = false;
         }
     }
})

export const { resetError } = authSlice.actions
export default authSlice.reducer

// Selectors
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getIsRefreshingUser = state => state.auth.isRefreshingUser;
export const errorMessageAuth = state => state.auth.error;
export const getIsLoadingAuth = state => state.auth.isLoading;



