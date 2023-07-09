import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../services/genreService";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
                {isLoading &&
                    Array.from({ length: 8 }, (_, index) => (
                        <GameCardContainer key={index}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.results.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
