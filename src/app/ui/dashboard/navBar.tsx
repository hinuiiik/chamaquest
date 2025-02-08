import NavElement from "@/app/ui/dashboard/navElement";

export default function NavBar(){
    const id: number[] = [0,1,2];
    const name: string[] = ["Sheldon's big bang theory","big money men", "family guy enjooyers"]

    const navItems =[];
    for (let i = 0; i < id.length; i++){
        navItems.push(<NavElement id={id[i]} name={name[i]}/>);
    }
    return(
        <>
            <div className={"flex flex-col"}>
                {navItems}
            </div>

        </>

    );
}