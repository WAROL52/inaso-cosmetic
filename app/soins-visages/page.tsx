import { IntegrationsSection } from "@/components/integrations-section";

export default function SoinsVisagesPage() {
  return (
    <main>
      <IntegrationsSection
        title="Huiles Végétales"
        description=""
        items={[
          {
            title: "Cosmétique naturel",
            quantity: "50ml",
            description:
              "Cette crème est formulée à partir d'ingrédients naturels qui sont le beurre de cacao et l'huile de Calophyllum.",
            image: "/produit.jpeg",
            link: "/produits/Crème hydratante, antiride et réparatrice à base de beurre de cacao et d'huile de Calophyllum",
            price: "30.000Ar",
            compositions:
              "Le beurre de cacao est riche en antioxydants comme les polyphénols, vitamine E,A,B,C et en acides gras essentiels tels que les acides stéariques, les acides oléiques, les acides linoléiques,qui aident à nourrir, à hydrater en profondeur, à atténuer les rides et à protéger la peau contre les agressions extérieurs. l'huile de Calophyllum qui est connu pour ses propriétés régénératrices, cicatrisantes et antiinflammatoires, aide à réparer la peau endommagée, à réduire les rides et à améliorer l'élascticité de la peau. Pour cela il contientdes acides gras essentiels tels que les acides oléiques, les acides linoléiques, les acides stéariques ainsi que des terpènoïdes, polyphénols, flavonoïdes et acides calophylliques et inophylliques.",
            modeConservation:
              "A conserver dans un endroit sec, un milieu à température ambiante et à l'abri de la lumière",
            modeUtilisation:
              "Il est conseiller d'utiliser une noisette de crème sur un visage propre. Appliquer le matin en massant délicatement jusqu'à absorption. La crème a une vertu antiride, hydratante et réparatrice. Après deux semaines d'utilisation de la crème régulièrement il est possible d'observer un phénomène de purge avec apparition de comédons ou de boutons, mais ne vous inquiétez pas c'est normal. L'huile de Calophyllum accélère la régénération cellulaire de votre peau, il va d'abord rendre visible les imperfections avant de les remplacer par la nouvelle peau. il se peut que vous ayez une sensation de gras sur votre visage après application de la crème, normalement cela ne dure pas longtemps mais si cela persiste c'est que vous en avez trop mis et il faudra plus de temps pour la pénétration totale de la crème. la crème est indiqué pour tout type de peau mais néanmoins peut être inadéquate pour une peau trop grasse.",
          },
        ]}
      />
    </main>
  );
}
