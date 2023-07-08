import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

function App() {
    return (
        <div className="App">
            <Grid
                templateAreas={{
                    base: `"header" "main"`,
                    lg: `"header header" "aside main"`,
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
                    <GameGrid />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
