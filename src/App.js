import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import ProtectedGroup from './ProtectedGroup';
import UserProfile from './UserProfile';
import PrivateGroup from './PrivateGroup';


const router = createBrowserRouter([
 {
    path: '/private-group',
    element: <ProtectedGroup isMember={false}><PrivateGroup /></ProtectedGroup>
},{
  path: '/user/:userId',
  element: <UserProfile />
},{
  userId: 1293123
}
])
function App () {
return (
  <RouterProvider router={router}/>
)
}
 export default App ;
