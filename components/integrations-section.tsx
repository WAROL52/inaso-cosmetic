import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, HandCoinsIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
export type IntegrationsSectionProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: Array<{
    price?: string;
    quantity?: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    compositions?: string;
    modeUtilisation?: string;
    modeConservation?: string;
  }>;
};

export function IntegrationsSection(props: IntegrationsSectionProps) {
  const { title, description, items } = props;
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto container px-6 ">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-6">{description}</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items?.map((item) => (
              <IntegrationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  price,
  image,
  quantity,
  compositions,
  modeUtilisation,
  modeConservation,
  link = "/placehold.svg",
}: {
  title: string;
  description: string;
  link?: string;
  price?: string;
  image?: string;
  compositions?: string;
  modeUtilisation?: string;
  modeConservation?: string;
  quantity?: string;
}) => {
  return (
    <MagicCard className="p-0.5 rounded-xl ">
      <Card className="p-0">
        <div className="relative ">
          <div className="w-full rounded-md ">
            <img src={image} alt={title} className="rounded-lg size-full" />
          </div>

          <div className="space-y-2  p-4">
            <h3 className="text-base font-medium flex justify-between">
              {title}{" "}
              <div className="space-x-2">
                <span className="text-muted-foreground flex gap-1">
                  {" "}
                  <HandCoinsIcon /> {price || "N/A"}
                </span>
              </div>
            </h3>
            <Badge variant="outline" className="min-w-16">
              {quantity || "0g"}
            </Badge>
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {description}
            </p>
          </div>

          <div className="flex gap-3 border-t border-dashed py-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-1 mx-auto pr-2 w-[50%] border shadow-accent hover:shadow"
                >
                  Learn More
                  <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                </Button>
              </SheetTrigger>
              <SheetContent className="!max-w-full md:!w-[40%]">
                <SheetHeader>
                  <SheetTitle>{title}</SheetTitle>
                  <SheetDescription>
                    <AspectRatio ratio={21 / 9}>
                      <Image
                        src={image || ""}
                        alt={title}
                        className="rounded-md object-cover"
                        fill
                      />
                    </AspectRatio>
                    <div className="flex justify-between mt-3 px-2">
                      <div className="space-x-2">
                        <span className="text-muted-foreground flex gap-1">
                          <HandCoinsIcon /> {price || "N/A"}
                        </span>
                      </div>
                      <Badge variant="outline" className="min-w-16">
                        {quantity || "0g"}
                      </Badge>
                    </div>
                    <div className="mt-4">{description}</div>
                  </SheetDescription>
                </SheetHeader>
                <div className="px-4 overflow-auto h-auto w-full text-justify">
                  <Accordion type="multiple">
                    {compositions && (
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Compositions</AccordionTrigger>
                        <AccordionContent>{compositions}</AccordionContent>
                      </AccordionItem>
                    )}
                    {modeUtilisation && (
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Mode d'utilisation</AccordionTrigger>
                        <AccordionContent>{modeUtilisation}</AccordionContent>
                      </AccordionItem>
                    )}
                    {modeConservation && (
                      <AccordionItem value="item-4">
                        <AccordionTrigger>
                          Mode de conservation
                        </AccordionTrigger>
                        <AccordionContent>{modeConservation}</AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Card>
    </MagicCard>
  );
};
