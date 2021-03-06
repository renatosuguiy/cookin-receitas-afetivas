import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";

import sweetCategory from "../../assets/Images/category_dessert.svg";
import saltCategory from "../../assets/Images/category_salt.svg";
import drinkCategory from "../../assets/Images/category_drink.svg";
import LoveGray from "../../assets/Images/lovegray.svg";
import LoveRed from "../../assets/Images/lovered.svg";
import TimesDelete from "../../assets/Images/times.svg";

import { useSharedRecipes } from "../../providers/recipes";
import { useMyRecipes } from "../../providers/MyRecipes";
import { ModalRemoveRecipe } from "../Modal/ModalRemoveRecipe";

export const CardRecipes = ({ item, typeCard }) => {
  const user = localStorage.getItem("@cookin:user") || "";
  const userLoggedId = JSON.parse(user).id;
  const isInFavorites = item.favorites_users?.some((id) => id === userLoggedId);

  const localToken = localStorage.getItem("@cookin:accessToken") || "";
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadingButton, setLoadingButton] = useState(false);

  const {
    recipes,
    deleteOrUnshareSharedRecipes,
    getRecipeDetails,
    addToFavoriteRecipes,
    removeFromFavoriteRecipes,
    getPrivateRecipeDetails,
  } = useSharedRecipes();

  const { deleteRecipe } = useMyRecipes();

  const handleDeleteRecipe = () => {
    deleteRecipe(item.id, localToken, userLoggedId);

    let foundPublicRecipe = recipes.find(
      (element) => element.myrecipesId === item.id
    );
    let publicId = 0;

    if (foundPublicRecipe !== undefined) {
      publicId = foundPublicRecipe.id;
    }
    foundPublicRecipe && deleteOrUnshareSharedRecipes(publicId, localToken);
  };

  if (typeCard === "heart") {
    return (
      <Flex
        align="center"
        width="310px"
        height="96px"
        borderRadius="10px"
        border="0.5px solid rgba(180, 194, 211, 0.2)"
        boxShadow="base"
        position="relative"
        mb="26px"
        _hover={{ transform: "scale(1.1)" }}
        transition="ease 0.2s"
      >
        <Center w="60px" h="60px" bg="white" fontSize="2x1" borderRadius="md">
          {item.category === "doce" && <Image src={sweetCategory} />}
          {item.category === "salgado" && <Image src={saltCategory} />}
          {item.category === "bebida" && <Image src={drinkCategory} />}
        </Center>
        <Box
          ml="4"
          onClick={() => {
            getRecipeDetails(item.id, localToken);
            history.push(`/recipes/${item.id}`);
          }}
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h2" fontSize="lg" color="#0a0a0a">
            {item.title}
          </Heading>
          <Text color="#0a0a0a" fontSize="small" textTransform="capitalize">
            {item.category}
          </Text>
        </Box>
        {!isInFavorites && (
          <>
            <Center
              w="28px"
              h="28px"
              borderRadius="100%"
              border="none"
              bgColor="#ededed"
              position="absolute"
              bottom="12px"
              right="18px"
            >
              <Button
                borderRadius="100%"
                padding="0"
                isLoading={loadingButton}
                onClick={() => {
                  setLoadingButton(true);
                  addToFavoriteRecipes(userLoggedId, item.id, localToken).then(
                    (_) => setLoadingButton(false)
                  );
                }}
              >
                <Image src={LoveGray} />
              </Button>
            </Center>
          </>
        )}
        {isInFavorites && (
          <Center
            w="28px"
            h="28px"
            borderRadius="100%"
            border="none"
            bgColor="#ededed"
            position="absolute"
            bottom="12px"
            right="18px"
          >
            <Button
              borderRadius="100%"
              padding="0"
              isLoading={loadingButton}
              onClick={() => {
                setLoadingButton(true);
                removeFromFavoriteRecipes(
                  userLoggedId,
                  item.id,
                  localToken
                ).then((_) => setLoadingButton(false));
              }}
            >
              <Image src={LoveRed} />
            </Button>
          </Center>
        )}
      </Flex>
    );
  }

  if (typeCard === "times") {
    return (
      <>
        <ModalRemoveRecipe
          isOpen={isOpen}
          onClose={onClose}
          onClick={handleDeleteRecipe}
        />
        <Flex
          align="center"
          width="310px"
          height="96px"
          borderRadius="10px"
          border="0.5px solid rgba(180, 194, 211, 0.2)"
          boxShadow="base"
          position="relative"
          mb="26px"
          _hover={{ transform: "scale(1.1)" }}
          transition="ease 0.2s"
        >
          <Center w="60px" h="60px" bg="white" fontSize="2x1" borderRadius="md">
            {item.category === "doce" && <Image src={sweetCategory} />}
            {item.category === "salgado" && <Image src={saltCategory} />}
            {item.category === "bebida" && <Image src={drinkCategory} />}
          </Center>
          <Box
            ml="4"
            onClick={() => {
              getPrivateRecipeDetails(item.id, localToken);
              history.push(`/myrecipes/${item.id}`);
            }}
            _hover={{ cursor: "pointer" }}
          >
            <Heading as="h2" fontSize="lg" color="#0a0a0a">
              {item.title}
            </Heading>
            <Text color="#0a0a0a" fontSize="small" textTransform="capitalize">
              {item.category}
            </Text>
          </Box>

          <Center
            as="button"
            w="28px"
            h="28px"
            borderRadius="100%"
            onClick={onOpen}
            border="none"
            bgColor="#ededed"
            position="absolute"
            bottom="12px"
            right="18px"
          >
            <Image src={TimesDelete} />
          </Center>
        </Flex>
      </>
    );
  }
};
