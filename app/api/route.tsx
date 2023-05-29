import { NextRequest, NextResponse } from "next/server";

import database from "@/database/database";
import { UserDocument } from "@/database/user.model";
import UserRepository from "@/database/repositories/user_repository";

export async function POST(request: NextRequest, response: NextResponse) {
    await database.connect()
    const userData = JSON.parse(await request.text()) as UserDocument;
    userData.metadata = request.headers.get('x-forwarded-for')?.toString()

    var result = await UserRepository.getInstance().insert(userData)

    return NextResponse.json({ id: result._id.toString() });
}

