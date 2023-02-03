class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
        this.base_experience = data.base_experience;
        this.ability = data.abilities[0].ability.name;
        this.other = data.moves[0].move.name;
    }
}

export default Pokemon;