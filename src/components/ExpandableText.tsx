import { Button, Text } from "@chakra-ui/react";
import { useState, ComponentProps } from "react";

type TextProps = ComponentProps<typeof Text>;

type Props = {
    children: string;
} & TextProps;

const ExpandableText = ({ children, ...other }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const expandable = children.length > 500;

    if (!expandable) return <Text>{children}</Text>;

    return (
        <Text {...other}>
            {expanded ? children : children.substring(0, 500) + "..."}
            {
                <Button
                    size="xs"
                    colorScheme="green"
                    marginLeft="10px"
                    fontWeight="bold"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Show Less" : "Show more"}
                </Button>
            }
        </Text>
    );
};

export default ExpandableText;
