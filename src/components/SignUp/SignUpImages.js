import { Grid, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/Images/logo_primary.png";
import SignUpImage from "../../assets/Images/SignUpImage.png";
import { leftAnimation } from "../../styles/animations";


const SignUpImages = () => {
    return (
        <Grid w="100%" ml="220px" animation={leftAnimation}>
            <Image boxSize="300px" src={LogoPrimary} alt="logo" />
            <Image w="55%" h="75%" src={SignUpImage} alt="logo" />
        </Grid>
    );
};

export default SignUpImages;