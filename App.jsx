

function App() {     


const [todos, setTodos] = useState([  'FSAB Project',
  'Math 0180 Problems',
  'CLPS 0010 Writing Assignment',
  'CSCI Andybot'])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  return (
  <>
    <TodoInput handleAddTodos={handleAddTodos}/>
    <TodoList todos={todos}/>
  </>
  )
}

export default App
