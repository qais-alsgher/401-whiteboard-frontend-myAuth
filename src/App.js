import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';

function App() {

  const [postsAndComment, setPostsAndComment] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const getPostComment = async () => {
    const allPostsAndComment = await axios.get(`https://message-postgres.herokuapp.com/PostComment`);
    setPostsAndComment(allPostsAndComment.data);
    setShowPosts(true);
  };

  useEffect(() => {
    getPostComment();
  }, []);

  return (
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
  );
}

export default App;
