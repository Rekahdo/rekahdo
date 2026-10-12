import { NextResponse } from "next/server";

export function POST(data: Request){
    return NextResponse.json({success: true})
}