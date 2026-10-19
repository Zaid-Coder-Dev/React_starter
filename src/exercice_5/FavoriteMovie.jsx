
import { useState } from 'react';

export default function FavoriteMovies() {

    const [movieName, setMovieName] = useState('');

    const [movies, setMovies] = useState([
        'Inception',
        'Interstellar',
        'The Dark Knight'
    ]);

    function ajouter(e) {
        e.preventDefault();

        if (!movieName) return;

        setMovies([...movies, movieName]);
        setMovieName('');
    }

    function supprimer(index) {
        setMovies(movies.filter((movie, i) => i !== index));
    }

    return (
        <div className="champ-container">
            <h2>Mes films</h2>

            <form onSubmit={ajouter}>
                <input
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    placeholder="Nom du film"
                />

                <button type="submit">Ajouter</button>
            </form>

            { movies ? <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie}
                        <button onClick={() => supprimer(index)}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul> : 'Votre liste de favoris est vide'}
        </div>
    );
}
