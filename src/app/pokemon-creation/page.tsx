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
import { CreatePokemon } from "@/services/API/Pokemon";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import LoadingPokeBola from "@/components/Loading";

export default function PokemonForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const player = searchParams.get('pvp');
  const playerVsPc = searchParams.get('pvpc');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PokeForm>({
    resolver: zodResolver(pokemonSchema),
  });

  const onSubmit = async (data: PokeForm) => {
    setLoading(true);
    try {
      const pokemon = await CreatePokemon(data);
      console.log(pokemon)
      localStorage.setItem(`PLAYER${player || playerVsPc}`, JSON.stringify(pokemon));
      let mode: string = "";
      if (player && !playerVsPc){
        mode = "PVP";
      }else{
        mode = "PVPC";
        
      }
      localStorage.setItem("MODE", mode);
      
      
    }catch(error){
      console.error(error);
    }finally{
      setLoading(false);
    }
    if(player && player === '1'){
      redirect('/pokemon-creation?pvp=2');
    }else if(playerVsPc && playerVsPc === "1"){
      redirect('/pokemon-creation?pvpc=2');
    }
    else if((player && player === '2') || (playerVsPc && playerVsPc === '2')){
      redirect('/battle');
    }
  };
  if(loading){
    return <LoadingPokeBola />
  }
  return (
    <main className="flex w-full flex-grow flex-col items-center justify-center pb-1">
      
      <h1 className="py-5 text-center text-2xl text-black">
        Vamos criar o Pokémon do Jogador {player || playerVsPc}!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-4/5 flex-col"
        method="POST"
      >
        <div className="flex-grow">
          <Label htmlFor="base_corpo">Base do Corpo</Label>
          <Input id="base_corpo" {...register("base_corpo")} />
          {errors.base_corpo && (
            <p className="text-xs text-red-500">{errors.base_corpo.message}</p>
          )}
        </div>
        <div className="grid gap-4 pt-3 md:grid-cols-2">
          <div>
            <Label htmlFor="cor_principal">Cor Principal</Label>
            <Input id="cor_principal" {...register("cor_principal")} />
            {errors.cor_principal && (
              <p className="text-xs text-red-500">
                {errors.cor_principal.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="cor_secundaria">Cor Secundária</Label>
            <Input id="cor_secundaria" {...register("cor_secundaria")} />
            {errors.cor_secundaria && (
              <p className="text-xs text-red-500">
                {errors.cor_secundaria.message}
              </p>
            )}
          </div>
          <div>
            <Label>Tipo 1</Label>
            <Select
              onValueChange={(value) =>
                setValue("tipo_1", value as (typeof pokemonTypes)[number])
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
            {errors.tipo_1 && (
              <p className="text-xs text-red-500">{errors.tipo_1.message}</p>
            )}
          </div>
          <div>
            <Label>
              Tipo 2 <span className="text-xs">{"(Opcional)"}</span>
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("tipo_2", value as (typeof pokemonTypes)[number])
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
          <div>
            <Label htmlFor="geracao">Geração</Label>
            <Input
              id="geracao"
              type="number"
              {...register("geracao", { valueAsNumber: true })}
            />
            {errors.geracao && (
              <p className="text-xs text-red-500">{errors.geracao.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col pt-3">
          <Label htmlFor="detalhes_extras">Detalhes Extras</Label>
          <textarea
            id="detalhes_extras"
            {...register("detalhes_extras")}
            className="input mt-2 h-24 resize-none"
          ></textarea>
          {errors.detalhes_extras && (
            <p className="text-xs text-red-500">
              {errors.detalhes_extras.message}
            </p>
          )}
        </div>
        <Button type="submit" className="mt-4 w-full hover:bg-red-700">
          Criar Pokémon
        </Button>
      </form>

    </main>
  );
}
