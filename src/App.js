import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import { LoginContext } from './Helper/Context';
import { UserNameContext } from './Helper/Context';
import Login from './components/Login';
import cookies from 'react-cookies';
import Singup from './components/Singup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [postsAndComment, setPostsAndComment] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");


  const getPostComment = async () => {
    const allPostsAndComment = await axios.get(`https://post-my-auth.herokuapp.com/PostComment`);
    setPostsAndComment(allPostsAndComment.data);
  };

  useEffect(() => {
    getPostComment();
    const name = cookies.load('userName');
    const token = cookies.load('token');
    if (token) {
      setLoggedIn(true);
      setUserName(name);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserNameContext.Provider value={{ userName, setUserName }}>
        <div className="App">
          <Router>
            <Header getPostComment={getPostComment} />
            <Container>
              <Routes>
                <Route
                  exact path="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/"
                  element={<Post
                    posts={postsAndComment}
                    getPostComment={getPostComment}
                    className="d-flex justify-content-center"
                  />} >
                </Route>
                <Route
                  exact path="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/login"
                  element={<Login />} >
                </Route>
                <Route
                  exact path="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/singup"
                  element={<Singup />} >
                </Route>

              </Routes>
            </Container>
          </Router>
        </div>
      </UserNameContext.Provider>
    </LoginContext.Provider >
  );
}

export default App;
