import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
                    <GridItem area="aside" bg="orange">
                        ASIDE
                    </GridItem>
                </Show>
                <GridItem area="main" bg="red">
                    Main
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
