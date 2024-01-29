import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params } : { params: { uf: string }}) => {
  try {
    const municipalities = await prisma.municipality.findMany({
      where: {
        uf: {
          uf:  params.uf,
        }
      }
    })

    return NextResponse.json({municipalities}, {status: 200});

  } catch(err) {  
      return NextResponse.json({message: "POST Error", err}, {status: 500})
  }
}