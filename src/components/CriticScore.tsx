import { Badge } from "@chakra-ui/react";

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
            {score}
        </Badge>
    );
};

export default CriticScore;
