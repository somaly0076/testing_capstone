import axios from "axios";

const addFavorite = async (cardId, category) => {
    const added = await axios.post('http://localhost:4000/api/favorites/addFavorite',
        {
            user_id: 1,
            card: cardId,
            categories: category
        }
    );
    console.log(added)
}

export default addFavorite;