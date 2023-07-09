import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
    const { data } = useGenres();

    return (
        <List>
            {data?.results.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={genre.image_background}
                            boxSize="30px"
                            borderRadius="10px"
                            objectFit="cover"
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenresList;
