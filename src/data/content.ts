import type { Plant, Proverb, Tip } from '@/lib/types';

export const plants: Plant[] = [
  {
    id: 1,
    slug: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBbglfoxuwEdzDQB_Q8LIylpbV0SdNUXZcTXhxF_lktGwevLfN0V7Diw&usqp=CAE&s',
    dataAiHint: 'aloe vera',
    description:
      'L\'aloe vera est une plante succulente connue pour ses propriétés apaisantes et hydratantes. Son gel est largement utilisé en cosmétique et en médecine pour traiter les brûlures, les irritations cutanées et favoriser la cicatrisation.',
    uses: ['Brûlures', 'Coups de soleil', 'Piq-ûres d\'insectes', 'Cicatrisation'],
    preparation:
      'Extraire le gel frais de la feuille et l\'appliquer directement sur la zone affectée. Peut être consommé en jus pour ses bienfaits internes.',
  },
  {
    id: 2,
    slug: 'moringa',
    name: 'Moringa',
    scientificName: 'Moringa oleifera',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDG98gjta3bTO9JkjkxhcQph1cLyKPpuO018LdmlBATn4AgrWdmhtOcE&usqp=CAE&s',
    dataAiHint: 'moringa leaves',
    description:
      'Le moringa est souvent appelé "l\'arbre de vie" en raison de sa richesse nutritionnelle. Ses feuilles, ses graines et ses racines sont utilisées pour leurs multiples vertus médicinales, notamment pour lutter contre la malnutrition et renforcer le système immunitaire.',
    uses: ['Malnutrition', 'Anémie', 'Fatigue', 'Défenses immunitaires'],
    preparation: 'Les feuilles peuvent être consommées fraîches en salade, cuites comme des épinards, ou séchées et réduites en poudre. Les graines peuvent être pressées pour obtenir de l\'huile.',
  },
  {
    id: 3,
    slug: 'artemisia',
    name: 'Artemisia',
    scientificName: 'Artemisia annua',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKYDlRGggLaWd5JaoghEp0UCk1_64JPWmu86BpAlH2mSjqRlCeP5fiGs&usqp=CAE&s',
    dataAiHint: 'artemisia plant',
    description:
      'L\'artemisia est une plante reconnue mondialement pour ses propriétés antipaludiques, grâce à l\'artémisinine qu\'elle contient. Elle est également utilisée pour traiter la fièvre et diverses infections.',
    uses: ['Paludisme', 'Fièvre', 'Infections', 'Troubles digestifs'],
    preparation: 'Principalement utilisée en infusion. Faire infuser les feuilles séchées dans de l\'eau chaude pendant 10 à 15 minutes. Ne pas faire bouillir pour préserver les principes actifs.',
  },
  {
    id: 4,
    slug: 'gingembre',
    name: 'Gingembre',
    scientificName: 'Zingiber officinale',
    image: 'https://www.alexetalex.com/ca/wp-content/uploads/2020/01/123044874_s.jpg',
    dataAiHint: 'ginger root',
    description:
      'Le rhizome de gingembre est un puissant anti-inflammatoire et anti-nauséeux. Il est utilisé depuis des millénaires pour traiter les troubles digestifs, les rhumes et les douleurs articulaires.',
    uses: ['Nausées', 'Maux de ventre', 'Rhume', 'Grippe', 'Douleurs articulaires'],
    preparation: 'Peut être consommé frais, râpé, en poudre ou en infusion. Pour une infusion, faire bouillir des tranches de gingembre frais dans de l\'eau pendant 10 minutes.',
  },
  {
    id: 5,
    slug: 'eucalyptus',
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus globulus',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntrXmvIUYobkrmaPlpl4uTkHSQczrHcuyhQ&s',
    dataAiHint: 'eucalyptus leaves',
    description: 'Les feuilles d\'eucalyptus sont principalement utilisées pour leurs propriétés décongestionnantes et antiseptiques des voies respiratoires. L\'huile essentielle est très populaire en aromathérapie.',
    uses: ['Toux', 'Rhume', 'Bronchite', 'Sinusite', 'Maux de gorge'],
    preparation: 'En inhalation, verser quelques gouttes d\'huile essentielle dans un bol d\'eau chaude. En infusion, utiliser les feuilles séchées. Ne pas ingérer l\'huile essentielle pure.'
  },
  {
    id: 6,
    slug: 'curcuma',
    name: 'Curcuma',
    scientificName: 'Curcuma longa',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd76uvLdvVRX_YJfINmCkhJs41IjfbW7sig&s',
    dataAiHint: 'turmeric root',
    description: 'Le curcuma est une épice aux puissantes propriétés anti-inflammatoires et antioxydantes, principalement dues à la curcumine. Il est utilisé pour soulager les douleurs articulaires et améliorer la digestion.',
    uses: ['Arthrite', 'Inflammation', 'Troubles digestifs', 'Antioxydant'],
    preparation: 'Utilisé en poudre dans la cuisine, ou en infusion. Pour une meilleure absorption, consommer avec du poivre noir.',
  },
];

export const proverbs: Proverb[] = [
  {
    id: 1,
    text: 'Celui qui a la santé est riche et ne le sait pas.',
    origin: 'africain',
  },
  {
    id: 2,
    text: 'La nature guérit, le médecin soigne.',
    origin: 'africain',
  },
  {
    id: 3,
    text: 'La patience est un arbre dont la racine est amère, mais dont les fruits sont très doux.',
    origin: 'congolais',
  },
];

export const tips: Tip[] = [
  {
    id: 1,
    title: 'Contre le mal de tête',
    content: 'Appliquez des feuilles de menthe poivrée fraîches et écrasées sur les tempes. L\'effet rafraîchissant du menthol peut aider à soulager la tension et la douleur.',
  },
  {
    id: 2,
    title: 'Pour apaiser une piqûre d\'insecte',
    content: 'Frottez la zone affectée avec une tranche d\'oignon cru ou une feuille de plantain fraîche. Leurs propriétés anti-inflammatoires réduiront les démangeaisons et l\'enflure.',
  },
  {
    id: 3,
    title: 'Soulager un mal de gorge',
    content: 'Gargarisez-vous avec de l\'eau tiède salée. Vous pouvez aussi mâcher un petit morceau de racine de gingembre pour ses effets antibactériens et anti-inflammatoires.',
  },
   {
    id: 4,
    title: 'Lutter contre la fatigue',
    content: 'Une infusion de feuilles de moringa est un excellent stimulant naturel. Riche en vitamines et minéraux, elle aide à retrouver énergie et vitalité sans les effets excitants du café.',
  },
];
