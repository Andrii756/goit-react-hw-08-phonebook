import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// Operations
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => { 
    // console.log(contact);
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => { 
         const { data } = await axios.delete(`/contacts/${id}`);
    // console.log(data);
    return data;
 
  }
)
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, _) => { 
    // console.log(contact, thunkApi);
    const { data } = await axios.patch(`/contacts/${contact.id}`, ({name: contact.name, number: contact.number}));
    // console.log(data);
    return data;
  }
)
  

 const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      isAdding: false,
      isDeleting: false,
      isUpdating: false,
      error: null,
      addSuccessfull: false,
    },
    filter: ""
},
  
  reducers: {
    setFilter(state, action) { 
      state.filter = action.payload
    }
   },
   extraReducers: {
     [fetchContacts.pending]: (state) => {
        state.isLoading = true;
    },
     [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = [...action.payload];
     },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
     },
     [addContact.pending]: (state) => { 
       state.isAdding = true;
       state.addSuccessfull = false;
     },
     [addContact.fulfilled]: (state, action) => {
      // console.log(action);
      state.isAdding = false;
      state.error = null;
       state.contacts.items = [...state.contacts.items, action.payload];
       state.addSuccessfull = true;
     },
     [addContact.rejected]: (state, action) => {
      // console.log(action);
      state.isAdding = false;
       state.error = action.error.message;
       state.addSuccessfull = false;
       
     },
    [deleteContact.pending]: (state) => { 
      state.isDeleting = true;
      state.isLoading = true;
      
     },
    [deleteContact.fulfilled]: (state, action) => {
      state.isDeleting = false;
      state.isLoading = false;
      state.error = null;
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
     },
     [deleteContact.rejected]: (state, action) => {
      // console.log(action);
       state.isDeleting = false;
      state.isLoading = false;
      state.error = action.error.message;
     },
      [updateContact.pending]: (state) => { 
        state.isLoading = true;
        state.isUpdating = true;
     },
     [updateContact.fulfilled]: (state, action) => { 
       state.isLoading = false;
       state.isUpdating = false;
       state.contacts.items = state.contacts.items.map(item => { 
         if (item.id !== action.payload.id) { 
           return item
         }
       return {
         ...item,
         ...action.payload
         }
         })
     },
      [updateContact.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.isUpdating = false;
      state.error = action.error.message;
     },
  },
 })


export const { setFilter } = contactsSlice.actions
export default contactsSlice.reducer

// Selectors
export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const isLoading = state => state.phonebook.isLoading;
export const isAdding = state => state.phonebook.isAdding;
export const isDeleting = state => state.phonebook.isDeleting;
export const isUpdating = state => state.phonebook.isUpdating;
export const errorMessage = state => state.phonebook.error;
export const addSuccessfull = state => state.phonebook.addSuccessfull;

