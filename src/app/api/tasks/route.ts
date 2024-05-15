import { connectionDb } from "@/lib/db";
import { Task } from "@/lib/model/task";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionDb);
    const result = await Task.find({});
    return NextResponse.json({ result, success: true });
}

export async function POST(request: NextRequest) {
    const payload = await request.json();
    await mongoose.connect(connectionDb);
    let taskData = await new Task(payload);
    const result = await taskData.save();
    return NextResponse.json({ result, success: true });
}

export async function PUT(request: NextRequest) {
    const payload = await request.json();
    await mongoose.connect(connectionDb);
    const result = await Task.findOneAndUpdate({ _id: payload._id }, payload);
    return NextResponse.json({ result, success: true });
}

export async function DELETE(request: NextRequest) {
    const payload = await request.json();
    await mongoose.connect(connectionDb);
    const result = await Task.deleteOne({ _id: payload.id });
    return NextResponse.json({ result, success: true });
}