// src/App.jsx

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import BlogDetail from "./pages/BlogDetail"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />  {/* Home page */}
        <Route path="blog/:id" element={<BlogDetail />} />  {/* Dynamic Blog Details */}
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App