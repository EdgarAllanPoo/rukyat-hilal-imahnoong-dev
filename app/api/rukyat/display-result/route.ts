import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    const data = await prisma.rukyat.findMany({
        include: {
            User: true,
        }
    });
    return new Response(JSON.stringify(data));
}
