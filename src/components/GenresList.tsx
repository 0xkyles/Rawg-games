import useGenres from "../hooks/useGenres";

const GenresList = () => {
    const { data } = useGenres();

    return (
        <ul style={{ listStyle: "none" }}>
            {data?.results.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenresList;
