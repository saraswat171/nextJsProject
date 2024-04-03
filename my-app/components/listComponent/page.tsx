import { Box, Typography  } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

function Listdata() {
  return (
    <Box sx={{display:'flex' , flexDirection:'rows' , p:'10px' , boxSizing:'border-box' , color:'black' , boxShadow:'1' , width:'400px' , alignItems:'center' , gap:'5px'}}>
      <CircleIcon sx={{height:'5px' , width:'5px'}} />
      <Typography>Hey i m here</Typography>
    </Box>
  )
}

export default Listdata