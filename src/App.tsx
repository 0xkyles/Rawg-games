import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./services/genreService";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./services/platformService";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({
        genre: null,
        platform: null,
    });

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
                        <GenresList
                            selectedGenre={gameQuery.genre}
                            onSelectGenre={(genre) =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" padding="20px">
                    <PlatformMenu
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
