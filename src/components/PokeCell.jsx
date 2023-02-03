// import sprites from '../sprites.png';
import sprites from '../sprites.png'
import './styles/Cells.css';
import '../../node_modules/nes.css/css/nes.css';

export const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
    return (
        <>
            <button
                className='poke-cell nes-btn'
                style={style}
                onClick={() => handleOnClick(id)}
            />
            <br /><br />
        </>
    )
}
