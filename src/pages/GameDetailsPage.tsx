import {
    Box,
    Grid,
    GridItem,
    Heading,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/games/GameAttributes";
import GameTrailer from "../components/games/GameTrailer";
import GameScreenshots from "../components/games/GameScreenshots";

const GameDetailsPage = () => {
    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id as string);

    if (error) throw error;
    if (isLoading) return <Text>Loading...</Text>;

    return (
        <>
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1fr 480px",
                }}
                gap="20px"
            >
                <GridItem>
                    <Heading marginBottom="10px">{game?.name}</Heading>
                    <ExpandableText
                        fontSize="14px"
                        lineHeight="6"
                        marginBottom="20px"
                    >
                        {game?.description_raw!}
                    </ExpandableText>
                    <GameAttributes gameDetails={game!} />
                </GridItem>
                <GridItem>
                    <Box
                        width="480px"
                        rounded="md"
                        overflow="hidden"
                        marginBottom="10px"
                    >
                        <GameTrailer gameId={game!.id} />
                    </Box>
                    <GameScreenshots gameId={game!.id} />
                </GridItem>
            </Grid>
        </>
    );
};

export default GameDetailsPage;
