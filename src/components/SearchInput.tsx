import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
    onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement fontSize="1.2em" children={<BsSearch />} />
                <Input
                    ref={ref}
                    variant="filled"
                    placeholder="Search for games..."
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
