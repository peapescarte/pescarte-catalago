import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const {
      fish_id,  
      name,
      email,
      municipality_id,
      community_id,
      suggestedName } = body;

    const fish = await prisma.fish.findFirst({
      where: {
        id: fish_id,
      }
    })

    if (!fish) {
      return NextResponse.json({message: "Fish nout found"}, {status: 404})
    }

    const municipality = await prisma.municipality.findFirst({
      where: {
        id: municipality_id
      }
    })

    if (!municipality) {
      return NextResponse.json({message: "Municipality nout found"}, {status: 404})
    }

    const community = await prisma.community.findFirst({
      where: {
        id: community_id
      }
    })

    if (!community) {
      return NextResponse.json({message: "Community nout found"}, {status: 404})
    }

    const NewSuggestion =  await prisma.suggestedNames.create({ 
      data: {
        name,
        email,
        suggestedName,
        fish: {
          connect: {
            id: fish.id,
          },
        },
        community: {
          connect: {
            id: community.id
          }
        }
      }
    })

    console.log({"NewSuggestion": NewSuggestion})

    return NextResponse.json({status: 200});

  } catch(err) {  
      return NextResponse.json({message: "POST Error", err}, {status: 500})
  }
}