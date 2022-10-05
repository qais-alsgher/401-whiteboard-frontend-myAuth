import './App.css';
import { useEffect, useContext } from 'react';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import Singup from './components/Singup';
import { authContext } from './Context/AuthContext';
import { postContext } from './Context/PostContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const { checkToken } = useContext(authContext);
  const { getPostComment } = useContext(postContext);

  useEffect(() => {
    getPostComment();
    checkToken();
  });


  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route
              exact path="/"
              element={<Post
                className="d-flex justify-content-center"
              />} >
            </Route>
            <Route
              exact path="/login"
              element={<Login />} >
            </Route>
            <Route
              exact path="/singup"
              element={<Singup />} >
            </Route>

          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
