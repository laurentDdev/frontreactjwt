import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import Register from "./pages/register/register.tsx";
import Login from "./pages/login/login.tsx";

const route = createBrowserRouter([
    {path:"",element:<App/>},
    {path:"user",children:[
        {path:"register",element:<Register/>},
        {path:"login",element:<Login/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

      <Provider store={store}>
          <RouterProvider router={route}/>
      </Provider>
  </React.StrictMode>,
)
