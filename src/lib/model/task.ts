import mongoose from "mongoose";

const taskModal = new mongoose.Schema({
    detail: String,
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", taskModal);
