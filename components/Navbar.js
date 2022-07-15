import Link from "next/link";
export default function Navbar() {
  return (
    <div className="p-10 mx-auto max-w-2xl justify-center">
        <nav className="flex items-center justify-between">
            <h1 className="text-1xl font-bold">Portfolio</h1>
            <ul>
                <li className="inline-block">
                    <Link href="/">
                        <a id="home" className="px-3 py-2 rounded-md text-sm font-normal active:font-bold">Home</a>
                    </Link>
                </li> 

                <li className="inline-block">
                    <Link href="/about">
                        <a className="px-3 py-2 rounded-md text-sm font-normal active:font-bold">About</a>
                    </Link>
                </li>

                <li className="inline-block">
                    <Link href="/contact">
                        <a className="px-3 py-2 rounded-md text-sm font-normal active:font-bold">Contact</a>
                    </Link>
                </li>  
            </ul>
        </nav>
    </div>
  )
}
