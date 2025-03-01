import { RouterProvider } from "react-router-dom";
import { router } from "~/routes";
import "../styles.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
