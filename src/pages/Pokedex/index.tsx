import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IData } from '../../interface/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
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
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debounceValue = useDebounce(searchValue, 500);

  const {
    data,
    isLoading,
    isError
  } = useData<IData>('getPokemons', query, [debounceValue]);

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
