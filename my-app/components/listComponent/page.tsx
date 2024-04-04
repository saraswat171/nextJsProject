"use client"
import { Box, Button, Typography  } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import Navbar from "../Navbar";

interface type {
  key: string; 
  data: string;
  id:string;
}

function Listdata ({key , data,id}:type) {

  const [open , setOpen]=useState(false)
const handleClick=()=>{
setOpen(true)
}

  return (
    
    <Box key={key} sx={{display:'flex' , flexDirection:'rows' , p:'10px' , boxSizing:'border-box' , color:'black' , boxShadow:'1' , width:'400px' , alignItems:'center' ,justifyContent:'space-between'}}>
     {open && <Navbar opens={open} key={id} data={data} id={id} />}
      <Box sx={{display:'flex' , flexDirection:'rows' ,  alignItems:'center' , gap:'5px'}}>
      <CircleIcon sx={{height:'5px' , width:'5px'}} />
      <Typography>{data && data}</Typography>
      </Box>
      <Box>
        <Button onClick={handleClick}>Update</Button>
        <Button>Delete</Button>

      </Box>
    </Box>
  )
}

export default Listdata