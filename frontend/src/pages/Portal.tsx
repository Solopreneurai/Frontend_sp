import SideNav from "../components/Portal/Navbar/SideNav";
import { Box } from "@mui/material";
import BotList from "../components/Portal/BotDetails/BotList";
import Resources from "../components/Portal/Resources";
import Earn from "../components/Portal/Earn";
import { Navigate, Route, Routes } from "react-router-dom";
import Bot from "./Bot";

export default function Portal() {
  return (
    <div>
      <SideNav />
      <Box ml={32} height='100vh' overflow='hidden'>
        <Routes>
          <Route
            path="/*"
            element={
                <Routes>
                  <Route path="/" element={<Navigate  to="/portal/bot" />} />
                  <Route path='/bot' element={<BotList />} />
                  <Route path='/earn' element={<Earn />} />
                  <Route path='/resources' element={<Resources />} />
                </Routes>
            }
          />
          <Route path="/bot/:id" element={<Bot />} />
        </Routes>
      </Box>
    </div>
  );
}
