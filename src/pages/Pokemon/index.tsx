import React from 'react';
import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemons';

export interface IPokemonProps {
    id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({id}) => {
    const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });

    if (isLoading) {
        return (<div>Loading...</div>);
    }

    return (
        <div>
            This pokemon id equals {data?.name}!
        </div>
    )
}

export default Pokemon;
