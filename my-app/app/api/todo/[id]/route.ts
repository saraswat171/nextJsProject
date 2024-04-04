
import axios from 'axios'
var mongoose = require('mongoose');

import { NextRequest, NextResponse } from 'next/server';
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const data = await req.json();
    console.log('data: ', data.task);
    const { id} = params
    const response = await fetch(`http://localhost:8080/updatetask/${id}`, {
        method: "PUT",
        body: data.task
    })
    const res = await response.json();
    console.log('res: ', res);
    return NextResponse.json(res)
}

// export async function GET(req: NextRequest) {
//     try {
        
    
//         const response = await fetch ('http://localhost:8080/fetchtask' );
//         const data = await response.json();
//       //  console.log('data: ', data);
      
//     return NextResponse.json(data);

//     } catch (error) {
//         console.error('Error:', error);
//        throw error
//     }
// }