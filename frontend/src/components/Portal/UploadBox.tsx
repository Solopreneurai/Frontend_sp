import { Box, IconButton, styled, Typography } from "@mui/material";
import { NoteAddOutlined } from "@mui/icons-material/";

const Container = styled(Box)({
  flexDirection: "column",
  border: '2px dotted #ff5c35',
  borderRadius: '10px',
  width: '100%',
  padding: '32px 42px'
});
type Props = {
  text: string;
  subText: string;
};
export default function UploadBox(props: Props) {
  return (
    <Container className="flex">
      <IconButton sx={{ p: 0 }}>
        <NoteAddOutlined
          style={{ color: "#ff7f53", fontSize: 36 }}
        />
      </IconButton>
      <Typography variant="h6" fontWeight={600} mt={2}>{props.text}</Typography>
      <Typography variant="body2" color="#6b7280">{props.subText}</Typography>
    </Container>
  );
}
