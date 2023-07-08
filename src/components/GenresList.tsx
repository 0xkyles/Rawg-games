import useGenres from "../hooks/useGenres";

const GenresList = () => {
    const { genres, isLoading } = useGenres();

    return (
        <ul style={{ listStyle: "none" }}>
            {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenresList;
