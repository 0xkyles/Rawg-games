import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
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
                    variant="outline"
                    mt="10px"
                    colorScheme="white"
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}
        </>
    );
};

export default GameGrid;
