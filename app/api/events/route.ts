import { NextResponse } from "next/server";
import { getEventsCollection } from "@/lib/eventCollection";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const required = ["title", "image", "date", "venue", "type"];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const collection = await getEventsCollection();

    const event = {
      ...data,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(event);

    return NextResponse.json(
      { message: "Event created", id: result.insertedId },
      { status: 201 }
    );

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const collection = await getEventsCollection();
    const events = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(events);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
