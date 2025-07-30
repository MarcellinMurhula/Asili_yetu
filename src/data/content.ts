import type { Plant, Proverb, Tip } from '@/lib/types';

export const plants: Plant[] = [
  {
    id: 1,
    slug: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBbglfoxuwEdzDQB_Q8LIylpbV0SdNUXZcTXhxF_lktGwevLfN0V7Diw&usqp=CAE&s',
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
    image: 'data:image/jpeg;base64,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',
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
