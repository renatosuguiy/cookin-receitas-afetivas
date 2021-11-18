import { Tabs, TabList, Tab, Center, Text, Box } from "@chakra-ui/react";
import { useMediaQuery } from "@mui/material";
import { FaBookOpen, FaHeart, FaHome } from "react-icons/fa";
import { useHistory } from "react-router";

const Menu = ({ index }) => {
  const isLagerThan768 = useMediaQuery("(min-width: 768px)");
  const history = useHistory();
  return (
    <Box
      w="100vw"
      margin="-1px"
      bgColor={["orange.50", "orange.50", "rgba(0,0,0,0)"]}
    >
      <Center
        maxWidth="500px"
        margin="0px auto"
        w="90vw"
        borderBottom="1px solid #cecece"
      >
        <Tabs index={index}>
          <TabList>
            <Tab
              onClick={() => history.push("/recipes")}
              w={["100px", "115px", "145px"]}
              _selected={{
                color: "orange.400",
                borderColor: "orange.400",
              }}
              fontSize="4xl"
              flexDir="column"
            >
              <FaHome />
              {isLagerThan768 && (
                <Text fontSize="12px" mt="2">
                  {" "}
                  Receitas Públicas
                </Text>
              )}
            </Tab>
            <Tab
              onClick={() => history.push("/myrecipes")}
              flexDir="column"
              w={["100px", "115px", "145px"]}
              _selected={{ color: "orange.400", borderColor: "orange.400" }}
              fontSize="4xl"
            >
              <FaBookOpen />
              {isLagerThan768 && (
                <Text fontSize="12px" mt="2">
                  Minhas Receitas
                </Text>
              )}
            </Tab>
            <Tab
              onClick={() => history.push("/favorites")}
              flexDir="column"
              w={["100px", "115px", "145px"]}
              _selected={{ color: "orange.400", borderColor: "orange.400" }}
              fontSize="4xl"
            >
              <FaHeart />
              {isLagerThan768 && (
                <Text fontSize="12px" mt="2">
                  Receitas Favoritas
                </Text>
              )}
            </Tab>
          </TabList>
        </Tabs>
      </Center>
    </Box>
  );
};

export default Menu;
