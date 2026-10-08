import "../src/index.css"
import { Link } from "react-router"

function App() {
  return (
    <>
      <div className="border-2  h-dvh content-center text-center ">
        <p className="mb-10 text-7xl">Welcome to Arthur's Market!</p>{" "}
        <span></span>
        <Link
          to="/signin"
          className=" text-4xl border rounded-full px-5 py-2 bg-red-500 hover:bg-red-800 text-white border-red-700 font-bold  "
        >
          Sign In
        </Link>
      </div>
    </>
  )
}

export default App
