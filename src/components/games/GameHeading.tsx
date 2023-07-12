import { Heading } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQuery from "../stores/gameQueryStore";

const GameHeading = () => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();
    const { selectedGenreId, selectedPlatformId } = useGameQuery((s) => ({
        selectedGenreId: s.gameQuery.genreId,
        selectedPlatformId: s.gameQuery.platformId,
    }));

    const heading = `${
        genres.results.find((genre) => genre.id === selectedGenreId)?.name || ""
    } ${
        platforms.results.find((platform) => platform.id === selectedPlatformId)
            ?.name || ""
    } Games`;

    return (
        <Heading as="h1" marginBottom="10px">
            {heading}
        </Heading>
    );
};

export default GameHeading;
