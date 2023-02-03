import './styles/Show.css';
import 'bulma/css/bulma.css';
import '../../node_modules/nes.css/css/nes.css';

export const PokeTitle = () => {
    return (
        <>
            <center>
                <div className="fondo pad">
                    <div className="nes-container with-title">
                        <p className="title welcome">Welcome to</p>
                        <span className="titulo">The PokeList</span><br />
                        <span className="credito">By: <b>Jean Santos</b></span><br />
                    </div>
                </div>
            </center>
        </>
    )
}
