import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQuery from "../../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearch = useGameQuery((s) => s.setSearch);
    const navigate = useNavigate();

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                    setSearch(ref.current.value);
                    navigate("/");
                }
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
