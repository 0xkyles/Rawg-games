import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";
import GameGrid from "./components/games/GameGrid";
import GameHeading from "./components/games/GameHeading";
import GenresList from "./components/genres/GenresList";
import Navbar from "./components/navigation/Navbar";
import { RxCross2 } from "react-icons/rx";
import useGameQuery from "./components/stores/gameQueryStore";
import { shallow } from "zustand/shallow";

function App() {
    const { gameQuery, reset } = useGameQuery(
        (s) => ({
            gameQuery: s.gameQuery,
            reset: s.reset,
        }),
        shallow
    );

    return (
        <div className="App">
            <Grid
                templateAreas={{
                    base: `"header" "main"`,
                    lg: `"header header" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area="header">
                    <Navbar />
                </GridItem>
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
                        {(gameQuery.genreId || gameQuery.platformId) && (
                            <Button
                                variant="outline"
                                leftIcon={<RxCross2 />}
                                onClick={() => reset()}
                            >
                                Reset Filter
                            </Button>
                        )}
                    </HStack>
                    <GameGrid />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
