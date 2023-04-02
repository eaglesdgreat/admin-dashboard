import { createBrowserRouter } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "layout";
import Team from "pages/Team";
import Contacts from "pages/Contacts";
import Invoices from "pages/Invoices"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
    ]
  },
]);

export default router;
