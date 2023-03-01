//import { Home } from "@material-ui/icons";
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import User from "./components/User/User";
import Home from "./components/Home/Home";
//import Home from "./pages/home/Home";
import axios from 'axios';
import React from "react";
import { useState } from "react";
import Post from "./components/Post/Post";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Outlet/>
        </div>
      </div>
    )
  }

  const currentUser = false;

  const ProtectedRoute=({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute>
                  <Layout/>
                </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    },
    {
      path:"user/:userId",
      element: <User/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/register",
      element: <Register/>
    }

  ])

  return (
    <main className="App">
      <RouterProvider router={router}/>
    </main>
  );

}

export default App;

/*
<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route exact path="/" component={Home}></Route>
  <Route path="/user/:userId" component={User}></Route>
</Routes>
</BrowserRouter>
*/

/*
 
  */

  /*
  const {postList, setPostList} = useState([]);
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const[quote, setQuote] = useState('');

const getQuote = () => {
  axios.get('/post/flow')
  .then(res => {
    setIsLoaded(true);
    setPostList(res)
  }),
  (error) => {
      setIsLoaded(true);
      setError(error);
  }
}

if(error) {
  return <div> Error </div>;
} else if(!isLoaded) {
  return <div> Loading.. </div>;
} else {
  return(
      <div className="container">
      Congrats!
      <button onClick={getQuote}>Get Quote</button>
      {postList?.map(post => (
          <Post title={post.reference} text={post.message}></Post>
      ) ) }

      </div>
  );
} */