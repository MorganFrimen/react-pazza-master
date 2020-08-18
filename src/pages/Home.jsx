import React from 'react';
import { Categories, Sort, PizzaBlock, MyLoader } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/action/filtrs';

import { fetchPizzas } from '../redux/action/pizzas';

const categoriesName = ['Мясные', 'Вегитарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'Популярности', type: 'popular' },
  { name: 'Цене', type: 'price' },
  { name: 'Алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filtrs }) => filtrs);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch, category]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortBy = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesName}
        />
        <Sort
          activeSortType={sortBy}
          onClickItem={(name) => name}
          items={sortItems}
          onClickSortBy={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <MyLoader key={index} />)}
      </div>
    </div>
  );
}

export default Home;
