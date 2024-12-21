import React from 'react'

import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>}/>
      <Route path="projects" element={<ProjectPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
