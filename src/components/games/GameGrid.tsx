import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import useGameQuery from "../../stores/gameQueryStore";

const GameGrid = () => {
    const gameQuery = useGameQuery((s) => s.gameQuery);
    const {
        data,
        error,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGames(gameQuery);

    if (error) return <Text>{error.message}</Text>;

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
                {isLoading &&
                    Array.from({ length: 8 }, (_, index) => (
                        <GameCardContainer key={index}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}

                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button
                    isLoading={isFetchingNextPage}
                    variant="outline"
                    mt="10px"
                    colorScheme="white"
                    onClick={() => fetchNextPage()}
                >
                    Load More
                </Button>
            )}
        </>
    );
};

export default GameGrid;
