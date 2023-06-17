import SideNav from "../components/Portal/Navbar/SideNav";
import { Box, styled } from "@mui/material";
import Builder from "../components/Portal/BotBuilder/Builder";
import Resources from "../components/Portal/Resources";
import Earn from "../components/Portal/Earn";
import { Navigate, Route, Routes } from "react-router-dom";
import Bot from "./Bot";

const MainWrapper = styled(Box)({
  marginLeft: "250px",
  color: "#2b3c4d",
});

export default function Portal() {
  return (
    <div>
      <SideNav />
      <MainWrapper>
        <Routes>
          <Route
            path="/*"
            element={
                <Routes>
                  <Route path="/" element={<Navigate  to="/portal/bot" />} />
                  <Route path='/bot' element={<Builder />} />
                  <Route path='/earn' element={<Earn />} />
                  <Route path='/resources' element={<Resources />} />
                </Routes>
            }
          />
          <Route path="/bot/:id" element={<Bot />} />
        </Routes>
      </MainWrapper>
    </div>
  );
}
