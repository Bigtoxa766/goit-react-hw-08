import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL= 'https://connections-api.herokuapp.com/'

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register',
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', credentials)
      setAuthHeader(resp.data.token)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  });

export const login = createAsyncThunk('auth/login',
  async (credentials, thunkAPI) => {
  try {
    const resp = await axios.post('/users/login', credentials)
    setAuthHeader(resp.data.token)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})