import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight, CirclePlay, DropletIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="overflow-hidden">
      <section className="bg-linear-to-b to-muted from-background">
        <div className="relative py-36 ">
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
            <div className="md:w-1/2">
              <div>
                <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">
                  De la nature a votre peau
                </h1>
                <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                  Découvrez notre gamme de soins naturels pour une peau saine et
                  éclatante, formulée avec des ingrédients naturels et
                  respectueux de l'environnement.
                </p>

                <div className="flex items-center gap-3">
                  <Button asChild size="lg" className="pr-4.5">
                    <Link href="/soins-visages">
                      <span className="text-nowrap">Soins visages</span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="pl-5"
                  >
                    <Link href="/huiles-vegetales">
                      <DropletIcon className="fill-primary/25 stroke-primary" />
                      <span className="text-nowrap">Huiles végétales</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-10">
                <Image
                  src="/logo_ispm.png"
                  alt="certificat"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="ml-8 perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
              <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                <Image
                  src="/protuit-image.jpeg"
                  alt="app screen"
                  width="2880"
                  height="1842"
                  className="object-bottom-right size-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
