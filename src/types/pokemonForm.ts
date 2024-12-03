import { z } from "zod";

export const pokemonTypes = [
  "Normal",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dark",
  "Dragon",
  "Steel",
  "Fairy",
] as const;

export const pokemonSchema = z.object({
  base_corpo: z.string().min(1, "Descrição do corpo é obrigatória"),
  cor_principal: z.string().min(1, "Cor principal é obrigatória"),
  cor_secundaria: z.string().min(1, "Cor secundária é obrigatória"),
  tipo_1: z.enum(pokemonTypes, {
    errorMap: () => ({ message: "Tipo 1 é obrigatório" }),
  }),
  tipo_2: z.enum(pokemonTypes).optional(),
  geracao: z
    .number()
    .nonnegative("Geração deve ser um número maior ou igual a 0"),
  peso: z.number().positive("Peso deve ser positivo"),
  altura: z.number().positive("Altura deve ser positiva"),
  detalhes_extras: z
    .string()
    .optional()
});

export type PokeForm = z.infer<typeof pokemonSchema>;

export type Attack = {
  nome: string;
  tipo: string;
  dano: number
};


export type Pokemon = {
  nome: string;
  tipo1: string;
  tipo2: string | null;
  movimento: Attack[];
  descricao: string;
  geracao: number;
  sprite: string;
  hp: number;
  hpMax: number;
  ataque: number;
  defesa: number;
  velocidade: number;
};

export type PokemonCreateForm = {
  base_corpo: string;
  cor_principal: string;
  cor_secundaria: string;
  tipo_1: string;
  tipo_2: string | null;
  geracao: number;
  peso: number;
  altura: number;
  detalhes_extras: string;
}

export type PokemonCreateResponse = {
  nome: string;
  descricao: string;
  movimento: Attack[];
  ataque: number;
  defesa: number;
  hp: number;
  sprite: string;
  velocidade: number;
}

type StatsOpponnet = {
  tipo1: string;
  tipo2: string | null;
  hp: number;
  ataque: number;
  defesa: number;
}

export type AttackIA = {
  ataques_ia: Attack[];
  stats_oponente: StatsOpponnet;

}