import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);

    if (isLoading) return null;
    if (error) throw error;
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} rounded="md" overflow="hidden">
            {data?.results.map((s) => (
                <Image src={s.image} key={s.id} objectFit="cover" />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
