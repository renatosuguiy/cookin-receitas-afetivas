import { Box, Skeleton } from "@chakra-ui/react";

export const CardSkeleton = ({
    repeatCount = 1,
    ...rest
}) => {
    const howMany = Array.from(Array(repeatCount).keys());
    return (
        <>
            {howMany.map((_) => {
                return (
                    <Skeleton
                        {...rest}
                        speed={1}
                        startColor='gray.100'
                        endColor='gray.200'
                        mt='6'
                    >
                        <Box w='310px' h='96px' padding='7' />
                    </Skeleton>
                );
            })}
        </>
    );
};
