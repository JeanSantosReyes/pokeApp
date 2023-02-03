import './styles/PokeList.css'
import pokeClasses from "../PokeClasses"
import { PokeCell } from "./PokeCell"

export const PokeList = ({ handleOnClick }) => {
    return (
        <section className="poke-list">
            {
                pokeClasses.map(pokeClass => (
                    <PokeCell
                        key={pokeClass.id}
                        pokeClass={pokeClass}
                        handleOnClick={handleOnClick}
                    />
                ))
            }
        </section>
    )
}
