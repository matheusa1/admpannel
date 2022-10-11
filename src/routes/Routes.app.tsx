import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Branches from "../pages/Branches";
import CarClasses from "../pages/CarClasses";
import Clients from "../pages/Clients";
import Drivers from "../pages/Drivers";
import LiveMap from "../pages/LiveMap";
import Moderators from "../pages/Moderators";
import Orders from "../pages/Orders";
import Riders from "../pages/Riders";
import Settings from "../pages/Settings";
import Shift from "../pages/Shift";
import DriverInformation from "../pages/DriverInformation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/Branches"
          element={
            <Layout>
              <Branches />
            </Layout>
          }
        />
        <Route
          path="/Car-Classes"
          element={
            <Layout>
              <CarClasses />
            </Layout>
          }
        />
        <Route
          path="/Clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />
        <Route
          path="/Drivers"
          element={
            <Layout>
              <Drivers />
            </Layout>
          }
        />
        <Route
          path="/Live-Map"
          element={
            <Layout>
              <LiveMap />
            </Layout>
          }
        />
        <Route
          path="/Moderators"
          element={
            <Layout>
              <Moderators />
            </Layout>
          }
        />
        <Route
          path="/Orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/riders"
          element={
            <Layout>
              <Riders />
            </Layout>
          }
        />
        <Route
          path="/Settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/Shift"
          element={
            <Layout>
              <Shift />
            </Layout>
          }
        />
        <Route
          path="/driver/:id"
          element={
            <Layout>
              <DriverInformation />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
