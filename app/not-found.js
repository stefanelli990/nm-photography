import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <h1>Not found</h1>
            <p>Unfortunately, we could not find the requested page or resources.</p>
            <Link href='/'>Go back</Link>
        </div>
    )
}