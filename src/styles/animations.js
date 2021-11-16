import { keyframes } from "@chakra-ui/react";


const left = keyframes`
  from {
        opacity: 0;
        transform: translateX(-100px);

    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const right = keyframes`
  from {
        opacity: 0;
        transform: translateX(200px);

    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

const fade = keyframes`
  from {
        opacity: 0;

    }
    to {
        opacity: 1;
    }
`;

const topDelay = keyframes`
  0% {
        opacity: 0;
        transform: translateY(-200px);

    }
    50% {
        opacity: 0;
        transform: translateY(-100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;
const scale = keyframes`
    from {
        transform: scale(1);

    }
    to {
        transform: scale(1.2);

    }
`;

export const leftAnimation = `${left} 1 0.5s linear`;
export const rightAnimation = `${right} 1 0.5s linear`;
export const fadeAnimation = `${fade} 1 0.5s linear`;
export const topAnimationDelay = `${topDelay} 1 1.4s linear`;
export const scaleAnimation = `${scale} 1 0.3s linear`;
