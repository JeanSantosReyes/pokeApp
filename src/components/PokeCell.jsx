// import sprites from '../sprites.png';
import './styles/Cells.css';
import '../../node_modules/nes.css/css/nes.css';

export const PokeCell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(../../sprites.png)`, backgroundPosition };
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
