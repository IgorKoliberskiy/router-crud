import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <Link to="/" className="title">
            Все посты
          </Link>
          {'  '}
          <NavLink to="/posts/new" className={"create-post-button"}>
            Создать пост
          </NavLink>
        </div>

        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<ViewPost />} />
          <Route path='/posts/:id/edit' element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
