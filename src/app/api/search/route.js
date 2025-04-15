import books from '../../../../books.json';
export async function GET(req) {
    let query= req.nextUrl.searchParams.get("q");
    let results= books.filter(book=> book.title.toLowerCase().includes(query.toLowerCase()));
 
    return Response.json({books:results});
}