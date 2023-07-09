import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement fontSize="1.2em" children={<BsSearch />} />
            <Input variant="filled" placeholder="Search for games..." />
        </InputGroup>
    );
};

export default SearchInput;
