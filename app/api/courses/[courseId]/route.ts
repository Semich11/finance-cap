import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import db from "@/db/drizzle";

import { courses } from '@/db/schema';  
import { isAdmin } from "@/lib/admin";


export const GET = async (req: Request, { params } : { params: Promise<{ courseId: string }> }) => {
  const { courseId } = await params;
  const courseIdNumber = Number(courseId);

    try{
       
        if (!isAdmin()) {                              
          return NextResponse.json(
            { error: 'Forbidden' },
            { status: 403 }
          );
        }

        const data = await db.query.courses.findFirst({
            where: eq(courses.id, courseIdNumber)
        })
      
      
        if (!data) {
          return NextResponse.json(
            { error: 'Course not found' },
            { status: 404 }
          );
        }
      
        return NextResponse.json(data, {
            status: 200
        });
    }catch(e){
        return NextResponse.json({error:e},
            {status:500}
        )
    }
}



export const PUT = async (req: Request, { params } : { params: Promise<{ courseId: string }> }) => {
  const { courseId } = await params;
  const courseIdNumber = Number(courseId);

     
    if (!isAdmin()) {
        return new NextResponse("Unathorized", { status: 403 });
    }

    const body = await req.json(); 
    const data = await db.update(courses).set({
        ...body,
    }).where(eq(courses.id, courseIdNumber)).returning();

    return NextResponse.json(data[0], {
        status: 200
    });
}




export const DELETE = async (req: Request, { params } : { params: Promise<{ courseId: string }> }) => {

  const { courseId } = await params;
  const courseIdNumber = Number(courseId);
    try{
       
        if (!isAdmin()) {                              
          return NextResponse.json(
            { error: 'Forbidden' },
            { status: 403 }
          );
        }

        const data = await db.delete(courses).where(eq(courses.id, courseIdNumber)).returning();
      
        if (!data) {
          return NextResponse.json(
            { error: 'Course not found' },
            { status: 404 }
          );
        }
      
        return NextResponse.json(data[0], {
            status: 200
        });
    }catch(e){
        return NextResponse.json({error:e},
            {status:500}
        )
    }
}