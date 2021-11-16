import { Grid, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import SignUpImage from "../../assets/Images/SignUpImage.png";

const SignUpImages = () => {
    return (
        <Grid w="100%" ml="220px">
            <Image boxSize="300px" src={LogoPrimary} alt="logo" />
            <Image  minWidth={["10px", "15px", "200px", "200px"]} w="55%" h="75%" src={SignUpImage} alt="logo" />
        </Grid>
    );
};

export default SignUpImages;