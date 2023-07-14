import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY="10px">
            <Heading as="dt" fontSize="md" marginBottom="5px">
                {term}
            </Heading>
            <Text as="dd" fontSize="sm">
                {children}
            </Text>
        </Box>
    );
};

export default DefinitionItem;
