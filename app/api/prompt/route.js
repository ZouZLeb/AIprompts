import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({})
      .populate("creator")
      .sort({ createdAt: -1 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
