import { NextResponse } from "next/server";

import database from "@/database/database";
import { UserDocument } from "@/database/user.model";
import UserRepository from "@/database/repositories/user_repository";

export async function POST(request: Request, response: Response) {
    console.log(process.env.MONGODB_URI)
    await database.connect()
    const userData = JSON.parse(await request.text()) as UserDocument;

    UserRepository.getInstance().insert(userData)
    
    return NextResponse.json({ userData });
}

