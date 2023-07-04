import { ArrowForwardIos, PersonAdd, Search } from "@mui/icons-material";
import { FilledButton } from "../../Home/Hero";
import { Box, InputAdornment, Typography } from "@mui/material";
import { Cell, Row, Table } from "../../Home/Pricing";
import { Input } from "./TenantList";

export default function Plans() {
  return (
    <Box sx={{ p: "60px 30px", height: "100%", background: "#f6f9fc99" }}>
    <Box className="flex">
      <Typography variant="h5" fontWeight={700}>
        Plans
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography variant="subtitle1" color="#ff5c35" fontWeight={600}>
          Dashboard
        </Typography>
        <ArrowForwardIos style={{ fontSize: 12 }} />
        <Typography variant="subtitle1">Plans</Typography>
      </Box>
    </Box>
    <Box className="flex" mt={6}>
      <Input 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            placeholder="Search Tenants"
          />
      <FilledButton startIcon={<PersonAdd />} style={{ color: "white" }}>
        Create New
      </FilledButton>
    </Box>

    <Table mt={3}>
      <Row className="head" gridTemplateColumns={'repeat(7, 1fr) !important'}>
        <Cell>
          <Typography variant="subtitle1">#</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Name</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Amount</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Currency</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Interval</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Description</Typography>
        </Cell>
        <Cell>
          <Typography variant="subtitle1">Actions</Typography>
        </Cell>
      </Row>
     
    </Table>
  </Box>
  );
}
//custom paginator