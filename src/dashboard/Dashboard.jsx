import DashboardLayout from "./DashboardLayout";
import StatsCards from "./StatsCards";
import Charts from "./Charts";
import OrdersTable from "./OrdersTable";

import { Routes, Route } from "react-router-dom";

// Blog
import BlogList from "./pages/BlogList";
import BlogCreate from "./pages/BlogCreate";
import BlogEdit from "./pages/BlogEdit";

// Portfolio
import PortfolioList from "./pages/PortfolioList";
import PortfolioCreate from "./pages/PortfolioCreate";
import PortfolioEdit from "./pages/PortfolioEdit";

// Users
import Users from "./pages/Users";

// Messages
import Messages from "./pages/Messages";

// Home Dashboard Page
import Home from "./pages/Home";


export default function Dashboard({ dark }) {
  return (
    <DashboardLayout dark={dark}>
      <Routes>

        {/* داشبورد اصلی */}
        <Route index element={<Home dark={dark} />} />

        {/* Blog */}
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/new" element={<BlogCreate />} />
        <Route path="blogs/edit/:slug" element={<BlogEdit />} />

        {/* Portfolio */}
        <Route path="portfolio" element={<PortfolioList />} />
        <Route path="portfolio/new" element={<PortfolioCreate />} />
        <Route path="portfolio/edit/:slug" element={<PortfolioEdit />} />

        {/* Users */}
        <Route path="users" element={<Users />} />

        {/* Messages */}
        <Route path="messages" element={<Messages dark={dark} />} />

        {/* Orders / Stats (Dashboard Widgets) */}
        <Route
          path="stats"
          element={
            <>
              <StatsCards dark={dark} />
              <Charts dark={dark} />
              <OrdersTable dark={dark} />
            </>
          }
        />

      </Routes>
    </DashboardLayout>
  );
}