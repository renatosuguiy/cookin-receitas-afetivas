import { Flex } from "@chakra-ui/layout";
import { fadeAnimation } from "../../styles/animations";
import { ButtonClear } from "../ButtonClear";
import { CardRecipes } from "../Card";
import { CardSkeleton } from "../Skeleton";

export const CardsList = ({
  typeCard,
  state,
  stateOfSearchedRecipes,
  setStateOfSearchedRecipes,
  loading,
}) => {
  if (loading) {
    return (
      <Flex
        justify="center"
        wrap="wrap"
        margin="10px auto"
        maxWidth="1440px"
        paddingX="2"
      >
        <Flex
          justify={["center", "center", "space-around", "space-around"]}
          wrap="wrap"
          minWidth={["530px", "530px", "700px", "1000px"]}
          maxWidth={["530px", "530px", "700px", "1064px"]}
        >
          <CardSkeleton repeatCount={6} />
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        justify="center"
        wrap="wrap"
        margin="10px auto"
        maxWidth="1440px"
        paddingX="2"
        animation={fadeAnimation}
      >
        <Flex
          justify={["center", "center", "space-around", "space-around"]}
          wrap="wrap"
          minWidth={["310px", "530px", "700px", "1000px"]}
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
