import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    completed: {
        type: Boolean,
        default: false
    },
    todo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
        required: true
    }
}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subtodoSchema);
