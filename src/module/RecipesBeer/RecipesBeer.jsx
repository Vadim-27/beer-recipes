import { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchAllRecipes } from 'redux/recipes/recipes-operation';
import { getRecipes } from 'redux/recipes/recipes-selectors';
import RecipesBeerList from './RecipesBeerList/RecipesBeerList';
import RecipesBeerDetails from './RecipesBeerDetails/RecipesBeerDetails';

const RecipesBeer = () => {
  const allRecipes = useSelector(getRecipes);

  const [visibleItems, setVisibleItems] = useState(15);
  const [detailsRecipes, setDetailsRecipes] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes({ page: 1, per_page: visibleItems }));
  }, [dispatch, visibleItems]);

  const handleDetailsClick = (e, id) => {
    e.preventDefault();
    setDetailsRecipes(allRecipes.recipes.find(item => item.id === id));
  };
  useEffect(() => {
    const handleEscapeKeyPress = event => {
      if (event.key === 'Escape') {
        setDetailsRecipes(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, []);

  const observer = useRef();
  const lastItemRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
      }
    });

    if (node) observer.current.observe(node);
  }, []);
  useEffect(() => {
    dispatch(fetchAllRecipes({ page: 1, per_page: visibleItems }));
  }, [dispatch, visibleItems]);

  return (
    <div>
      {detailsRecipes ? (
        <RecipesBeerDetails recipes={detailsRecipes} />
      ) : (
        <RecipesBeerList
          items={allRecipes.recipes}
          handleDetailsClick={handleDetailsClick}
          lastItemRef={lastItemRef}
        />
      )}
    </div>
  );
};
export default RecipesBeer;
