import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameDetails } from "../../services/gameService";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
    gameDetails: GameDetails;
}

const GameAttributes = ({ gameDetails }: Props) => {
    return (
        <SimpleGrid as="dl" columns={{ sm: 2, md: 2 }} spacing="10px">
            <DefinitionItem term="Genres">
                {gameDetails.genres.map((g) => (
                    <Text key={g.id}>{g.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Platforms">
                {gameDetails.parent_platforms.map(({ platform }) => (
                    <Text key={platform.id}>{platform.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metacritic">
                <CriticScore score={gameDetails.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                {gameDetails.publishers.map((p) => (
                    <Text key={p.id}>{p.name}</Text>
                ))}
            </DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;
