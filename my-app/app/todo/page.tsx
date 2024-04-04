

import Navbar from '@/components/Navbar';
import Listdata from '@/components/listComponent/page'
import { Box } from '@mui/material'

import React from 'react'




interface type {
 _id: string;
  task: string;
}
async function page() {



  const getdata = async () => {
    try {

      const response = await fetch('http://localhost:3000/api/todo', { next: { tags: ['todo'] } })

      const data2 = await response.json();
      return data2;
    }
    catch (error) {
      throw error
    }

  }

  var data: [type] | [] = await getdata();

  return (
    <Box>
      <Navbar />
      {data?.map((item) => {
      
        return <Listdata key={item?._id} data={item?.task} id={item?._id} />
      })}
    </Box>
  )
}

export default page