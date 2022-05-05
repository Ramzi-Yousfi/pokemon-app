import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from "./models/mock-pokemon";
import Pokemon from "./models/pokemon";

let pokemon = POKEMONS
type Props = {
    name: string
}
const Hello: FunctionComponent<{ name: string }> = ({name}) => {
    const [target, setTarget] = useState<boolean>(false)
    const toggle = () => {
        setTarget(!target)
    }
    console.log({})
    return (<>
            <button onClick={() => toggle()} className="btn btn-primary">afficher</button>
            {target && <img src={name} alt=""/>}
        </>
    )
}


const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS)
    }, [])

    return (
        <>
            <h2>{pokemons.length}</h2>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {pokemons.map(pokemon =>
                                <div className="card shadow-sm">
                                    <div className="bd-placeholder-img card-img-top" >
                                        <Hello name={pokemon.picture}/>
                                    </div>
                                    <div className="text-center">
                                        <h1>{pokemon.name}</h1>
                                    </div>

                                </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;
