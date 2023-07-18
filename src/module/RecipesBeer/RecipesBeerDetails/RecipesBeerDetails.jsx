import css from './recipesBeerDetails.module.scss';

const RecipesBeerDetails = ({ recipes }) => {
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
    attenuation_level,
    volume: { value, unit },
  } = recipes;

  return (
    <div className={css.wrapper}>
      <div>
        <img className={css.avatar} alt="avatar" src={image_url} />
      </div>
      <div>
        <p className={css.text}>Name: {name}</p>
        <p className={css.text}>Tagline: {tagline}</p>
        <p className={css.text}>First brewed: {first_brewed}</p>
        <p className={css.text}>Description: {description}</p>

        <p className={css.text}>abv: {abv}</p>
        <p className={css.text}>ibu: {ibu}</p>
        <p className={css.text}>target fg: {target_fg}</p>
        <p className={css.text}>target og: {target_og}</p>
        <p className={css.text}>ebc: {ebc}</p>
        <p className={css.text}>srm: {srm}</p>
        <p className={css.text}>ph: {ph}</p>
        <p className={css.text}>attenuation level: {attenuation_level}</p>
        <p className={css.text}>
          volume: value:{value} unit:{unit}
        </p>
      </div>
    </div>
  );
};
export default RecipesBeerDetails;
