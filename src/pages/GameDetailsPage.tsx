import { Box, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
    const location = useLocation();
    const gameId = location.state.id;

    const { data: game, isLoading } = useGame(gameId);

    if (isLoading) return <Heading>Loading...</Heading>;

    return (
        <>
            <Box padding="20px">
                <Heading>{game?.name}</Heading>
                <Text>{game?.slug}</Text>
                <Text>{game?.description_raw}</Text>
            </Box>
        </>
    );
};

export default GameDetailsPage;
