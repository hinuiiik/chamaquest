import { db } from "@vercel/postgres";

export async function GET() {
    const client = await db.connect(); // Move client inside the function

    // Query to join users and chamas based on the chamas array
    const { rows } = await client.sql`
        SELECT c.id, c.name
        FROM users u
                 JOIN chamas c ON c.id = ANY(u.chamas)
        WHERE u.id = 1
    `;

    // Convert to 2D array format [[id, name], [id, name]]
    const chamaNames = rows.map(({ id, name }) => [id, name]);

    return Response.json(chamaNames);
}
