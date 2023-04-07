import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  PersonOutline,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

import { ListItem } from "types";

export const listItem: Array<ListItem> = [
  {
    title: "Dashboard",
    to: "/",
    icon: (<HomeOutlined />),
    headText: "Data",
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: (<PeopleOutlined />),
  },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: (<ContactsOutlined />),
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: (<ReceiptOutlined />),
    headText: "Pages",
  },
  {
    title: "Profile Form",
    to: "/form",
    icon: (<PersonOutline />),
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: (<CalendarTodayOutlined />),
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: (<HelpOutlined />),
    headText: "Charts",
  },
  {
    title: "Bar Chart",
    to: "/bar",
    icon: (<BarChartOutlined />),
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: (<PieChartOutlineOutlined />),
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: (<TimelineOutlined />),
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: (<MapOutlined />),
  },
]