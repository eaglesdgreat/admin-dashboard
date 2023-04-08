import { createBrowserRouter } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "layout";
import Team from "pages/Team";
import Contacts from "pages/Contacts";
import Invoices from "pages/Invoices"
import Profile from "pages/Profile";
import Calendar from "pages/Calendar";

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
      {
        path: "/form",
        element: <Profile />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ]
  },
]);

export default router;
