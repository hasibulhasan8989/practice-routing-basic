import { Link, NavLink } from "react-router-dom";


const Nav = () => {

    return (
        <nav className="space-x-4 text-lime-600 text-xl font-bold mt-4">
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/about'> About </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
            <NavLink to='/users'> Users </NavLink>
            <NavLink to='/posts'>Posts</NavLink>
           

        </nav>
    );
};

export default Nav;