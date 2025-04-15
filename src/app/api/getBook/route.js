import books from '../../../../books.json';
export async function GET(req) {
    let id= req.nextUrl.searchParams.get("id");
    console.log(id)
    let foundBook = books.filter(book => book.id === id);
    return Response.json({book:foundBook});
}