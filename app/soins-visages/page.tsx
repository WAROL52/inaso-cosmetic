import { IntegrationsSection } from "@/components/integrations-section";

export default function SoinsVisagesPage() {
  return (
    <main>
      <IntegrationsSection
            title="Huiles Végétales"
            description="Découvrez notre sélection d'huiles végétales pures et naturelles, idéales pour nourrir, hydrater et revitaliser votre peau en profondeur."
            items={[
              {
                title: "Huile d'Argan",
                quantity: "100ml",
                description:
                  "Riche en vitamine E et en acides gras essentiels, l'huile d'argan est parfaite pour hydrater et protéger la peau contre le vieillissement prématuré.",
                image:"/placehold.svg",
                link: "/produits/huile-argan",
              },
              {
                title: "Huile de Jojoba",
                description:
                  "L'huile de jojoba régule la production de sébum et convient à tous les types de peau, offrant une hydratation légère sans obstruer les pores.",
                image: "/placehold.svg",
                link: "/produits/huile-jojoba",
              },
              {
                title: "Huile de Coco",
                description:
                  "L'huile de coco est connue pour ses propriétés nourrissantes et antibactériennes, idéale pour apaiser et revitaliser les peaux sèches.",
                image: "/placehold.svg",
                link: "/produits/huile-coco",
              },
              {
                title: "Huile d'Amande Douce",
                description:
                  "Douce et apaisante, l'huile d'amande douce est parfaite pour les peaux sensibles et délicates, offrant une hydratation intense et un effet calmant.",
                image:"/placehold.svg",
                link: "/produits/huile-amande-douce",
              },
              {
                title: "Huile de Rose Musquée",
                description:
                  "L'huile de rose musquée est reconnue pour ses propriétés régénérantes et cicatrisantes, idéale pour atténuer les cicatrices et rides.",
                image: (
                  "/placehold.svg"
                ),
                link: "/produits/huile-rose-musquee",
              },
              {
                title: "Huile d'Avocat",
                description:
                  "Riche en vitamines A, D et E, l'huile d'avocat nourrit en profondeur et favorise l'élasticité de la peau, parfaite pour les peaux matures.",
                image: (
                  "/placehold.svg"
                ),
                link: "/produits/huile-avocat",
              },
              {
                title: "Huile de Macadamia",
                description:
                  "L'huile de macadamia pénètre rapidement et apporte une hydratation durable, idéale pour protéger la peau des agressions extérieures.",
                image: (
                  "/placehold.svg"
                ),
                link: "/produits/huile-macadamia",
              },
              {
                title: "Huile de Noisette",
                description:
                  "L'huile de noisette est légère et non grasse, parfaite pour réguler le sébum des peaux mixtes à grasses tout en nourrissant la peau.",
                image: (
                  "/placehold.svg"
                ),
                link: "/produits/huile-noisette",
              },
              
            ]}
          />
    </main>
  )
}