import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import Register from "./pages/register/register.tsx";
import Login from "./pages/login/login.tsx";
import {CookiesProvider} from "react-cookie";
import Detail from "./pages/detail/detail.tsx";

const route = createBrowserRouter([
    {path:"",element:<App/>},
    {path:"user",children:[
        {path:"register",element:<Register/>},
        {path:"login",element:<Login/>},
            {path:':id/detail',element:<Detail/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


      <Provider store={store}>
          <CookiesProvider>
              <RouterProvider router={route}/>
          </CookiesProvider>

      </Provider>
)
