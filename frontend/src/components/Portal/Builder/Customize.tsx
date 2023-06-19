import {
  Box,
  IconButton,
  InputLabel,
  Typography,
  styled,
  InputBase,
} from "@mui/material";
import { FilledButton } from "../../Home/Hero";
import { InfoOutlined } from "@mui/icons-material";
import { customFormData } from "../../../utils/constants";

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

type Props = {
  name: string;
};
function Customize(props: Props) {
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
                <Box
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                  mb={0.5}
                >
                  <Typography fontSize={12}>{data.label}</Typography>
                  <IconButton sx={{ p: 0 }}>
                    <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
                  </IconButton>
                </Box>
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
            <Box
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
              mb={0.5}
            >
              <Typography fontSize={12}>Company Logo</Typography>
              <IconButton sx={{ p: 0 }}>
                <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
              </IconButton>
            </Box>
          </InputLabel>
          <InputLabel>
            <Box
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
              mb={0.5}
            >
              <Typography fontSize={12}>Chatbot Picture</Typography>
              <IconButton sx={{ p: 0 }}>
                <InfoOutlined style={{ fontSize: 14, color: " #cbd6e2" }} />
              </IconButton>
            </Box>
          </InputLabel>
        </Box>
      </Form>
    </>
  );
}

export default Customize;
