import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../services/genreService";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
    const { data, isLoading } = useGenres();

    return (
        <List>
            {isLoading &&
                Array.from({ length: 16 }, (_, index) => (
                    <ListItem key={index} paddingY="5px">
                        <GenreSkeleton />
                    </ListItem>
                ))}
            {data?.results.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={genre.image_background}
                            boxSize="30px"
                            borderRadius="10px"
                            objectFit="cover"
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            variant="link"
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenresList;
