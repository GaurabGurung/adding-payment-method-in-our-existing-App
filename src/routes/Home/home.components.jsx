import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import SHOP_DATA from '../../shop-data';

const Home = () => {

  // useEffect (()=> {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])


  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  )
}

export default Home;
