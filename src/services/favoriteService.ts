import { User } from "../db/models/userModel.js";

const getUserWithFavorites = async (userId) => {
    const user = await User.findById(userId).populate('favorites');
    return user;
};

const addFavoriteToUser = async (userId, favoriteId) => {
    await User.findByIdAndUpdate(userId, { $push: { favorites: favoriteId } });
};

export { getUserWithFavorites, addFavoriteToUser }