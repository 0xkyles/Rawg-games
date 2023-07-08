import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image
                height="200px"
                width="full"
                objectFit="cover"
                src={game.background_image}
                alt={game.name + "'s game image."}
            />
            <CardBody>
                <HStack align="center" justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading size="lg">{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
