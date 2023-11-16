import { useFruits } from '../hooks/useFruits.ts'
import CommentForm from './Comment'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>snake_dating_simulator</h1>
        <CommentForm />
      </div>
    </>
  )
}

export default App
