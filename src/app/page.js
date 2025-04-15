
import Link from "next/link";

export default function Home() {
  return (
   <div className="text-4xl text-white"><Link href={'/search'}>Click here to go to Search Page</Link></div>
  );
}
