import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardComponent from "./GameCardComponent";

const GameCardSkeleton = () => {
    return (
        <GameCardComponent>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </GameCardComponent>
    );
};

export default GameCardSkeleton;
