"use client"
import PokemonInBattle from "@/components/PokemonInBattle";
import { AttackIA, Pokemon } from "@/types/pokemonForm";
import { useEffect, useState } from "react";
import { BattleService } from "@/services/Battle/BattleService";
import { redirect } from "next/navigation";
import { GetAttackIA } from "@/services/API/Battle";

export default function Home() {
  const [player1, setPlayer1] = useState<Pokemon>({
    ataque: 0,
    defesa: 0,
    descricao: "",
    geracao: 0,
    hp: 0,
    hpMax: 0,
    movimento: [],
    nome: "",
    sprite: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    tipo1: "",
    tipo2: null,
    velocidade: 0
  });
  const [player2, setPlayer2] = useState<Pokemon>({
    ataque: 0,
    defesa: 0,
    descricao: "",
    geracao: 0,
    hp: 0,
    hpMax: 0,
    movimento: [],
    nome: "",
    sprite: "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    tipo1: "",
    tipo2: null,
    velocidade: 0
  });
  const [ataquePlayer1, setAtaquePlayer1] = useState<string | null>(null);
  const [ataquePlayer2, setAtaquePlayer2] = useState<string | null>(null);
  const [batalha, setBatalhaService] = useState<BattleService>()
  const [mode, setMode] = useState<string | null>(null);
  const [vencedor, setVencedor] = useState<string | null>(null);
  const [podeAcabarAPartida, setPodeAcabarAPartida] = useState<boolean>(false);
  useEffect(() => {
    const mode = localStorage.getItem("MODE");
    if(!mode){
      throw new Error("MODO não identificado");
    }
    const p1 = localStorage.getItem("PLAYER1");
    const p2 = localStorage.getItem("PLAYER2");
    if(p1 && p2){
      setPlayer1(JSON.parse(p1) as Pokemon);
      setPlayer2(JSON.parse(p2) as Pokemon);
      setBatalhaService(new BattleService(JSON.parse(p1) as Pokemon, JSON.parse(p2) as Pokemon))
    }else {
      if(mode === "PVP"){
        redirect('/pokemon-creation?pvp=1'); 
      }else{
        redirect('/pokemon-creation?pvpc=1'); 
      }
      
    }

    setMode(mode);
  }, []);

  useEffect(() => {
    const EfetuarBatalha = async () => {
      if(ataquePlayer1 && ataquePlayer2 && batalha && mode === "PVP"){
        const log = batalha?.batalha(ataquePlayer1, ataquePlayer2);
        setPlayer1(batalha.getPokemonPlayer1())
        setPlayer2(batalha.getPokemonPlayer2())
        setAtaquePlayer1(null);
        setAtaquePlayer2(null);
        if(log.vencedor === "Player1"){
          setVencedor("PLAYER1");
        }else if(log.vencedor === "Player2"){
          setVencedor("PLAYER2");
        }
        
      }else if (ataquePlayer1 && batalha && mode === "PVPC"){
        const formAttackIA: AttackIA = {
          ataques_ia: player2.movimento,
          stats_oponente: {
            ataque: batalha.getPokemonPlayer1().ataque,
            defesa: batalha.getPokemonPlayer1().defesa,
            hp: batalha.getPokemonPlayer1().hp,
            tipo1: batalha.getPokemonPlayer1().tipo1,
            tipo2: batalha.getPokemonPlayer1().tipo2
          }
          
        };
        const ataqueIA = await GetAttackIA(formAttackIA);
        console.log('ataqueIA', ataqueIA);
        const log = batalha.batalha(ataquePlayer1, ataqueIA.nome);
        setPlayer1(batalha.getPokemonPlayer1())
        setPlayer2(batalha.getPokemonPlayer2())
        setAtaquePlayer1(null);
        setAtaquePlayer2(null);
        if(log.vencedor === "Player1"){
          setVencedor("PLAYER1");
        }else if(log.vencedor === "Player2"){
          setVencedor("PLAYER2");
        }
      }
    }
    EfetuarBatalha();

  }, [ataquePlayer1, ataquePlayer2])
  useEffect(() => {
    if(vencedor && podeAcabarAPartida){
      localStorage.setItem("VENCEDOR", vencedor);
      redirect('/end-game')
    }
  }, [vencedor, podeAcabarAPartida])

  

  return (
    <div className="flex flex-col xl:flex-row items-center justify-evenly min-h-full bg-white">
      <PokemonInBattle 
        podeAcabarAPartida={podeAcabarAPartida}
        setPodeAcabarAPartida={setPodeAcabarAPartida}
        mode={"PVP"} 
        ataqueEscolhido={ataquePlayer1} 
        escolherAtaque={setAtaquePlayer1} 
        pokemon={player1} />
      <PokemonInBattle 
        podeAcabarAPartida={podeAcabarAPartida}
        setPodeAcabarAPartida={setPodeAcabarAPartida} 
        mode={mode} 
        ataqueEscolhido={ataquePlayer2} 
        escolherAtaque={setAtaquePlayer2} 
        pokemon={player2} />
    </div>
  );
}
