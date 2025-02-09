export default function Chat({ author, message }: {author: string, message: string}) {
    return(
        <>
            <p>{author}: {message}</p>
        </>
    );
}