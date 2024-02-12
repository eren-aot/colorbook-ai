import { NextResponse } from "next/server";
import OpenAI from "openai"

export async function POST(req: Request) {
    try {

        const body = await req.json();
        const { about } = body;

        if (!about) {
            console.log("About is required!!!")
            return new NextResponse("About is required !!!", { status: 400 });
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })

        const image = await openai.images.generate({
            model: "dall-e-2",
            prompt: `Generate a coloring page based on the description ${about}.The coloring page should be detailed and complex with shades.`
        });
        console.log(image.data)

        return NextResponse.json({ image: image.data })

    } catch (error) {

        console.log("ERROR GENERATING COLORBOOK", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}