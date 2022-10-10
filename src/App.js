import { RouterProvider } from "react-router-dom";
import router from "../src/Routes/routes";
import "./App.css";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
