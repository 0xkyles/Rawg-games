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

const GameDetailsPage = () => {
    const { id } = useParams();
    const { data: game, isLoading, error } = useGame(id as string);

    if (error) throw error;
    if (isLoading) return <Text>Loading...</Text>;

    return (
        <>
            <Heading marginBottom="10px">{game?.name}</Heading>
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1fr 480px",
                }}
                gap="20px"
            >
                <GridItem>
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
                    <GameTrailer gameId={game!.id} />
                </GridItem>
            </Grid>
        </>
    );
};

export default GameDetailsPage;
