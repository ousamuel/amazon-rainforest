const Animals = [
  {
    species: "Red-bellied Piranha",
    scientific_name: "Pygocentrus nattereri",
    category: "Fish",
    description:
      "A common species of piranha found in the Amazon Basin, known for its sharp teeth and schooling behavior.",
    traits: [
      "dangerous",
      "scary",
      "lives in groups",
      "hostile",
      "opportunistic feeder",
    ],
  },
  {
    species: "Black Caiman",
    scientific_name: "Melanosuchus niger",
    category: "Reptile",
    description:
      "One of the largest species of caiman, this apex predator inhabits rivers and lakes in the Amazon.",
    traits: ["dangerous", "solitary", "hostile", "top predator", "nocturnal"],
  },
  {
    species: "Amazon River Dolphin",
    scientific_name: "Inia geoffrensis",
    category: "Mammal",
    description:
      "Also known as the pink river dolphin, this species is native to the freshwater systems of the Amazon.",
    traits: ["friendly", "curious", "solitary", "rare", "intelligent"],
  },
  {
    species: "Jaguar",
    scientific_name: "Panthera onca",
    category: "Mammal",
    description:
      "The largest big cat in the Americas, the jaguar is an apex predator found in the Amazon rainforest.",
    traits: ["dangerous", "solitary", "stealthy", "powerful", "territorial"],
  },
  {
    species: "Green Anaconda",
    scientific_name: "Eunectes murinus",
    category: "Reptile",
    description:
      "One of the heaviest snakes in the world, it is found in the Amazon and is known for its size and strength.",
    traits: ["dangerous", "ambush predator", "solitary", "powerful", "aquatic"],
  },
  {
    species: "Capybara",
    scientific_name: "Hydrochoerus hydrochaeris",
    category: "Mammal",
    description:
      "The largest rodent in the world, commonly found in the Amazon near water bodies.",
    traits: ["cute", "lives in groups", "friendly", "herbivorous", "social"],
  },
  {
    species: "Harpy Eagle",
    scientific_name: "Harpia harpyja",
    category: "Bird",
    description:
      "A large and powerful raptor, the harpy eagle is one of the top predators in the Amazon.",
    traits: [
      "dangerous",
      "solitary",
      "powerful",
      "territorial",
      "apex predator",
    ],
  },
  {
    species: "Three-toed Sloth",
    scientific_name: "Bradypus tridactylus",
    category: "Mammal",
    description:
      "A slow-moving tree-dweller that is highly adapted to life in the rainforest canopy.",
    traits: ["cute", "slow", "solitary", "easily scared", "nocturnal"],
  },
  {
    species: "Giant River Otter",
    scientific_name: "Pteronura brasiliensis",
    category: "Mammal",
    description:
      "The largest species of otter, found in the Amazon's rivers and lakes, known for its social behavior.",
    traits: ["friendly", "lives in groups", "playful", "noisy", "aquatic"],
  },
  {
    species: "Amazonian Manatee",
    scientific_name: "Trichechus inunguis",
    category: "Mammal",
    description:
      "A fully aquatic herbivore that inhabits the freshwater systems of the Amazon Basin.",
    traits: ["cute", "shy", "herbivorous", "slow", "aquatic"],
  },
  {
    species: "Golden Lion Tamarin",
    scientific_name: "Leontopithecus rosalia",
    category: "Mammal",
    description:
      "A small primate with a distinctive golden mane, found in the Amazon rainforest.",
    traits: ["cute", "rare", "lives in groups", "playful", "arboreal"],
  },
  {
    species: "South American Tapir",
    scientific_name: "Tapirus terrestris",
    category: "Mammal",
    description:
      "The largest land mammal in the Amazon, known for its distinctive trunk-like snout.",
    traits: ["shy", "solitary", "herbivorous", "nocturnal", "easily scared"],
  },
  {
    species: "Poison Dart Frog",
    scientific_name: "Dendrobates tinctorius",
    category: "Amphibian",
    description:
      "A brightly colored frog that secretes toxins through its skin, found in the Amazon rainforest.",
    traits: ["dangerous", "colorful", "small", "easily scared", "solitary"],
  },
  {
    species: "Howler Monkey",
    scientific_name: "Alouatta",
    category: "Mammal",
    description:
      "A large species of New World monkey known for its loud howls, found in the Amazon.",
    traits: ["noisy", "lives in groups", "arboreal", "territorial", "playful"],
  },
  {
    species: "Goliath Bird-Eating Spider",
    scientific_name: "Theraphosa blondi",
    category: "Arachnid",
    description:
      "The largest spider by mass, found in the Amazon rainforest, capable of preying on birds.",
    traits: ["scary", "solitary", "nocturnal", "ambush predator", "dangerous"],
  },
  {
    species: "Scarlet Macaw",
    scientific_name: "Ara macao",
    category: "Bird",
    description:
      "A large, colorful parrot native to the Amazon, known for its vibrant plumage and loud calls.",
    traits: ["colorful", "lives in pairs", "intelligent", "noisy", "beautiful"],
  },
  {
    species: "Giant Anteater",
    scientific_name: "Myrmecophaga tridactyla",
    category: "Mammal",
    description:
      "A large insectivore that feeds primarily on ants and termites, found in the Amazon Basin.",
    traits: ["solitary", "nocturnal", "slow", "interesting", "easily scared"],
  },
  {
    species: "Electric Eel",
    scientific_name: "Electrophorus electricus",
    category: "Fish",
    description:
      "A freshwater fish capable of generating electric shocks, found in the Amazon River.",
    traits: ["dangerous", "solitary", "scary", "aquatic", "ambush predator"],
  },
  {
    species: "Leafcutter Ant",
    scientific_name: "Atta",
    category: "Insect",
    description:
      "A species of ant known for its ability to cut and carry leaves to its colony, found in the Amazon.",
    traits: [
      "lives in groups",
      "industrious",
      "interesting",
      "small",
      "aggressive",
    ],
  },
  {
    species: "Hoatzin",
    scientific_name: "Opisthocomus hoazin",
    category: "Bird",
    description:
      "A unique bird with primitive features, known for its strong smell, found in the Amazon Basin.",
    traits: ["interesting", "lives in groups", "noisy", "smelly", "arboreal"],
  },
  {
    species: "Bushmaster Snake",
    scientific_name: "Lachesis muta",
    category: "Reptile",
    description:
      "The longest venomous snake in the Western Hemisphere, found in the Amazon rainforest.",
    traits: ["dangerous", "solitary", "nocturnal", "ambush predator", "rare"],
  },
  {
    species: "Blue Poison Dart Frog",
    scientific_name: "Dendrobates azureus",
    category: "Amphibian",
    description:
      "A species of poison dart frog known for its bright blue color, found in the Amazon.",
    traits: ["dangerous", "small", "colorful", "easily scared", "solitary"],
  },
  {
    species: "Spectacled Caiman",
    scientific_name: "Caiman crocodilus",
    category: "Reptile",
    description:
      "A common species of caiman found in the Amazon Basin, known for the bony ridge between its eyes.",
    traits: [
      "dangerous",
      "solitary",
      "aquatic",
      "nocturnal",
      "opportunistic feeder",
    ],
  },
  {
    species: "Giant Armadillo",
    scientific_name: "Priodontes maximus",
    category: "Mammal",
    description:
      "The largest species of armadillo, found in the Amazon rainforest, known for its large claws and burrowing behavior.",
    traits: ["nocturnal", "solitary", "slow", "rare", "easily scared"],
  },
  {
    species: "Ocelot",
    scientific_name: "Leopardus pardalis",
    category: "Mammal",
    description:
      "A medium-sized wild cat native to the Amazon rainforest, known for its beautiful spotted coat.",
    traits: ["solitary", "stealthy", "nocturnal", "beautiful", "territorial"],
  },
  {
    species: "Pygmy Marmoset",
    scientific_name: "Cebuella pygmaea",
    category: "Mammal",
    description:
      "The smallest monkey in the world, found in the Amazon Basin, known for its tiny size and playful behavior.",
    traits: ["cute", "lives in groups", "playful", "arboreal", "easily scared"],
  },
  {
    species: "Tamandua",
    scientific_name: "Tamandua tetradactyla",
    category: "Mammal",
    description:
      "A small anteater found in the Amazon rainforest, known for its long tongue and prehensile tail.",
    traits: ["solitary", "nocturnal", "slow", "easily scared", "interesting"],
  },
  {
    species: "Common Squirrel Monkey",
    scientific_name: "Saimiri sciureus",
    category: "Mammal",
    description:
      "A small, agile monkey found in the Amazon, known for its playful and social nature.",
    traits: ["playful", "lives in groups", "arboreal", "intelligent", "noisy"],
  },
  {
    species: "Vampire Bat",
    scientific_name: "Desmodus rotundus",
    category: "Mammal",
    description:
      "A species of bat found in the Amazon rainforest that feeds on the blood of other animals.",
    traits: ["nocturnal", "dangerous", "solitary", "stealthy", "scary"],
  },
  {
    species: "Glass Frog",
    scientific_name: "Centrolenidae",
    category: "Amphibian",
    description:
      "A small, translucent frog found in the Amazon, known for its transparent skin that reveals its internal organs.",
    traits: ["small", "solitary", "easily scared", "rare", "interesting"],
  },
  {
    species: "Bush Dog",
    scientific_name: "Speothos venaticus",
    category: "Mammal",
    description:
      "A small, rare wild dog found in the Amazon rainforest, known for its pack hunting behavior.",
    traits: ["lives in groups", "hostile", "rare", "aggressive", "nocturnal"],
  },
  {
    species: "Green Anaconda",
    scientific_name: "Eunectes murinus",
    category: "Reptile",
    description:
      "One of the largest snakes in the world, primarily aquatic, and known for its immense size and strength. It preys on fish, birds, and mammals.",
    traits: [
      "semi-aquatic",
      "solitary",
      "powerful",
      "constrictor",
      "ambush predator",
    ],
  },
  {
    species: "Fer-de-Lance",
    scientific_name: "Bothrops atrox",
    category: "Reptile",
    description:
      "A highly venomous pit viper, found throughout the Amazon Rainforest, responsible for the majority of snakebite incidents in the region.",
    traits: [
      "venomous",
      "aggressive",
      "camouflaged",
      "nocturnal",
      "ambush predator",
    ],
  },
  {
    species: "Amazon Tree Boa",
    scientific_name: "Corallus hortulanus",
    category: "Reptile",
    description:
      "An arboreal species known for its striking color variations and prehensile tail, commonly found in trees throughout the Amazon.",
    traits: ["arboreal", "colorful", "constrictor", "nocturnal", "agile"],
  },
  {
    species: "Emerald Tree Boa",
    scientific_name: "Corallus caninus",
    category: "Reptile",
    description:
      "A striking green boa found in the Amazon Rainforest, known for its beautiful emerald coloration and prehensile tail.",
    traits: [
      "arboreal",
      "green",
      "constrictor",
      "nocturnal",
      "ambush predator",
    ],
  },
  {
    species: "Matamata Turtle",
    scientific_name: "Chelus fimbriata",
    category: "Reptile",
    description:
      "A highly camouflaged freshwater turtle that resembles a pile of leaves and branches, found in slow-moving rivers and streams in the Amazon.",
    traits: ["aquatic", "camouflaged", "solitary", "ambush predator"],
  },
  {
    species: "Yellow-footed Tortoise",
    scientific_name: "Chelonoidis denticulata",
    category: "Reptile",
    description:
      "A large tortoise species native to the Amazon, known for its yellow scales on the limbs and slow-moving, herbivorous nature.",
    traits: ["herbivorous", "slow", "terrestrial", "solitary"],
  },
  {
    species: "Toucan",
    scientific_name: "Ramphastos toco",
    category: "Bird",
    description:
      "A large, colorful bird known for its oversized bill, found in the Amazon Rainforest. The toucan's diet consists mainly of fruits.",
    traits: ["colorful", "arboreal", "frugivorous", "social"],
  },
  {
    species: "Capped Heron",
    scientific_name: "Pilherodius pileatus",
    category: "Bird",
    description:
      "A striking heron with a black crown, yellow bill, and blue face, often found in wetlands and rivers throughout the Amazon.",
    traits: ["aquatic", "solitary", "fish-eater", "elegant"],
  },
  {
    species: "Arapaima",
    scientific_name: "Arapaima gigas",
    category: "Fish",
    description:
      "One of the largest freshwater fish in the world, found in the Amazon Basin. Arapaima can grow over 3 meters long and is known for its air-breathing ability.",
    traits: ["giant", "aquatic", "predatory", "rare"],
  },
  {
    species: "Pirarucu",
    scientific_name: "Arapaima arapaima",
    category: "Fish",
    description:
      "A massive, ancient fish species of the Amazon River, known for its size and distinctive reddish scales.",
    traits: ["aquatic", "giant", "predatory", "air-breather"],
  },
  {
    species: "Amazon Milk Frog",
    scientific_name: "Trachycephalus resinifictrix",
    category: "Amphibian",
    description:
      "A tree frog species found in the Amazon, known for its distinctive white and brown coloration and its secretion of a sticky, milk-like substance as a defense.",
    traits: ["arboreal", "nocturnal", "colorful", "easily scared"],
  },
  {
    species: "Surinam Toad",
    scientific_name: "Pipa pipa",
    category: "Amphibian",
    description:
      "An aquatic frog found in the Amazon, known for its unique reproductive behavior, where eggs are embedded in the female's back and hatch directly from the skin.",
    traits: ["aquatic", "unique reproduction", "solitary", "interesting"],
  },
  {
    species: "Goliath Beetle",
    scientific_name: "Goliathus goliatus",
    category: "Insect",
    description:
      "One of the largest beetles in the world, found in the Amazon Rainforest, known for its impressive size and strength.",
    traits: ["giant", "solitary", "strong", "interesting"],
  },
  {
    species: "Bullet Ant",
    scientific_name: "Paraponera clavata",
    category: "Insect",
    description:
      "Famous for its incredibly painful sting, the bullet ant is a large ant species found in the Amazon.",
    traits: ["dangerous", "lives in groups", "aggressive", "painful sting"],
  },

  {
    species: "Kapok Tree",
    scientific_name: "Ceiba pentandra",
    category: "Plant",
    description:
      "A towering tree that can reach heights of over 200 feet, known for its large buttress roots and lightweight seeds that are spread by the wind.",
    traits: [
      "tall",
      "buttress roots",
      "fast-growing",
      "important for ecosystem",
    ],
  },
  {
    species: "Brazil Nut Tree",
    scientific_name: "Bertholletia excelsa",
    category: "Plant",
    description:
      "One of the tallest trees in the Amazon, known for producing Brazil nuts. It plays a crucial role in the rainforest ecosystem and supports local wildlife.",
    traits: ["tall", "provides food", "hardwood", "important for wildlife"],
  },
  {
    species: "Rubber Tree",
    scientific_name: "Hevea brasiliensis",
    category: "Plant",
    description:
      "This tree is the primary source of natural rubber, tapped for its latex, which has been economically important in the region for centuries.",
    traits: [
      "latex producer",
      "tapped for rubber",
      "economically significant",
      "fast-growing",
    ],
  },
  {
    species: "Acai Palm",
    scientific_name: "Euterpe oleracea",
    category: "Plant",
    description:
      "A slender palm tree known for producing acai berries, which are an important food source for both humans and animals in the Amazon.",
    traits: [
      "produces berries",
      "slender trunk",
      "food source",
      "common in wetlands",
    ],
  },
  {
    species: "Walking Palm",
    scientific_name: "Socratea exorrhiza",
    category: "Plant",
    description:
      "Named for its unique stilt roots that allow it to 'walk' by slowly shifting its position toward sunlight, making it a fascinating plant species in the Amazon.",
    traits: ["stilt roots", "slow-moving", "adaptable", "unique"],
  },
  {
    species: "Giant Water Lily",
    scientific_name: "Victoria amazonica",
    category: "Plant",
    description:
      "The largest water lily in the world, with leaves that can grow up to 10 feet in diameter, providing a habitat for insects and small animals in Amazonian rivers.",
    traits: [
      "aquatic",
      "giant leaves",
      "flowering",
      "important for ecosystems",
    ],
  },
  {
    species: "Cacao Tree",
    scientific_name: "Theobroma cacao",
    category: "Plant",
    description:
      "The tree from which cocoa beans are harvested to produce chocolate, found throughout the Amazon rainforest.",
    traits: [
      "produces cocoa",
      "shade-loving",
      "flowering",
      "economically important",
    ],
  },
  {
    species: "Strangler Fig",
    scientific_name: "Ficus spp.",
    category: "Plant",
    description:
      "A parasitic tree that starts its life growing on another tree, eventually overtaking and killing its host, creating a hollow structure.",
    traits: ["parasitic", "hollow trunk", "aggressive growth", "adaptive"],
  },
  {
    species: "Purple Heartwood",
    scientific_name: "Peltogyne spp.",
    category: "Plant",
    description:
      "Known for its distinctive purple wood, which is highly valued for furniture and construction. The tree is native to the Amazon rainforest.",
    traits: ["purple wood", "hardwood", "used in furniture", "durable"],
  },
  {
    species: "Curare Vine",
    scientific_name: "Chondrodendron tomentosum",
    category: "Plant",
    description:
      "A tropical vine used by indigenous tribes to create curare, a potent poison applied to blow darts for hunting.",
    traits: ["vine", "poisonous", "used for hunting", "medicinal"],
  },
];

export default Animals;
