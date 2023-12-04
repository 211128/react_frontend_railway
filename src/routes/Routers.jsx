import { Link, Route, RouterProvider, Routes } from "react-router-dom";
import Register from "../pages/registro";
import Login from "../components/login";
import React from 'react'

export default function Routers() {
  return (
    
       <Routes>

            <Route path="/login" element={<Login />} />

            <Route path="/registro" element={<Register />} />
        </Routes>
    
  )
}


