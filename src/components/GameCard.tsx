import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius="10px" overflow="hidden">
            <Image
                height="200px"
                width="full"
                objectFit="cover"
                src={game.background_image}
                alt={game.name + "'s game image."}
            />
            <CardBody>
                <PlatformIconList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
                <Heading size="lg">{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
