
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    try {
        const task = await req.json();
     console.log('task: ');
        const response = await axios.post('http://localhost:8080/addtask' , task);
      
    return NextResponse.json(response.data);

    } catch (error) {
        console.error('Error:', error);
       throw error
    }
}

export async function GET(req: NextRequest) {
    try {
        
    
        const response = await fetch ('http://localhost:8080/fetchtask' );
        const data = await response.json();
      //  console.log('data: ', data);
      
    return NextResponse.json(data);

    } catch (error) {
        console.error('Error:', error);
       throw error
    }
}