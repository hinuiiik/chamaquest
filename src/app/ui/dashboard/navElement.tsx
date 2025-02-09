export default function NavElement({name}: {id: number, name: string}){


    return(
        <>
        <div className={"rounded-md bg-green-400 m-auto w-[90%] mb-4 p-2 text-center"}>
            <p>{name}</p>
        </div>
        </>
    );
}