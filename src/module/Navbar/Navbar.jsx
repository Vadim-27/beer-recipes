import { NavLink } from 'react-router-dom';
import css from './navbar.module.scss';
import { SvgSelector } from 'module/RecipesBeer/RecipesBeerList/SvgSelector';

const Navbar = () => {
  return (
    <div className={css.navbarWrapper}>
      <NavLink to={'/'}>
        <div className={css.wrapperLogo}>
          <SvgSelector id="logo" />
          <span className={css.logo}>World of beer</span>
        </div>
      </NavLink>
      <div className={css.wrapperLink}>
        <NavLink className={css.navbarLink} to={'/'}>
          Home Page
        </NavLink>
        <NavLink className={css.navbarLink} to={'/beers'}>
          Recipes Beer
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
