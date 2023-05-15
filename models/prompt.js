import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt required"],
  },
  tag: {
    type: String,
    required: [true, "Tag required"],
  },
  createdAt: { type: Date, default: Date.now },
});

const Prompt = models.prompt || model("prompt", PromptSchema);

export default Prompt;
