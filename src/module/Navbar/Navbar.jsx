
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
            <span>BEER</span>
            <NavLink to={'/'}>Home Page</NavLink>
            <NavLink to={'/beers'}>Recipes Beer</NavLink>
       
      </div>
    );
}
export default Navbar;