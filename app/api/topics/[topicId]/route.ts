import db from "@/db/drizzle";
import { topics } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest, context: { params: Promise<{ topicId: string }> }) {
  const params = await context.params;
    
    try{
      const { topicId } = params;            
      const topicIdNum = parseInt(topicId, 10);    
    
      if (!isAdmin()) {                             
        return NextResponse.json(
          { error: 'Forbidden' },
          { status: 403 }
        );
      }
    
      const topicsResult = await db
        .select()
        .from(topics)
        .where(eq(topics.id, topicIdNum));       
      const courseData = topicsResult[0];
    
    
      if (!courseData) {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        );
      }
    
      return NextResponse.json(courseData);

  }catch(e){
        return NextResponse.json({error:e},
            {status:500}
        )
    }
}


export const PUT = async (req: Request, { params } : { params: Promise<{ topicId: string }> }) => {
  const { topicId } = await params;
  const topicIdNumber = Number(topicId);

     
    if (!isAdmin()) {
        return new NextResponse("Unathorized", { status: 403 });
    }

    const body = await req.json(); 
    const data = await db.update(topics).set({
        ...body,
    }).where(eq(topics.id, topicIdNumber)).returning();

    return NextResponse.json(data[0], {
        status: 200
    });
}






export async function DELETE(req: NextRequest, context: { params: Promise<{ topicId: string }> }) {
  const params = await context.params;
  
  try{
      const { topicId } = params;            
      const topicIdNum = parseInt(topicId, 10);    
         
        if (!isAdmin()) {
            return new NextResponse("Unathorized", { status: 403 });
        }
    
    
        const data = await db.delete(topics).where(eq(topics.id, topicIdNum)).returning();
    
        return NextResponse.json(data[0]);

    }catch(e){
      return NextResponse.json({error:e},
            {status:500}
      )

    }
}
