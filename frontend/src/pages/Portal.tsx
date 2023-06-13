import { useState } from "react";
import SideNav from "../components/Portal/SideNav";
import { Box, styled } from "@mui/material";
import Header from "../components/Portal/Header";
import Library from "../components/Portal/Library"
import History from "../components/Portal/History"
import Builder from "../components/Portal/Builder";
import Resources from "../components/Portal/Resources";
import Earn from "../components/Portal/Earn";

const MainWrapper = styled(Box)({
  marginLeft: '250px',
  color: "#2b3c4d",
})

export default function Portal() {
  const [tab, setTab] = useState('1')

  const Content = (id: string) => {
    switch (id) {
      case "1":
        return <Library />;
      case "2":
        return <History />;
      case "3":
        return <Builder />;
      case "4":
        return <Resources />;
      case "5":
        return <Earn />;
      default:
        return "";
    }
  }

  return (
    <div>
      <SideNav id={tab} setTab={setTab} />
      <MainWrapper>
        <Header id={tab} />
        {Content(tab)}
      </MainWrapper>
    </div>
  )
}
