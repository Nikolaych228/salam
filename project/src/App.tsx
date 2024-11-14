import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
      </Routes>
      
    </>
  )
}

export default App
