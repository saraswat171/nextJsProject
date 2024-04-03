"use server"
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
        const task = await req.json();
     console.log('task: ');
        const response = await axios.get  ('http://localhost:8080/fetchtask' );
      
    return NextResponse.json(response.data);

    } catch (error) {
        console.error('Error:', error);
       throw error
    }
}