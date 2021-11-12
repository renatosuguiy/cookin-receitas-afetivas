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
import { FaExclamation, FaQuestion, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const ModalConfirmRecipe = ({
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
                            <FaQuestion color={theme.colors.orange['100']} />
                        </Center>
                        <Text fontWeight='bold' ml='2'>
                            Confirmar Receita
                        </Text>

                    </ModalHeader>
                    <ModalBody textAlign='center' fontSize='lg'>
                        <Text>
                            Deseja finalizar sua receita?
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
