import Link from "next/link";

export default function NavElement({ id, name }: { id: number; name: string }) {
    return (
        <>
            <Link href={`/dashboard/${id}`} className="rounded-md bg-green-400 m-auto w-[90%] mb-4 p-2 text-center">
                    {name}
            </Link>
        </>
    );
}
