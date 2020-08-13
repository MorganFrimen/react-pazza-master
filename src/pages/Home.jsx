import React from 'react';
import { Categories, Sort, PizzaBlock, MyLoader } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/action/filtrs';

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

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

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
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(10).fill(<MyLoader />)}
      </div>
    </div>
  );
}

export default Home;
