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
  nome: z.string().min(1, "Nome é obrigatório"),
  tipo1: z.enum(pokemonTypes, {
    errorMap: () => ({ message: "Tipo 1 é obrigatório" }),
  }),
  tipo2: z.enum(pokemonTypes).optional(),
  altura: z.number().positive("Altura deve ser positiva"),
  peso: z.number().positive("Peso deve ser positivo"),
  sexo: z.enum(["masc", "fem"]).refine((val) => !!val, {
    message: "Sexo é obrigatório",
  }),
  descricao: z.string().min(10, "Descrição deve ter no mínimo 10 caracteres"),
  regiao: z.string().min(1, "Região é obrigatória"),
});

export type PokeForm = z.infer<typeof pokemonSchema>;
