export const getPokemon = async (id) => {
    const resp = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`, {
        withCredentials: true,
        crossorigin: true
    });
    const data = await resp.json();
    return data;
}