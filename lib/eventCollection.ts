import { getDatabase } from "./db";
import { EventType } from "@/types/Event";

export async function getEventsCollection() {
  const db = await getDatabase();
  return db.collection<EventType>("events");
}
