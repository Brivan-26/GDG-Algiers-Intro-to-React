import "./App.css";
import { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import Counter from './components/Counter'
import Post from "./components/Post";
import axios from 'axios'
function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response.data)
    setIsLoading(false)
  }


  useEffect(() => {
    fetchData()
  }, []) 
  return <>
    {
      isLoading ? <h1>Loading...</h1> : posts.map((post) => {
        return <Post post={post}/>
      })
    }
  </>;
}

export default App;
