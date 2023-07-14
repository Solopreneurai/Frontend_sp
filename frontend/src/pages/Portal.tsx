import SideNav from "../components/Portal/Navbar/SideNav";
import { Box } from "@mui/material";
import BotList from "../components/Portal/User/BotDetails/BotList";
import Resources from "../components/Portal/User/Resources";
import Earn from "../components/Portal/User/Earn";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "../components/Portal/Admin/Admin";
import Error from "./Error";
import Plans from "../components/Portal/Admin/Plans";
import Tenants from "../components/Portal/Admin/Tenants";
import TenantList from "../components/Portal/Admin/TenantList";
import { useSelector } from "react-redux";

export default function Portal() {
  const isAdmin = useSelector((state: State) => state.isAdmin);
  return (
    <div>
      <SideNav isAdmin={isAdmin} />
      <Box ml={32} height="100vh">
        <Routes>
          <Route
            path="/*"
            element={
              <Routes>
                {isAdmin ? (
                  <>
                    <Route path="/" element={<Navigate to="/portal/admin" />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/plans" element={<Plans />} />
                    <Route path="/admin/tenants" element={<TenantList />} />
                    <Route path="/admin/tenants/:id" element={<Tenants />} />
                    <Route path="*" element={<Error />} />
                  </>
                ) : (
                  <>
                    <Route
                      path="/"
                      element={<Navigate to="/portal/user/bot" />}
                    />
                    <Route path="/user/bot" element={<BotList />} />
                    <Route path="/user/earn" element={<Earn />} />
                    <Route path="/user/resources" element={<Resources />} />
                    <Route path="*" element={<Error />} />
                  </>
                )}
              </Routes>
            }
          />
        </Routes>
      </Box>
    </div>
  );
}
//create protected routes else redirect to 404
