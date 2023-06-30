var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../db/models/userModel.js";
const getUserWithFavorites = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(userId).populate('favorites');
    return user;
});
const addFavoriteToUser = (userId, favoriteId) => __awaiter(void 0, void 0, void 0, function* () {
    yield User.findByIdAndUpdate(userId, { $push: { favorites: favoriteId } });
});
export { getUserWithFavorites, addFavoriteToUser };
