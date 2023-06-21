import {
  Button,
  Box,
  Drawer,
  IconButton,
  Typography,
  styled,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import {
  KeyboardDoubleArrowLeft,
  HelpOutlineOutlined,
  Search,
  Edit,
  Delete,
} from "@mui/icons-material/";
import { FolderDetails } from "./SideNav";

const SelectButton = styled(Button)({
  color: "inherit",
  justifyContent: "space-between",
  padding: "6px 0",
  width: "100%",
  textTransform: "none",
  "& .arrow": {
    opacity: 0,
  },
  ":hover": {
    color: "#fff",
    "& .text": {
      transform: "scale(1.3)",
    },
    "& .arrow": {
      opacity: 1,
    },
  },
});

const SearchBox = styled(TextField)({
  borderRadius: "10px",
  background: "#fff",
  border: "1px solid #cbd6e2",
  "& fieldset": { border: "none" },
  marginBottom: '16px'
});
const FolderBox = styled(Box)({
  padding: '20px', 
  background: '#f6f9fc',
  fontWeight: 600,
  borderRadius: '10px',
  marginBottom: '8px'

})
const IconBox=styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
})

type Props = {
  name: string;
  list: FolderDetails[]
  setFolder: Dispatch<SetStateAction<string>>
}

export default function Folder(props: Props) {
  const [openFolder, setOpen] = useState(false);
  const handleFolder = () => {
    setOpen((openFolder) => !openFolder);
  };
  return (
    <div>
      <SelectButton onClick={handleFolder}>
        <Typography variant="body2" fontWeight={600} className="text">
          Select a folder...
        </Typography>

        <span className="arrow">&rarr;</span>
      </SelectButton>
      <Drawer
        anchor="left"
        open={openFolder}
        onClose={handleFolder}
        style={{ zIndex: 200 }}
        PaperProps={{
          style: { padding: 24, left: 250, color: "#2b3c4d" },
        }}
      >
        <Box mb={3} className="flex">
          <IconButton sx={{ p: 0 }} onClick={handleFolder}>
            <KeyboardDoubleArrowLeft
              style={{
                color: "#2b3c4d",
              }}
            />
          </IconButton>
          <Tooltip title="Projects allow you to systematically organize your content">
            <IconButton sx={{ p: 0 }}>
              <HelpOutlineOutlined
                style={{
                  color: "#2b3c4d",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="h4" mb={2} fontWeight={600}>
          Projects
        </Typography>

        <Typography variant="body2" maxWidth={250} mb={3}>
          Projects allow you to systematically organize your content
        </Typography>
        <SearchBox
          placeholder="Search project"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: "#ff5c35" }} />
              </InputAdornment>
            ),
            style: { color: "#2b3c4d" },
          }}
          fullWidth
        />
        {props.list.map((item) =>
        <FolderBox className="flex" key={item.id}>
          {item.name}
          <IconBox>
            <IconButton sx={{background: 'white'}}>
              <Edit style={{fontSize: 14}} />
            </IconButton>
            <IconButton sx={{background: 'white'}}>
              <Delete style={{fontSize: 14}} />
            </IconButton>
          </IconBox>
        </FolderBox>
        )}
      </Drawer>
    </div>
  );
}