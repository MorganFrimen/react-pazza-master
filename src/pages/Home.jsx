import React from 'react';
import { Categories, Sort, PizzaBlock } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/action/filtrs';

const categoriesName = ['Мясные', 'Вегитарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'Популярности', type: 'popular' },
  { name: 'Цене', type: 'price' },
  { name: 'Алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoriesName} />
        <Sort onClickItem={(name) => name} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
