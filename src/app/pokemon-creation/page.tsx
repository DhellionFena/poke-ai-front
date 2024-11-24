"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PokeForm, pokemonSchema, pokemonTypes } from "@/types/pokemonForm";

export default function PokemonForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PokeForm>({
    resolver: zodResolver(pokemonSchema),
  });

  const onSubmit = (data: PokeForm) => {
    console.log("Dados do Pokémon:", data);
  };

  return (
    <main className="flex w-full flex-grow flex-col items-center justify-center pb-1">
      <h1 className="py-5 text-center text-2xl text-black">
        Vamos criar o Pokémon do Jogador 1!
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-4/5 flex-col">
        <div className="flex-grow">
          <Label htmlFor="nome">Insira o nome do Pokémon</Label>
          <Input id="nome" {...register("nome")} />
          {errors.nome && (
            <p className="text-xs text-red-500">{errors.nome.message}</p>
          )}
        </div>
        <div className="grid gap-4 pt-3 md:grid-cols-2">
          <div className="mr-2">
            <Label>Tipo 1</Label>
            <Select
              onValueChange={(value) =>
                setValue("tipo1", value as (typeof pokemonTypes)[number])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o tipo 1" />
              </SelectTrigger>
              <SelectContent>
                {pokemonTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.tipo1 && (
              <p className="text-xs text-red-500">{errors.tipo1.message}</p>
            )}
          </div>

          <div className="w-full">
            <Label>
              Tipo 2 <span className="text-xs">{"(Opcional)"}</span>
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("tipo2", value as (typeof pokemonTypes)[number])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o tipo 2" />
              </SelectTrigger>
              <SelectContent>
                {pokemonTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="altura">
              Altura <span className="text-xs">{"(em cm)"}</span>
            </Label>
            <Input
              id="altura"
              type="number"
              {...register("altura", { valueAsNumber: true })}
            />
            {errors.altura && (
              <p className="text-xs text-red-500">{errors.altura.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="peso">
              Peso <span className="text-xs">{"(em kg)"}</span>
            </Label>
            <Input
              id="peso"
              type="number"
              {...register("peso", { valueAsNumber: true })}
            />
            {errors.peso && (
              <p className="text-xs text-red-500">{errors.peso.message}</p>
            )}
          </div>
          <div className="w-full">
            <Label>Sexo</Label>
            <Select
              onValueChange={(value) =>
                setValue("sexo", value as "masc" | "fem")
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masc">Macho</SelectItem>
                <SelectItem value="fem">Fêmea</SelectItem>
              </SelectContent>
            </Select>
            {errors.sexo && (
              <p className="text-xs text-red-500">{errors.sexo.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="regiao">Região</Label>
            <Input id="regiao" {...register("regiao")} />
            {errors.regiao && (
              <p className="text-xs text-red-500">{errors.regiao.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col pt-3">
          <Label htmlFor="descricao">Descrição</Label>
          <textarea
            id="descricao"
            {...register("descricao")}
            className="input mt-2 h-24 resize-none"
          ></textarea>
          {errors.descricao && (
            <p className="text-xs text-red-500">{errors.descricao.message}</p>
          )}
        </div>

        <Button type="submit" className="mt-4 w-full hover:bg-red-700">
          Criar Pokémon
        </Button>
      </form>
    </main>
  );
}
