import './App.css';
import { useEffect, useContext } from 'react';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Container } from '@chakra-ui/react';
import Login from './components/Login';
import Signup from './components/Signup';
import { postContext } from './Context/PostContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const { getPostComment } = useContext(postContext);

  useEffect(() => {
    getPostComment();
  }, [getPostComment]);


  return (
    <div className="App">
      <Router>
        <Header />
        <Container maxW='6xl' pb='8'>
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
              exact path="/signup"
              element={<Signup />} >
            </Route>

          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
