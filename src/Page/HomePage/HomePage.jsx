import { Link } from "react-router-dom";
import { SvgSelector } from "module/RecipesBeer/RecipesBeerList/SvgSelector";
import css from './homePage.module.scss'
const HomePage = () => {
    return (
      <div className={css.wrapper}>
        <Link to={'/beers'}>
          <button className={css.btn}>
            <span>
              <SvgSelector id="logo" />
            </span>
            <span className={css.text}>GO</span>
          </button>
        </Link>
      </div>
    );
    
}
export default HomePage;