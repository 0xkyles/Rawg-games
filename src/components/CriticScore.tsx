import { Badge, HStack } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

    return (
        <Badge
            fontSize="md"
            paddingX="5px"
            borderRadius="5px"
            colorScheme={color}
        >
            <HStack>
                <span>{score}</span>
            </HStack>
        </Badge>
    );
};

export default CriticScore;
