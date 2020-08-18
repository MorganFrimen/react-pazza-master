import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ' '}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ' '}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};
export default Categories;
