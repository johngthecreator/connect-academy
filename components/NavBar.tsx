import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex flex-row justify-between items-center p-5 bg-blue-500">
            <h1 className="text-2xl font-bold text-white">Connect Academy</h1>
            <ul>
                <li><Link className="p-3 bg-white text-blue-500 rounded-lg font-bold" href="/login">Get Started</Link></li>
            </ul>
        </nav>
    )
}