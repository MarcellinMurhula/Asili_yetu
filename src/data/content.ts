import type { Plant, Proverb, Tip } from '@/lib/types';

export const plants: Plant[] = [
  {
    id: 1,
    slug: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aloe vera',
    description: 'Une plante succulente connue pour son gel apaisant. Elle est utilisée depuis des siècles pour ses propriétés curatives.',
    uses: ['Brûlures légères', 'Coups de soleil', 'Irritations de la peau', 'Cicatrisation'],
    preparation: 'Appliquer directement le gel frais de la feuille coupée sur la zone affectée. Ne pas ingérer sans avis médical.',
  },
  {
    id: 2,
    slug: 'moringa',
    name: 'Moringa',
    scientificName: 'Moringa oleifera',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'moringa tree',
    description: 'Souvent appelé "l\'arbre de vie", le moringa est extrêmement nutritif et possède de multiples vertus médicinales.',
    uses: ['Malnutrition', 'Fatigue', 'Anémie', 'Renforcement du système immunitaire'],
    preparation: 'Les feuilles peuvent être consommées fraîches en salade, cuites comme des épinards, ou séchées et réduites en poudre pour être ajoutées aux sauces et boissons.',
  },
  {
    id: 3,
    slug: 'artemisia',
    name: 'Artemisia',
    scientificName: 'Artemisia annua',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'artemisia plant',
    description: 'Une plante herbacée célèbre pour son utilisation dans le traitement du paludisme. Elle a un parfum aromatique distinct.',
    uses: ['Paludisme (Malaria)', 'Fièvre', 'Inflammations'],
    preparation: 'Infusion des feuilles séchées. La posologie doit être strictement respectée et supervisée par un praticien de la santé.',
  },
  {
    id: 4,
    slug: 'gingembre',
    name: 'Gingembre',
    scientificName: 'Zingiber officinale',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ginger root',
    description: 'Un rhizome piquant et aromatique largement utilisé comme épice et pour ses puissantes propriétés anti-inflammatoires et digestives.',
    uses: ['Nausées', 'Maux de ventre', 'Toux et rhume', 'Douleurs articulaires'],
    preparation: 'Infusion du rhizome frais ou séché dans de l\'eau chaude. Peut aussi être mâché frais ou ajouté à l\'alimentation.',
  },
  {
    id: 5,
    slug: 'eucalyptus',
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus globulus',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eucalyptus leaves',
    description: 'Arbre dont les feuilles sont très riches en huile essentielle, traditionnellement utilisée pour les affections respiratoires.',
    uses: ['Congestion nasale', 'Toux', 'Bronchite', 'Désinfection des plaies'],
    preparation: 'Inhalation de la vapeur d\'une infusion de feuilles. L\'huile essentielle doit être utilisée avec précaution et diluée.',
  },
  {
    id: 6,
    slug: 'curcuma',
    name: 'Curcuma',
    scientificName: 'Curcuma longa',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'turmeric root',
    description: 'Un rhizome de couleur orange vif, connu pour son composé actif, la curcumine, qui a de puissants effets anti-inflammatoires et antioxydants.',
    uses: ['Inflammation', 'Douleurs arthritiques', 'Problèmes digestifs', 'Santé de la peau'],
    preparation: 'Utilisé en poudre dans la cuisine, ou en infusion avec du poivre noir pour améliorer son absorption.',
  },
];

export const proverbs: Proverb[] = [
  {
    id: 1,
    text: 'Celui qui cache sa maladie ne peut espérer guérir.',
    origin: 'Éthiopien',
  },
  {
    id: 2,
    text: 'La nature est le plus ancien des médecins.',
    origin: 'Congolais',
  },
  {
    id: 3,
    text: 'La mort est un remède contre toutes les maladies.',
    origin: 'Malien',
  },
  {
    id: 4,
    text: 'Une bonne santé vaut mieux que la plus grande richesse.',
    origin: 'Rwandais',
  },
];

export const tips: Tip[] = [
  {
    id: 1,
    title: 'En cas de coupure légère',
    content: 'Nettoyez soigneusement la plaie avec de l\'eau propre. Appliquez une feuille de "Herbe à coupures" (Chromolaena odorata) broyée pour aider à arrêter le saignement et à prévenir l\'infection. C\'est une astuce courante dans de nombreuses communautés.',
  },
  {
    id: 2,
    title: 'Soulager une piqûre d\'insecte',
    content: 'Pour apaiser la démangeaison et réduire le gonflement, frottez doucement la zone avec une tranche d\'oignon cru ou un peu de gel d\'Aloe Vera. Ces remèdes naturels sont souvent à portée de main.',
  },
  {
    id: 3,
    title: 'Calmer un mal de gorge débutant',
    content: 'Gargarisez-vous avec de l\'eau tiède salée. Vous pouvez aussi mâcher un petit morceau de gingembre frais ou boire une infusion de gingembre et de citron avec une cuillère de miel pour ses propriétés apaisantes et antibactériennes.',
  },
  {
    id: 4,
    title: 'Lutter contre la déshydratation',
    content: 'En cas de forte chaleur ou de maladie, il est crucial de rester hydraté. L\'eau de coco est un excellent réhydratant naturel, riche en électrolytes. Si vous n\'en avez pas, de l\'eau avec une pincée de sel et une cuillère de sucre peut aider.',
  },
];
