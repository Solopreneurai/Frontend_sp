import {
  Typography,
  Box,
  styled,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { OutlinedButton } from "../../Home/Hero";
import { CheckCircle } from "@mui/icons-material";

const BoxStyle = styled(Box)({
  padding: "16px",
  border: "1px solid #cbd6e2",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderRadius: "10px",
});
const GridBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
});
const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#ff7f53",
  },
});
const Table = styled(Box)({
  display: 'grid', 
  gridTemplateColumns: 'repeat(1, 1fr)',
  '&  .head' : {
    background:"#f6f9fc",
    borderRadius: '10px'
  }
})
const Row = styled(Box)({
  display: 'grid',
  borderBottom: "1px solid #f6f9fc",
})
const Cell = styled(Box)({
  padding: "12px",
  display: 'flex', 
  justifyContent: 'center',
  fontWeight: 600
})

export default function UserData() {
  const data = [
    { id: "1", text: "Name" },
    { id: "2", text: "Email" },
  ];
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={2}>
        User Data
      </Typography>
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ViewBox>
          <Box
            sx={{ p: "6px" }}
            className={`${showForm ? "active" : ""}`}
            onClick={handleShowForm}
          >
            <Typography variant="body2" fontWeight={600}>
              Show Form
            </Typography>
          </Box>
          <Box
            sx={{ p: "6px" }}
            className={`${!showForm ? "active" : ""}`}
            onClick={handleShowForm}
          >
            <Typography variant="body2" fontWeight={600}>
              Hide Form
            </Typography>
          </Box>
        </ViewBox>
      </Box> */}
      <FormGroup>
        <FormControlLabel
          control={<CustomSwitch style={{ color: "#ff5c35" }} defaultChecked />}
          label="Show Form"
          labelPlacement="start"
        />
      </FormGroup>
      <Typography variant="body2" color="#6b7280" mt={2}>
        Data Collected from your bot user
      </Typography>
      <BoxStyle mt={2} mb={3}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Choose what data to collect
          </Typography>
          <GridBox>
            {data.map((item) => (
              <Box
                key={item.id}
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <CheckCircle style={{ fontSize: 14, color: "#ff7f53" }} />
                <Typography style={{ fontSize: 12, color: "#6b7280" }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </GridBox>
        </Box>
        <OutlinedButton
          variant="outlined"
          style={{ borderRadius: "12px", padding: "8px 12px" }}
        >
          Configure
        </OutlinedButton>
      </BoxStyle>
      <Table>
          <Row className="head" style={{gridTemplateColumns: `repeat(${data.length + 1}, 1fr)`}}>
            {data.map((item) => <Cell key={item.id}>
              {item.text}
            </Cell>)}
            <Cell>Recorded At</Cell>
          </Row>

        </Table>
    </>
  );
}
//use pagination to display the recorded data
//configure should open a dialog box to change the configurations data to be shown in the table, page should not scroll here