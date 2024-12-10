export default token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdhNjFkM2IxOTU1NjRjNDY1YWMzYTk1NTIxZmIxMSIsIm5iZiI6MTcyNjA5MTcyNy45NjIsInN1YiI6IjY2ZTIxMWNmMjAyNGQyYzhkNjkwNzA3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZfvvC1IoK8qvxgOsZ0w9Yk6gFim8GQPAHBMgdBMerU"
export async function getLatestMovies() {
    const LATEST_GAMES =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    const rawData = await fetch(LATEST_GAMES, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const json = await rawData.json();

    const {
        results
    } = json;

    return results.map((result) => {
        const { overview, id, release_date, poster_path, popularity, original_title } =
            result;
        // crea la imagen
        console.log("poserpath ", poster_path);
        const img = `https://image.tmdb.org/t/p/w185${poster_path}`;

        return {
            overview,
            release_date,
            popularity,
            id,
            original_title,
            image: img,
        };
    });
}

export async function getGameDetails(slug) {
    const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();

    const { components } = json;
    const { title, description, criticScoreSummary, images } = components[0];
    const { score } = criticScoreSummary;

    // get the card image
    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    const rawReviews = components[3].data.items;

    // get the reviews
    const reviews = rawReviews.map((review) => {
        const { quote, score, date, publicationName, author } = review;
        return { quote, score, date, publicationName, author };
    });

    return {
        img,
        title,
        slug,
        description,
        score,
        reviews,
    };
}