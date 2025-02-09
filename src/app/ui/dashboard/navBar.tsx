/*import NavElement from "@/app/ui/dashboard/navElement";
import { sql } from '@vercel/postgres';

export default function NavBar(){
    const id: number[] = [0,1,2];
    const chamaNames: string[] = await sql'SELECT chamas FROM users WHERE id=1';

    const navItems =[];
    for (let i = 0; i < chamaNames.length; i++){
        navItems.push(<NavElement id={id[i]} name={chamaNames[i]}/>);
    }
    return(
        <>
            <div className={"flex flex-col"}>
                {navItems}
            </div>

        </>

    );
}*/