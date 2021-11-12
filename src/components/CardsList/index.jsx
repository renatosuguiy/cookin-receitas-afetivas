import { Flex } from "@chakra-ui/layout";
import { ButtonClear } from "../ButtonClear";
import { CardRecipes } from "../Card";

export const CardsList = ({
  typeCard,
  state,
  stateOfSearchedRecipes,
  setStateOfSearchedRecipes,
}) => {
  return (
    <>
      <Flex
        border="1px solid blue"
        justify="center"
        wrap="wrap"
        margin="10px auto"
        maxWidth="1440px"
        paddingX="2"
      >
        <Flex
          border="1px solid red"
          justify={["center", "center", "space-around", "space-around"]}
          wrap="wrap"
          minWidth={["530px", "530px", "700px", "1000px"]}
          maxWidth={["530px", "530px", "700px", "1064px"]}
        >
          {!stateOfSearchedRecipes.length &&
            state.map((item) => (
              <CardRecipes key={item.id} item={item} typeCard={typeCard} />
            ))}
          {stateOfSearchedRecipes.length !== 0 &&
            stateOfSearchedRecipes.map((item) => (
              <CardRecipes key={item.id} item={item} typeCard={typeCard} />
            ))}
        </Flex>
      </Flex>
      {stateOfSearchedRecipes.length !== 0 && (
        <ButtonClear setState={setStateOfSearchedRecipes} />
      )}
    </>
  );
};
