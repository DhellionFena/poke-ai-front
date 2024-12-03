import { Attack, AttackIA } from "@/types/pokemonForm";
import { httpClient } from "../client";


export const GetAttackIA = async (form: AttackIA) => {
    const ataqueEscolhido = await httpClient<Attack>('/batalha/ia-escolhe', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });
    return ataqueEscolhido
}