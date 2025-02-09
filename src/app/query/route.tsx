import { db } from "@vercel/postgres";

const client = await db.connect();

export async function getUserChamas() {
    // language=SQL format=false
    const {rows} = await client.sql`SELECT chamas FROM users WHERE id=1`;
    return rows;
}
export async function GET() {
    return Response.json(await getUserChamas());
}