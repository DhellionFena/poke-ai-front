import { Attack, Pokemon, pokemonTypes } from "@/types/pokemonForm";

type Vencedor = 'Player1' | 'Player2' | 'Nenhum';

export interface IResponseBatalha {
    logs: string[];
    vencedor: Vencedor;
    pokemonVencedor: Pokemon | null;

}

export class BattleService {
    private pokemon1: Pokemon;
    private pokemon2: Pokemon;
    private typeEffectivenessMatrix: number[][];
    private logsBatalha: string[];
    private vencedor: Vencedor;
    constructor(pokemon1: Pokemon, pokemon2: Pokemon){
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.typeEffectivenessMatrix = [
            // Normal, Fire, Water, Grass, Electric, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1], // Normal
            [1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1], // Fire
            [1, 2, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1], // Water
            [1, 0.5, 2, 0.5, 1, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1], // Grass
            [1, 1, 1, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 0.5, 1], // Electric
            [1, 0.5, 0.5, 2, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 0.5, 1], // Ice
            [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5], // Fighting
            [1, 1, 1, 2, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2], // Poison
            [1, 2, 1, 0.5, 2, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1], // Ground
            [1, 1, 1, 2, 0.5, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1], // Flying
            [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1], // Psychic
            [1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5], // Bug
            [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1], // Rock
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1], // Ghost
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0], // Dragon
            [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5], // Dark
            [1, 0.5, 0.5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2], // Steel
            [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]  // Fairy
          ];
          this.logsBatalha = [];
          this.vencedor = 'Nenhum';

    }
    getPokemonPlayer1(): Pokemon{
        return this.pokemon1;
    }

    getPokemonPlayer2(): Pokemon{
        return this.pokemon2;
    }
    getLogs(): string[] {
        return this.logsBatalha;
    }

    batalha(ataquePokemon1: string, ataquePokemon2: string): IResponseBatalha {
        const ataquePlayer1: Attack | undefined = this.pokemon1.movimento.find(p => p.nome === ataquePokemon1);
        const ataquePlayer2: Attack | undefined = this.pokemon2.movimento.find(p => p.nome === ataquePokemon2);
        if (ataquePlayer1 === undefined || ataquePlayer2 === undefined){
            throw new Error("Ataque não identificado");
        }
        if(this.pokemon1.velocidade >= this.pokemon2.velocidade){
            const log1 = this.pokemon1Ataca(ataquePlayer1);
            this.logsBatalha.push(log1)
            if(this.vencedor === 'Nenhum'){
                const log2 = this.pokemon2Ataca(ataquePlayer2);
                this.logsBatalha.push(log2);
            }
            
        }else{
            const log1 = this.pokemon2Ataca(ataquePlayer2);
            this.logsBatalha.push(log1)
            if(this.vencedor === 'Nenhum'){
                const log2 = this.pokemon1Ataca(ataquePlayer1);
                this.logsBatalha.push(log2);
            }
            
        }
        let pokemonVencedor: Pokemon | null = null;
        if(this.vencedor === 'Player1'){
            pokemonVencedor = this.pokemon1;
        }else if(this.vencedor === 'Player2'){
            pokemonVencedor = this.pokemon2;
        }
        const responseBattle: IResponseBatalha = {
            logs: this.logsBatalha,
            vencedor: this.vencedor,
            pokemonVencedor
        }
        return responseBattle;


    }

    private saberEfetividade(effectiveness: number): string {
        if(effectiveness >= 2){
            return "super-efetivo";
        }else if(effectiveness == 1){
            return "um ataque normal"
        }else if (effectiveness == 0){
            return "não teve efeito"
        }else{
            return "não muito efetivo"
        }
    }

    private pokemon1Ataca(ataquePlayer1: Attack): string {
        const effectivenessType1 = this.typeEffectivenessMatrix[this.getIndexType(ataquePlayer1.tipo)][this.getIndexType(this.pokemon2.tipo1)];
        let effectivenessType2 = 1;
        if(this.pokemon2.tipo2){
            effectivenessType2 = this.typeEffectivenessMatrix[this.getIndexType(ataquePlayer1.tipo)][this.getIndexType(this.pokemon2.tipo2)];
        }
        const effectiveness = effectivenessType1 * effectivenessType2;
        const baseDamage = Math.round(this.pokemon1.ataque * (ataquePlayer1.dano / 100));
        const effectivenessDamage = effectiveness * baseDamage;
        const reduceDamage = Math.round((this.pokemon2.defesa / 300) * effectivenessDamage);
        const totalDamage = effectivenessDamage - reduceDamage;
        this.pokemon2.hp -= totalDamage;
        if(this.pokemon2.hp <= 0) {
            this.vencedor = 'Player1';
        }else{
            this.vencedor = 'Nenhum';
        }
        return `O pokemon ${this.pokemon1.nome} atacou e deu um total de ${totalDamage} de dano, isso foi ${this.saberEfetividade(effectiveness)}`;

    }
    private pokemon2Ataca(ataquePlayer2: Attack): string {
        const effectivenessType1 = this.typeEffectivenessMatrix[this.getIndexType(ataquePlayer2.tipo)][this.getIndexType(this.pokemon1.tipo1)];
        let effectivenessType2 = 1;
        if(this.pokemon1.tipo2){
            effectivenessType2 = this.typeEffectivenessMatrix[this.getIndexType(ataquePlayer2.tipo)][this.getIndexType(this.pokemon1.tipo2)];
        }
        const effectiveness = effectivenessType1 * effectivenessType2;
        const baseDamage = Math.round(this.pokemon2.ataque * (ataquePlayer2.dano / 100));
        const effectivenessDamage = effectiveness * baseDamage;
        const reduceDamage = Math.round((this.pokemon1.defesa / 300) * effectivenessDamage);
        const totalDamage = effectivenessDamage - reduceDamage;
        this.pokemon1.hp -= totalDamage;
        if(this.pokemon1.hp <= 0) {
            this.vencedor = 'Player2';
        }else{
            this.vencedor = 'Nenhum';
        }
        return `O pokemon ${this.pokemon2.nome} atacou e deu um total de ${totalDamage} de dano, isso foi ${this.saberEfetividade(effectiveness)}`;

    }

    private getIndexType(type: string): number{
        let index = pokemonTypes.findIndex(t => t === type);
        if(index === -1){
            throw new Error("Tipo não identificado");
        }
        return index;
    }

    
    
}