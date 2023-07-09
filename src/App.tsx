import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./services/genreService";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./services/platformService";
import SortMenu from "./components/SortMenu";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
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
                            selectedGenre={gameQuery.genre}
                            onSelectGenre={(genre) =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" padding="20px">
                    <HStack spacing="10px">
                        <PlatformMenu
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        />
                        <SortMenu
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
