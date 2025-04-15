import Link from "next/link";
import Image from "next/image";
export default async function Book({ params }) {
    let a = await params;
    const data = await fetch("http://localhost:3000/api/getBook?id=" + a.book);
    const foundBookbook = await data.json();
    console.log(foundBookbook);
    return (
        <div className="text-white grid gap-2 place-items-center">
            <h1 className="text-4xl">Book Details</h1>
            {foundBookbook.book.length > 0 ? (
                <div className="italic grid gap-2 place-items-center">
                    <Image
                        blurDataURL={"/loadingcover.png"}
                        placeholder="blur"
                        loading="lazy"
                        alt={foundBookbook.book[0].title}
                        height={320}
                        width={208}
                        className="object-cover"
                        src={
                            foundBookbook.book[0].cover === ""
                                ? "/nocover.png"
                                : foundBookbook.book[0].cover
                        }
                    />

                    <p>Name : {foundBookbook.book[0].title}</p>

                    <p>Author : {foundBookbook.book[0].author}</p>
                </div>
            ) : (
                <p className="text-white">Book doesn't exist</p>
            )}

            <Link className="text-white" href={"/search"}>
                {" "}
                Go back to Search
            </Link>
        </div>
    );
}
