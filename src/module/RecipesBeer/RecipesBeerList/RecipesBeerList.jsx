import { useState, useEffect } from 'react';

import css from './recipesBeerList.module.scss';
import { SvgSelector } from './SvgSelector';

const RecipesBeerList = ({ items, handleDetailsClick, lastItemRef }) => {
  const [copyItems, setCopyItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (e, id) => {
    e.preventDefault();
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteItemClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCopyItems(prev => prev.filter(item => item.id !== id));
  };
  useEffect(() => {
    setCopyItems(items);
  }, [items]);

  const element = copyItems.map(({ id, name, image_url, tagline }, index) => (
    <li
      className={`${css.wrapperItem} ${
        selectedItems.includes(id) ? css.selected : ''
      }`}
      onContextMenu={e => handleItemClick(e, id)}
      onClick={e => handleDetailsClick(e, id)}
      ref={copyItems.length === index + 1 ? lastItemRef : null}
      key={id}
    >
      {selectedItems.includes(id) ? (
        <button
          className={css.btnTrash}
          type="button"
          onClick={e => handleDeleteItemClick(e, id)}
        >
          <SvgSelector id="trash" />
        </button>
      ) : null}

      <div className={css.avatar}>
        <img className={css.avatar} alt="avatar" src={image_url} />
      </div>
      <p className={css.text}>{name}</p>

      <p className={css.text}>{tagline}</p>
    </li>
  ));

  return (
    <div>
      <ul className={css.wrapperList}>{element}</ul>
    </div>
  );
};
export default RecipesBeerList;
