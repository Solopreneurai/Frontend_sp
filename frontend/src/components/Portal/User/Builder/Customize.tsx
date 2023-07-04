import {
  Box,
  IconButton,
  InputLabel,
  Typography,
  styled,
  InputBase,
} from "@mui/material";
import { FilledButton } from "../../../Home/Hero";
import { InfoOutlined } from "@mui/icons-material";
import { customFormData } from "../../../../utils/constants";
import Logo from "../../../../assets/chatbot-logo.png";
import FileUploadText from "./FileUploadText";

const Form = styled(Box)({
  padding: "20px 0",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "50px",
});
export const Input = styled(InputBase)({
  border: "1px solid #cbd6e2",
  padding: "10px 16px",
  borderRadius: "10px",
});
const CustomBox = styled(Box)({
  display: "flex",
  gap: "5px",
  alignItems: "center",
});

type Props = {
  name: string;
};

export default function Customize(props: Props) {
  return (
    <>
      <Box className="flex">
        <Typography variant="h5" fontWeight={600}>
          Customize
        </Typography>
        <FilledButton variant="contained" style={{ padding: "6px 32px" }}>
          Update
        </FilledButton>
      </Box>
      <Form>
        <Box>
          {customFormData.map((data) => (
            <Box key={data.id}>
              <InputLabel htmlFor={data.id}>
                <CustomBox mb={0.5}>
                  <Typography fontSize={12}>{data.label}</Typography>
                  <IconButton sx={{ p: 0 }}>
                    <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
                  </IconButton>
                </CustomBox>
              </InputLabel>
              <Input
                fullWidth
                placeholder={data.placeholder}
                defaultValue={data.id === "1" ? props.name : data.defaultValue}
                id={data.id}
                sx={{ mb: 2 }}
              />
            </Box>
          ))}
        </Box>
        <Box>
          <InputLabel>
            <CustomBox mb={1.5}>
              <Typography fontSize={12}>Company Logo</Typography>
              <IconButton sx={{ p: 0 }}>
                <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
              </IconButton>
            </CustomBox>
          </InputLabel>
          <FileUploadText
            text="Upload Logo"
            defaultSrc={Logo}
            subText="JPG/PNG up to 5 MB"
          />
          <InputLabel>
            <CustomBox mt={3} mb={1.5}>
              <Typography fontSize={12}>Chatbot Picture</Typography>
              <IconButton sx={{ p: 0 }}>
                <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
              </IconButton>
            </CustomBox>
          </InputLabel>
          <FileUploadText
            text="Upload Logo"
            defaultSrc={Logo}
            subText="JPG/PNG up to 5 MB"
          />
        </Box>
      </Form>
    </>
  );
}