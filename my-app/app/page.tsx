import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";


export default function Home() {

  return (
 <Box sx={{display:'flex' , flexDirection:'column' , gap:'10px' , justifyContent:'center', alignItems:'center' , width:'100vw' , height:'100vh'}}>
  <Typography sx={{fontSize:'18px'}}>Hi welcome ! <span style={{color:'orange', fontSize:'20px'}}>Click below to visit your to-do-list</span> </Typography>
     <Link href={'/todo'}>
    <Button variant="contained" >To-do-list</Button>
    </Link>
 </Box>

  );
}
