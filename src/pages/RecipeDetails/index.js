import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Heading,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import HeaderLogo from "../../components/HeaderLogo";

const recipe = {
  title: "Bolo de Laranja Vegano",
  ingredients: [
    "1 laranja em cubos",
    "1/2 xícara de suco de laranja",
    "3/4 de xícara de óleo",
    "1 xícara de açúcar",
    "2 xícaras de farinha de trigo",
    "1 colher de sopa de fermento em pó",
    "Pitada de sal",
  ],
  instructions: [
    "Bater no liquidificador a laranja, o suco, o óleo, o açúcar e o sal e reservar.",
    "Misturar em uma tigela a farinha e o fermento em pó.",
    "Incorporar a mistura do liquidificador na farinha com o fermento.",
    "Colocar a massa em uma forma untada e enfarinhada.",
    "Assar por 40 a 50 minutos em forno pré-aquecido a 180ºC.",
  ],
  category: "doce",
  author: "Mark Zuckerberg",
  myrecipesId: 1,
  userId: 1,
  id: 1,
};

const RecipeDetails = () => {
  return (
    <>
      <HeaderLogo />
      <div>
        <div>
          <Heading as="h1" size="lg" color="#F16623">
            {recipe.title}
          </Heading>
          <Text>Receita de {recipe.author}</Text>
        </div>
        <div>
          <Heading as="h2" size="md" color="#F16623">
            Ingredientes
          </Heading>
          <List>
            {recipe.ingredients.map((item) => (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#F16623" />
                {item}
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Heading as="h2" size="md" color="#F16623">
            Modo de Preparo
          </Heading>
          <OrderedList>
            {recipe.instructions.map((item) => (
              <ListItem> {item}</ListItem>
            ))}
          </OrderedList>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
