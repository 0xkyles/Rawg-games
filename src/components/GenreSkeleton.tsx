import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
    return (
        <HStack>
            <Skeleton borderRadius="10px" height="30px" width="30px" />
            <SkeletonText noOfLines={1} skeletonHeight="2" width="50%" />
        </HStack>
    );
};

export default GenreSkeleton;
