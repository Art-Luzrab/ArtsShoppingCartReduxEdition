import "../src/index.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <div className="h-dvh content-center border-2 text-center">
        <p className="mb-10 flex flex-row justify-self-center text-7xl">
          Welcome to Arthur's Market!
          <p className="ml-2 animate-bounce text-7xl">🍅</p>
        </p>

        <Link
          to="/signin"
          className="rounded-full border bg-red-500 px-5 py-2 text-4xl font-bold text-white hover:bg-red-800"
        >
          Sign In
        </Link>
      </div>
    </>
  );
}

export default App;
