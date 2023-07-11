import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import SortMenu from "./components/SortMenu";
import GameGrid from "./components/games/GameGrid";
import GameHeading from "./components/games/GameHeading";
import GenresList from "./components/genres/GenresList";
import Navbar from "./components/navigation/Navbar";
import { RxCross2 } from "react-icons/rx";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    search: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                    <Navbar
                        onSearch={(search) =>
                            setGameQuery({ ...gameQuery, search })
                        }
                    />
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" padding="20px">
                        <GenresList
                            selectedGenreId={gameQuery.genreId}
                            onSelectGenre={(genreId) =>
                                setGameQuery({ ...gameQuery, genreId })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" padding="20px">
                    <GameHeading gameQuery={gameQuery} />
                    <HStack spacing="10px" marginBottom="20px">
                        <PlatformMenu
                            selectedPlatformId={gameQuery.platformId}
                            onSelectPlatform={(platformId) =>
                                setGameQuery({ ...gameQuery, platformId })
                            }
                        />
                        <SortMenu
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                        {(gameQuery.genreId || gameQuery.platformId) && (
                            <Button
                                variant="outline"
                                leftIcon={<RxCross2 />}
                                onClick={() =>
                                    setGameQuery({
                                        ...gameQuery,
                                        genreId: undefined,
                                        platformId: undefined,
                                    })
                                }
                            >
                                Reset Filter
                            </Button>
                        )}
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
