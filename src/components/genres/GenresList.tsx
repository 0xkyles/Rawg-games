import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import useGameQuery from "../../stores/gameQueryStore";
import GenreSkeleton from "./GenreSkeleton";
import { shallow } from "zustand/shallow";

const GenresList = () => {
    const { data, isLoading } = useGenres();
    const { selectedGenreId, setGenreId } = useGameQuery(
        (s) => ({
            selectedGenreId: s.gameQuery.genreId,
            setGenreId: s.setGenreId,
        }),
        shallow
    );

    return (
        <>
            <Heading as="h2" fontSize="2xl" marginBottom="10px">
                Genres
            </Heading>
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
                                fontWeight={
                                    selectedGenreId === genre.id
                                        ? "bold"
                                        : "normal"
                                }
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => setGenreId(genre.id)}
                                variant="link"
                                size={
                                    selectedGenreId === genre.id ? "md" : "sm"
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenresList;
