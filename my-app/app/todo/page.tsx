"use client"

import Listdata from '@/components/listComponent/page'
import { Box, Button, Modal, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect } from 'react'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
 
    boxShadow: 24,
    p:"10px",
  };
function page() {
    const [open, setOpen] = React.useState(false);
    const [task, setValue]=React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async(e:any)=>{
        e.preventDefault()

        try{
            console.log('task: ', task);
            const response = await axios.post('http://localhost:3000/api/todo' , {task})
        }
        catch(error){
            throw error
        }
        
    } 
     const getdata = async()=>{
        try{
           
            const response = await axios.get('http://localhost:3000/api/todo' )
        }
        catch(error){
            throw error
        }
         
     }
  useEffect(()=>{
   getdata()
  })

  return (
   <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit} style={{display:'flex' , flexDirection:'column' , alignItems:'center' , gap:'10px'}}>
         <TextField fullWidth placeholder='Enter your task'  type='text' value={task} size='small' onChange={(e)=>setValue(e.target.value)} />
         <Button type='submit' variant='contained'>Add Data</Button>
       
        </form>
        </Box>
      </Modal>
    <Listdata/>
    <Listdata/>
    <Listdata/>
    <Listdata/>
   </Box>
  )
}

export default page