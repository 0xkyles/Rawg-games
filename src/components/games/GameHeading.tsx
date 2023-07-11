import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();

    const heading = `${
        genres.results.find((genre) => genre.id === gameQuery.genreId)?.name ||
        ""
    } ${
        platforms.results.find(
            (platform) => platform.id === gameQuery.platformId
        )?.name || ""
    } Games`;

    return (
        <Heading as="h1" marginBottom="10px">
            {heading}
        </Heading>
    );
};

export default GameHeading;
