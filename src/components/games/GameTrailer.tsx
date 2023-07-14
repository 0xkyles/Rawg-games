import { Box } from "@chakra-ui/react";
import useTrailers from "../../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data: trailers, isLoading, error } = useTrailers(gameId);

    if (isLoading) return null;
    if (error) throw error;

    const trailer = trailers!.results?.[0];
    return trailer ? (
        <Box boxSize="480px" rounded="md" overflow="hidden">
            <video
                src={trailer.data[480]}
                poster={trailer.preview}
                controls
            ></video>
        </Box>
    ) : null;
};

export default GameTrailer;
