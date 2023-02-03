import './styles/Show.css'
import 'bulma/css/bulma.css';
import '../../node_modules/nes.css/css/nes.css';

export const PokeCharacter = ({ pokemon }) => {

    const { id, name, sprite, type, base_experience, ability, other } = pokemon;

    return (
        <>
            <div className="column is-centered mostrar">
                <br />
                <div className="nes-container with-title is-centered border">
                    <span className="title pixel">Properties</span>
                    <div className="foto"><button className='nes-btn'><img src={sprite} width="90" height="90" alt={name} /></button></div>
                    <div className=" pixel"><br />
                        <ul className="padi">
                            <li className='data-name'><b className="color">Id:</b>{id}</li>
                            <li className='data-base_experience'><b className="color">Pokemon Name:</b>{name}</li>
                            <li className='data-char'><b className="color">Type:</b>{type}</li>
                            <li className='data-base_experience'><b className="color">Base experience:</b>{base_experience}</li>
                            <li className='data-base_experience'><b className="color">Ability:</b>{ability}</li>
                            <li className='data-base_experience'><b className="color">Move:</b>{other}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
