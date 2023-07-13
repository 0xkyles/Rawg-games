import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import {
    useRouteError,
    isRouteErrorResponse,
    useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <VStack justifyContent="center" alignItems="center" height="100vh">
            <Heading>Uh-oh!</Heading>
            <Text>
                {isRouteErrorResponse(error)
                    ? "We can't find that page."
                    : "An unexpected error has occured."}
            </Text>
            <Button
                variant="solid"
                mt="10px"
                onClick={() => navigate("/", { replace: true })}
            >
                Go Back
            </Button>
        </VStack>
    );
};

export default ErrorPage;
