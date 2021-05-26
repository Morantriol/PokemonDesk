import React from 'react';

export interface IPokemonProps {
    id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({id}) => {
    return (
        <div>
            This pokemon equals id {id}
        </div>
    )
}

export default Pokemon;
