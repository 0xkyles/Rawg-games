import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <Grid
                templateAreas={{
                    base: `"header" "main"`,
                    lg: `"header header" "aside main"`,
                }}
            >
                <GridItem area="header" colSpan={2} bg="blue">
                    Header
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="orange">
                        Nav
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
