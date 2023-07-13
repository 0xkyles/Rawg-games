import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import PlatformMenu from "../components/PlatformMenu";
import SortMenu from "../components/SortMenu";
import GameGrid from "../components/games/GameGrid";
import GameHeading from "../components/games/GameHeading";
import GenresList from "../components/genres/GenresList";
import useGameQuery from "../components/stores/gameQueryStore";

const HomePage = () => {
    const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
    const platformId = useGameQuery((s) => s.gameQuery.platformId);
    const resetFilter = useGameQuery((s) => s.reset);

    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area="aside" padding="20px">
                    <GenresList />
                </GridItem>
            </Show>
            <GridItem area="main" padding="20px">
                <GameHeading />
                <HStack spacing="10px" marginBottom="20px">
                    <PlatformMenu />
                    <SortMenu />
                    {(selectedGenreId || platformId) && (
                        <Button
                            variant="outline"
                            leftIcon={<RxCross2 />}
                            onClick={() => resetFilter()}
                        >
                            Reset Filter
                        </Button>
                    )}
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    );
};

export default HomePage;
