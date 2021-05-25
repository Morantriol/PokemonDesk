import React from 'react';
import PokemonCard, { pokemons } from '../../components/PokemonCard';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = () => {
  return (
    <div>
      {pokemons.map(({ id, name, stats, img, types }) => (
        <PokemonCard
          key={id}
          name={name}
          attack={stats.attack}
          defense={stats.defense}
          img={img}
          types={types}
        />
      ))}
    </div>
  );
};

export default EmptyPage;
