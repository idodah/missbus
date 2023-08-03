import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthService from './services/AuthService';
import Layout from './components/Layout/Layout';
import TopBar from './components/TopBar';
import Complain from './views/Complain';
import Home from './views/Home';
import { initializeApp } from "firebase/app";
import { setUser } from './store/user/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Splash from './views/Splash';
import { firebaseConfig } from './constants';
import ThankYou from './views/thankyou/ThankYou';





const App = () => {
  useEffect(() => {
    initializeApp(firebaseConfig)
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    
    AuthService.setAuthChangeListener(async user => {
      dispatch(setUser(user))
    })
    AuthService.signIn()
  }, [dispatch])


  // if (!user.isLogged)
  //   return <Login />
  const {stationId} = useSelector(state => state.station)
  return (
    <BrowserRouter>
    <Layout style={{ 'height': '100vh', "overflowY": "hidden"}} justifyContent='flex-start' alignItems='normal' color={'#CCCCCC'}>
        {stationId && <TopBar />}
        <Routes>
            <Route path='/station/:stationId' element={<Splash />} />
            {stationId && <Route path='/home' element={<Home />}/> }
            {stationId && <Route path='/thankyou' element={<ThankYou />}/> }
            {stationId && <Route path='/complain' element={ <Complain />} /> }
              {/* <Route index element={<Home />}/> */}
              {/* <Route path='line:id' element={<Home />} /> */}
        </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
