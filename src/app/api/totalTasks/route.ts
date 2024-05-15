import { connectionDb } from "@/lib/db";
import { Task } from "@/lib/model/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE() {
    await mongoose.connect(connectionDb);
    const result = await Task.deleteMany();
    return NextResponse.json({ result, success: true });
}