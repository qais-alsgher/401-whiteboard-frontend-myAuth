import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import { LoginContext } from './Helper/Context';
import { UserNameContext } from './Helper/Context';

function App() {

  const [postsAndComment, setPostsAndComment] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const getPostComment = async () => {
    const allPostsAndComment = await axios.get(`https://message-postgres.herokuapp.com/PostComment`);
    setPostsAndComment(allPostsAndComment.data);
    setShowPosts(true);
  };

  useEffect(() => {
    getPostComment();
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserNameContext.Provider value={{ userName, setUserName }}>
        <div className="App">
          <Header getPostComment={getPostComment} />
          <Container>
            {showPosts &&
              <Post
                posts={postsAndComment}
                getPostComment={getPostComment}
                className="d-flex justify-content-center"
              />
            }

          </Container>
        </div>
      </UserNameContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
