import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import './Components/ui.css';

import UseAxios from './UseAxios';
import Sidebar from './Components/Sidebar';
import Dashboard from './Dashboard/Dashboard';

import Utilisateurs from './Utilisateurs/Utilisateurs';
import UserAdd from './Utilisateurs/composants/UserAdd';
import UserEdit from './Utilisateurs/composants/UserEdit';
import UserDetail from './Utilisateurs/composants/UserDetail';

import Posts from './Posts/Posts';
import PostAdd from './Posts/composants/PostAdd';
import PostEdit from './Posts/composants/PostEdit';
import PostDetail from './Posts/composants/PostDetail';

import Commentaires from './Commentaires/Commentaires';

import Taches from './Taches/Taches';
import TodoAdd from './Taches/composants/TodoAdd';
import TodoEdit from './Taches/composants/TodoEdit';
import TodoDetail from './Taches/composants/TodoDetail';

function App() {
  const users = useSelector(state => state.users);
  const posts = useSelector(state => state.posts);
  const commentaires = useSelector(state => state.commentaires);
  const taches = useSelector(state => state.taches);

  UseAxios('https://jsonplaceholder.typicode.com/users', 'SET_USERS');
  UseAxios('https://jsonplaceholder.typicode.com/posts', 'SET_POSTS');
  UseAxios('https://jsonplaceholder.typicode.com/comments', 'SET_COMMENTAIRES');
  UseAxios('https://jsonplaceholder.typicode.com/todos', 'SET_TACHES');

  const counts = {
    users: users.length,
    posts: posts.length,
    comments: commentaires.length,
    todos: taches.length,
  };

  return (
    <div className="app-layout">
      <Sidebar counts={counts} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/utilisateurs/nouveau" element={<UserAdd />} />
          <Route path="/utilisateurs/:id" element={<UserDetail />} />
          <Route path="/utilisateurs/:id/modifier" element={<UserEdit />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/nouveau" element={<PostAdd />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/modifier" element={<PostEdit />} />

          <Route path="/commentaires" element={<Commentaires />} />

          <Route path="/taches" element={<Taches />} />
          <Route path="/taches/nouveau" element={<TodoAdd />} />
          <Route path="/taches/:id" element={<TodoDetail />} />
          <Route path="/taches/:id/modifier" element={<TodoEdit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
