import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import CreatPost from './components/CreatPost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")
  return (
    <PostListProvider>
      <Header />
      <div className='content'>
        <SideBar className='sidebar' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Home" ? <PostList /> : <CreatPost />}
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
