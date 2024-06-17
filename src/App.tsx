import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
