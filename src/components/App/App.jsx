import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegsterPage from '../../pages/RegsterPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../redux/hooks/useAuth';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import ContactsPage from '../../pages/ContactsPage';

function App() {  
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <div>
      <Toaster position="top-center"/>
      <Routes>
        <Route path='/' element={<RestrictedRoute
            redirectTo='/contacts'
            component={<HomePage />} />} />
          
        <Route
          path='/registration'
          element={<RestrictedRoute
            redirectTo='/contacts'
            component={<RegsterPage />} />} />
          
        <Route
          path='/login'
          element={<RestrictedRoute
            redirectTo='/contacts'
            component={<LoginPage />} />} />
          
        <Route
          path='/contacts'
          element={<PrivateRoute
            redirectTo='/login'
            component={<ContactsPage />} />} />
      </Routes>
    </div>
)
}

export default App
