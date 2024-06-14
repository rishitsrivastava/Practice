import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest, { params : { nextauth }}: {
    params: {
        nextauth: string[]
    }
}) {
    console.log(nextauth)
    return NextResponse.json({
        message: "handler"
    })
}