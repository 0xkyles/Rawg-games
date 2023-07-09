import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./services/genreService";
import { useState } from "react";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./services/platformService";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
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
                        <GenresList
                            selectedGenre={selectedGenre}
                            onSelectGenre={(genre) => setSelectedGenre(genre)}
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" padding="20px">
                    <PlatformMenu
                        selectedPlatform={selectedPlatform}
                        onSelectPlatform={(platform) =>
                            setSelectedPlatform(platform)
                        }
                    />
                    <GameGrid
                        selectedPlatform={selectedPlatform}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
