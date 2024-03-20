import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        {name:'Home',path:'/Home',id:1},
        {name:'About',path:'/about',id:2},
        {name:'Services',path:'/services',id:3},
        {name:'Contact',path:'/contact',id:4},
        {name:'Dashboard',path:'/dashboard',id:5}
    ];


    return (
        <nav>
            <div className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                {
                    open===true?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu className=" "></AiOutlineMenu>
                }
            
            </div>
           <ul className={`md:flex duration-1000 absolute ${open? 'top-16':'-top-60'} bg-slate-500 p-3 text-white`}>
           {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;