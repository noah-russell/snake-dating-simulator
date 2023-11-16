import RepDisplay from './RepDisplay'
import CommentForm from './Comment'
import '../styles/main.css'

//New code for useState here

//

function App() {
  return (
    <>
      <div className="app">
        <h1>snake_dating_simulator</h1>
        <RepDisplay />
        <CommentForm />
      </div>
    </>
  )
}

export default App
