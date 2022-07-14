import Link from "next/link";
export default function Navbar() {
  return (
    <div className="p-10 mx-auto max-w-4xl justify-center">
        <nav className="flex items-center justify-between">
            <h1 className="text-1xl font-bold">Portfolio</h1>
            <ul>
                <li className="inline-block">
                    <Link href="/">
                        <a className="px-3 py-2 rounded-md text-sm font-normal :active font-semibold">Home</a>
                    </Link>
                </li> 

                <li className="inline-block">
                    <Link href="/about">
                        <a className="px-3 py-2 rounded-md text-sm font-normal :active font-semibold">About</a>
                    </Link>
                </li>

                <li className="inline-block">
                    <Link href="/contact">
                        <a className="px-3 py-2 rounded-md text-sm font-normal :active font-semibold">Contact</a>
                    </Link>
                </li>  
            </ul>
        </nav>
    </div>
  )
}
