import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import NotePage from "./pages/NotePage";
import TodosPage from "./pages/TodosPage";
import CalenderPage from "./pages/CalenderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/notes",
        element: <NotePage />,
      },
      {
        path: "/todos",
        element: <TodosPage />,
      },
      {
        path: "/calender",
        element: <CalenderPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
