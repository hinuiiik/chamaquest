import { db } from "@vercel/postgres";

const client = await db.connect();

export async function getUserChamas() {
    // Query to join users and chamas based on the chamas array
    const { rows } = await client.sql`
        SELECT c.id, c.name
        FROM users u
                 JOIN chamas c ON c.id = ANY(u.chamas)
        WHERE u.id = 1
    `;

    return rows.map(({ id, name }) => [id, name]); // Convert to 2D array
}

export async function GET() {
    return Response.json(await getUserChamas());
}
