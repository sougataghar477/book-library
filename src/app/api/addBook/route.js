import path from "path";
import { promises as fs } from "fs";
export async function POST(req) {
    try {
        let body = await req.json();
        let books = [];
        const filePath = path.join(process.cwd(), "books.json");
        try {
            const fileData = await fs.readFile(filePath, "utf-8");
            books = JSON.parse(fileData);
        } catch (readErr) {
            console.warn("Could not read file.", readErr);
            return Response.json({ message: "Error reading file" }, { status: 500 });
        }
        books.push({
            id: String(books.length + 1),
            title: body.title,
            author: body.author,
            cover: "",
        });
        await fs.writeFile(filePath, JSON.stringify(books, null, 2));
        return Response.json({ message: "Book created" });
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Error writing file" }, { status: 500 });
    }
}
