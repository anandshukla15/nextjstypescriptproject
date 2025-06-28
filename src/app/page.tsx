
import AddTodo from "@/components/add-todo"
import Navbar from "@/components/navbar"
import Todos from "@/components/todos"

const page = () => {
  return (
    <div>
      <main>
        <h2>TODO NEXt+ TYPESCRIPT</h2>
        <Navbar/>
        <AddTodo/>
        <Todos/>
      </main>
    </div>
  )
}

export default page
