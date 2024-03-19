
const Navbar = () => {

    const routes = [
        {name:'Home',path:'/',id:1},
        {name:'About',path:'/about',id:2},
        {name:'Services',path:'/services',id:3},
        {name:'Contact',path:'/contact',id:4},
        {name:'Dashboard',path:'/dashboard',id:5}
    ];


    return (
        <nav>
           <ul>
           {
                routes.map(route =><li key={route.id}>
                    <a href={route.path}>{route.name}</a></li>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;