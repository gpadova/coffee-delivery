import { v4 as uuidv4 } from "uuid";

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  img_url: string;
  tags?: string[];
}

export const data: Coffee[] = [
  {
    id: uuidv4(),
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    img_url: "src/assets/coffeeTypes/expresso.png",
    price: 9.9,
    tags: ["tradional"],
  },
  {
    id: uuidv4(),
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    img_url: "src/assets/coffeeTypes/americano.png",
    price: 5.9,
    tags: ["tradional"],
  },
  {
    id: uuidv4(),
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    img_url: "src/assets/coffeeTypes/expresso_cremoso.png",
    price: 7.9,
    tags: ["tradional"],
  },
  {
    id: uuidv4(),
    name: "Expresso Gelado",
    description: "Café expresso tradicional com espuma cremosa",
    img_url: "src/assets/coffeeTypes/gelado.png",
    price: 6.9,
    tags: ["tradional", "gelado"],
  },
  {
    id: uuidv4(),
    name: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    img_url: "src/assets/coffeeTypes/cafe_com_leite.png",
    price: 3.9,
    tags: ["tradional", "com leite"],
  },
  {
    id: uuidv4(),
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    img_url: "src/assets/coffeeTypes/latte.png",
    price: 8.9,
    tags: ["tradional", "com leite"],
  },
  {
    id: uuidv4(),
    name: "Cappucino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    img_url: "src/assets/coffeeTypes/capuccino.png",
    price: 11.9,
    tags: ["tradional", "com leite"],
  },
  {
    id: uuidv4(),
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    img_url: "src/assets/coffeeTypes/macchiato.png",
    price: 10.9,
    tags: ["tradional", "com leite"],
  },
  {
    id: uuidv4(),
    name: "Macaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    img_url: "src/assets/coffeeTypes/mochaccino.png",
    price: 10.9,
    tags: ["tradional", "com leite"],
  },
  {
    id: uuidv4(),
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    img_url: "src/assets/coffeeTypes/cubano.png",
    price: 15.9,
    tags: ["especial", "alcoólico", "gelado"],
  },
  {
    id: uuidv4(),
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    img_url: "src/assets/coffeeTypes/havaiano.png",
    price: 7.9,
    tags: ["especial"],
  },
  {
    id: uuidv4(),
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    img_url: "src/assets/coffeeTypes/arabe.png",
    price: 19.9,
    tags: ["especial"],
  },
  {
    id: uuidv4(),
    name: "Irlândes",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    img_url: "src/assets/coffeeTypes/irlandes.png",
    price: 18.9,
    tags: ["especial", "alcoólico"],
  },
];
