// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import ReportForm from "views/ReportForm/ReportForm.jsx";
import ReportList from "views/ReportList/ReportList.jsx";

const dashboardRoutes = [{
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "Report List",
    icon: Person,
    component: ReportList,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "Report",
    icon: "content_paste",
    component: ReportForm,
    layout: "/admin"
  }
];

export default dashboardRoutes;