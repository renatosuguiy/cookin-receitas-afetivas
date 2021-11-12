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
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const ModalRemoveRecipe = ({
    isOpen,
    onClose,
    onClick,
}) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding='1' bg='white' color='gray.800' w='300px'>
                    <ModalHeader display='flex' alignItems='center'>
                        <Center w='30px' h='30px' borderRadius='5px'>
                            <FaExclamation color={theme.colors.orange['50']} />
                        </Center>
                        <Text fontWeight='bold' ml='2'>
                            Deleter Receita
                        </Text>
                        <Center
                            onClick={onClose}
                            as='button'
                            ml='auto'
                            w='25px'
                            h='25px'
                            fontSize='lg'
                            borderRadius='md'
                        >
                            <FaTimes color='#000' />
                        </Center>
                    </ModalHeader>
                    <ModalBody textAlign='center' fontSize='lg'>
                        <Text>
                            Você realmente deseja deletar a receita?
                        </Text>
                    </ModalBody>

                    <ModalFooter flexDirection='column'>
                        <Button
                            bg='red.400'
                            color='white'
                            w='100%'
                            h='40px'
                            onClick={onClick}
                            _hover={{ filter: "brightness(0.7)" }}

                        >
                            Sim, tenho certeza
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
