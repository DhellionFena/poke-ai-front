"use client"
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "@/components/ui/card";
type Equipe = {
    imagem: string,
    nome: string
}
const arrayEquipe: Equipe[] = [
    { imagem: "https://avatars.githubusercontent.com/u/42191765?v=4", nome: 'Antônio César' },
    { imagem: "https://avatars.githubusercontent.com/u/82074537?v=4", nome: 'Pedro Barros' },
    { imagem: "https://avatars.githubusercontent.com/u/82469173?v=4", nome: 'Rafael Luna' },
    { imagem: "https://avatars.githubusercontent.com/u/60943112?v=4", nome: 'Alexandre Magno' },
    { imagem: "https://avatars.githubusercontent.com/u/64623273?v=4", nome: 'Felipe Ribeiro' },
    { imagem: "https://avatars.githubusercontent.com/u/70353676?v=4", nome: 'Daniel Marinho' },
]
export default function AboutEquip(){
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
      )
    return (
        <main className="flex h-full w-full flex-grow flex-col items-center justify-evenly px-5">
            <h3 className="text-3xl text-black hover:border-red-600 hover:text-red-600">A equipe</h3>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    loop: true
                }}
            >
                <CarouselContent className="flex w-1/4 flex-row justify-around items-center">
                    {
                        arrayEquipe.map((value, index) => (
                            <CarouselItem key={index}>
                                <Card className="h-full rounded border-4 border-black bg-white px-8 py-8 text-center text-black hover:border-red-600 hover:text-red-600">
                                    <Image src={value.imagem} alt={value.nome} width={500} height={500} />
                                    <span className="w-ful text-center">{value.nome}</span>
                                </Card>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

            </Carousel>
        </main>
    );
}