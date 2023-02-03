import 'bulma/css/bulma.css';
import { useState } from 'react';
import { PokeCharacter } from './components/PokeCharacter';
import { PokeList } from './components/PokeList';
import { PokeTitle } from './components/PokeTitle';
import { getPokemon } from './helpers/PokeApi';
import Pokemon from './Pokemon';

export const PokeListApp = () => {

    const [pokemon, setPokemon] = useState({});

    const handleOnClick = (id) => {
        getPokemon(id).then(res => {
            const poke = new Pokemon(res);
            setPokemon(poke);
        })
    }

    return (
        <div className="App">
            <div className='columns'>
                <div className="column">
                    <PokeTitle />
                    <PokeCharacter pokemon={pokemon} />
                </div>
                <div className="column">
                    <PokeList handleOnClick={handleOnClick} />
                </div>
            </div>
        </div>
    )
}
