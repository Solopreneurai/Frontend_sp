import { Send, Chat } from "@mui/icons-material";
import { styled, Box, Typography, TextField, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChatBot = styled(Box)({});
const BoxWrapper = styled(Box)({
  position: "absolute",
  transformOrigin: "right bottom !important",
  transition: "transform 300ms cubic-bezier(0, 1.2, 1, 1)",
  animation: "slideUp 300ms ease-in-out",
  bottom: "15%",
  left: "12%",
  width: "76%",
  height: "75%",
  borderRadius: "28px",
  display: "flex",
  flexDirection: "column",
  background: "white",
});
const ChatButton = styled(Box)({
  position: "absolute",
  bottom: "5%",
  right: "5%",
});
const Header = styled(Box)({
  padding: "14px",
  borderRadius: "28px 28px 0 0",
  background: "#2b3c4d",
  minHeight: "70px",
  display: "flex",
  alignItems: "center",
  gap: "3px",
  flexDirection: "column",
  color: "white",
});
const MessageWrapper = styled(Box)({
  padding: "12px",
  flex: "1",
  overflow: "scroll",
});
const Form = styled(Box)({
  padding: "4px 6px",
  display: "flex",
  alignItems: "center",
});
const Footer = styled(Box)({
  padding: "10px",
  background: "#cbd6e2",
  borderRadius: "0 0 28px 28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  fontSize: "12px",
  fontWeight: 600,
  textDecoration: "none",
});
const MessageInput = styled(TextField)({
  padding: "0",
  borderRadius: "25px",
  border: "1px solid #cbd6e2",
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    padding: "8px 10px",
    fontSize: "14px",
  },
  "& fieldset": {
    display: "none",
  },
});
type Props = {
  headerImg: string;
  botName: string;
};
//show form value
//show chat animation
export default function Chatbot(props: Props) {
  const ref = useRef<HTMLDivElement>();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      ref.current?.classList.toggle("slide-down");
    }
  };
  return (
    <ChatBot>
      {show && (
        <BoxWrapper ref={ref}>
          <Header>
            <Typography variant="h6" fontWeight={600}>
              {props.botName}
            </Typography>
            <img width={40} src={props.headerImg} />
          </Header>
          <MessageWrapper></MessageWrapper>
          <Form>
            <MessageInput placeholder="Send a message" fullWidth />
            <IconButton>
              <Send style={{ color: "#ff7f53" }} />
            </IconButton>
          </Form>
          <Footer>
            Powered by
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Solopreneur
            </Link>
          </Footer>
        </BoxWrapper>
      )}

      <ChatButton>
        <IconButton
          sx={{
            backgroundColor: "#2b3c4d",
            p: 1.5,
            ":hover": {
              backgroundColor: "#2b3c4d",
            },
          }}
          onClick={handleShow}
        >
          <Chat sx={{ color: "white" }} />
        </IconButton>
      </ChatButton>
    </ChatBot>
  );
}
