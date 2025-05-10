import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';

export default function PrivateRouter() {

  const role = JSON.parse(localStorage.getItem("role"));


  return <>
  {role === "admin" ? <div>chao mung den voi admin</div> : <Login/>}
  </>
}