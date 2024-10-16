import React from 'react'
import Stories from "./components/Stories.jsx"
import StoryDetail from "./components/StoryDetail.jsx"
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
const App = () => {
  return (
    <Router>
       <Routes>
        <Route path='/' element={ <Stories/>}/>
        <Route  path="/story/:id" element={<StoryDetail/>} />
      
       </Routes>
    </Router>
    
  )
}

export default App