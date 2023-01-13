import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home';
import PaperWork from './PaperWork';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/paperwork",
    element: <PaperWork />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
