import { Box, Divider, InputAdornment, TextField, Typography, styled } from "@mui/material"
import { useState } from "react"
import  { NoteAdd, Search } from '@mui/icons-material/';
import NoFile from "../../assets/empty.png"

const Wrapper = styled(Box)({
    padding: "5px 30px",
})
const StructureBox = styled(Box)({
  display:'flex',
  gap: '10px',
  alignItems: 'center',
  margin: '10px 0',
})
const FlexBox= styled(Box)({
  display: 'flex',
  justifyContent:'space-between',
  alignItems: 'center',
  margin: '30px 0'
})
const ViewBox = styled(Box)({
  border: '1px solid #cbd6e2',
  borderRadius: '16px',
  padding: '5px',
  display: 'flex',
  gap: '5px',
  '& .active': {
    background: '#ff5c35',
    color:'white'
  }
})
const ViewText = styled(Typography)({
  padding: '5px 10px',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 600

})
const IconBox = styled(Box)({
  padding:'5px',
  border: '1px solid #cbd6e2',
  borderRadius: '8px'
})
const SearchContainer = styled(Box)({
  display: 'flex',
  gap: '10px'
})
const SearchBox = styled(TextField)({
  border: '1px solid #cbd6e2',
  borderRadius:'8px',
  '& .MuiOutlinedInput-input': {
    padding: '8px 12px',
  },
  "& fieldset": { border: "none" },
})
const MainWrapper = styled(Box)({
  display: 'flex',
  justifyContent:'center'
})

function History() {
  const [view, setView] = useState("Folder")
  return (
    <Wrapper>
      <Divider />
     <StructureBox>
      <Typography variant="body2">
        History
      </Typography>
      <span style={{fontWeight: 800, fontSize: 16}}>&gt;</span>
      
      <Typography variant="body2" fontWeight={700}>{view}</Typography>
      </StructureBox> 
     <FlexBox>
      <ViewBox>
        <ViewText variant="body2" className={`${view === 'Folder' ? 'active' : ''}`} onClick={() => setView(() => "Folder")}>Folder view</ViewText>
        <ViewText variant="body2" className={`${view === 'File' ? 'active' : ''}`} onClick={() => setView(() => "File")}>File view</ViewText>
      </ViewBox>
      <SearchContainer>
      <SearchBox
        placeholder="Search in History"
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
        <IconBox>
          <NoteAdd />
        </IconBox>
      </SearchContainer>
    </FlexBox>
    <MainWrapper>
      <img src={NoFile} alt="no file or folder" width='35%' />
    </MainWrapper>
    </Wrapper>
  )
}

export default History
