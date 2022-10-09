import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
