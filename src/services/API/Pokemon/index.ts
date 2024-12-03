import { Pokemon, PokeForm, PokemonCreateResponse } from "@/types/pokemonForm";
import { httpClient } from "../client";


export const CreatePokemon = async (form: PokeForm): Promise<Pokemon> => {
    const pokemonCriado = await httpClient<PokemonCreateResponse>('/pokemon/gerar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });
    const pokemon: Pokemon = {
        nome: pokemonCriado.nome,
        descricao: pokemonCriado.descricao,
        ataque: pokemonCriado.ataque,
        defesa: pokemonCriado.defesa,
        hp: pokemonCriado.hp,
        geracao: form.geracao,
        movimento: pokemonCriado.movimento,
        sprite: pokemonCriado.sprite,
        velocidade: pokemonCriado.velocidade,
        tipo1: form.tipo_1,
        tipo2: form.tipo_2
    }
    return pokemon;
}