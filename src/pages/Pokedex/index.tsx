import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import { configEndpoint } from '../../config';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IData } from '../../interface/pokemons';
import { getTypesAction } from '../../store/pokemon';

import s from './Pokedex.module.scss';

interface IQuery {
  limit: number
  name?: string;

}

  
interface Api {
  total: number;
  count: number;
  limit: number;
  offset: number;
  pokemons: [];
}

interface PokedexPageProps {
  data?: Api;
}


const PokedexPage: React.FC<PokedexPageProps> = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemons.types.data);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12
  });

  const debounceValue = useDebounce(searchValue, 500);

  const {
    data,
    isLoading,
    isError
  } = useData<IData>(configEndpoint.getPokemons, query, [debounceValue]);

  useEffect(() => {
    dispatch(getTypesAction())
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }))
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={s.root}>
        <Heading size='s' className={s.title}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div>
          {!isLoading && data && data.pokemons.map((item) => (
            <PokemonCard
                key={item.id}
                name={item.name}
                attack={item.stats.attack}
                defense={item.stats.defense}
                img={item.img}
                types={item.types}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
