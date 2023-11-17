import RepDisplay from './RepDisplay'
import CommentForm from './Comment'
import '../styles/main.css'

//New code for useState here

//

function App() {
  return (
    <>
      <div className="app">
        <h1 className="title">snake_dating_simulator</h1>
        <RepDisplay className="rep-display" />
        <img src="../public/snake.jpg" alt="Snake" className="snake-image" />
        <CommentForm className="comment-form" />
      </div>
    </>
  )
}

export default App
