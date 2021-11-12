import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Center,
} from "@chakra-ui/react";
import { FaShare, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const ModalShareRecipe = ({
    isOpen,
    onClose,
    onClick,
}) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding='1' bg='white' color='gray.800' w='90vw'>
                    <ModalHeader display='flex' alignItems='center'>
                        <Center w='30px' h='30px' borderRadius='5px'>
                            <FaShare color={theme.colors.orange['100']} />
                        </Center>
                        <Text fontWeight='bold' ml='2'>
                            Compartilhar Receita
                        </Text>

                    </ModalHeader>
                    <ModalBody textAlign='center' fontSize='lg'>
                        <Text >
                            Ao compartilhar a receita, ela estará visível para todo mundo
                        </Text>
                    </ModalBody>
                    <ModalFooter flexDirection='column'>
                        <Button
                            bg='green.400'
                            color='white'
                            w='100%'
                            h='40px'
                            onClick={onClick}
                            _hover={{ filter: "brightness(0.7)" }}
                        >
                            Quero compartilhar
                        </Button>
                        <Button
                            bg='gray.400'
                            color='#000'
                            w='100%'
                            h='40px'
                            onClick={onClose}
                            _hover={{ filter: "brightness(0.7)" }}
                            mt='4'
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
