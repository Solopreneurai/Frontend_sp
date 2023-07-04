import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import {
  ArrowForwardIos,
  Autorenew,
  CheckCircle,
  HighlightOff,
  Search,
  SimCardDownload,
} from "@mui/icons-material";
import { Cell, Row, Table } from "../../Home/Pricing";

const tenantsInfo = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane@gmail.com",
    plan: "",
    trial: <CheckCircle style={{ color: "#ff7f5399" }} />,
    subscribed: <CheckCircle style={{ color: "#ff7f5399" }} />,
    banned: <HighlightOff style={{ color: "#ff7f5399" }} />,
  },
];
export const Input = styled(TextField)({
  border: "1px solid #30445744",
  borderRadius: "12px",
  "& input": {
    padding: "12px 6px",
  },
  "& fieldset": {
    display: "none",
  },
});
export default function TenantList() {
  return (
    <Box sx={{ p: "60px 30px", height: "100%", background: "#f6f9fc99" }}>
      <Box className="flex">
        <Typography variant="h5" fontWeight={700}>
          Tenants
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography variant="subtitle1" color="#ff5c35" fontWeight={600}>
            Dashboard
          </Typography>
          <ArrowForwardIos style={{ fontSize: 12 }} />
          <Typography variant="subtitle1">Tenants</Typography>
        </Box>
      </Box>
      <Box className="flex" mt={6}>
        <div>
          <Input
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            placeholder="Search Plans"
          />
        </div>
        <div>
          <IconButton
            style={{
              backgroundColor: "#304457",
              borderRadius: "8px 0 0 8px",
              color: "white",
              border: "1px solid #304457",
            }}
          >
            <Autorenew />
          </IconButton>
          <IconButton
            style={{
              borderRadius: "0 8px 8px 0",
              color: "#304457",
              border: "1px solid #304457",
            }}
          >
            <SimCardDownload />
          </IconButton>
        </div>
      </Box>

      <Table mt={3}>
        <Row className="head" gridTemplateColumns="repeat(7, 1fr) !important">
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              S.No.
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              Name and Email
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              Plan
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              on Trial
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              Is Subscribed
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              Banned
            </Typography>
          </Cell>
          <Cell>
            <Typography variant="subtitle1" fontWeight={600}>
              Actions
            </Typography>
          </Cell>
        </Row>
        {tenantsInfo.map((info) => (
          <Row key={info.id} gridTemplateColumns="repeat(7, 1fr) !important">
            <Cell>
              <Typography variant="body1">{info.id}</Typography>
            </Cell>
            <Cell flexDirection="column" alignItems="start !important">
              <Typography variant="body1">{info.name}</Typography>
              <Typography variant="body1" fontWeight={600} color="#2b3c4d88">
                {info.email}
              </Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{info.plan}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{info.trial}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{info.subscribed}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{info.banned}</Typography>
            </Cell>
            <Cell></Cell>
          </Row>
        ))}
      </Table>
    </Box>
  );
}
//use date range picker for calendar component
//per page custom paginator
