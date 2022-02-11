import UserModel from "./model";

/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all users
 * @returns Promise<UserModel[]>
 */
class UserService {
    findAll() {
        return UserModel.find({}).exec();
    }

    /**
     * @exports
     * @method findById
     * @param {string} id
     * @summary get a user
     * @returns {Promise<UserModel>}
     */
    findById(id) {
        return UserModel.findById(id).exec();
    }

    /**
     * @exports
     * @method create
     * @param {object} profile
     * @summary create a new user
     * @returns {Promise<UserModel>}
     */
    create(profile) {
        return UserModel.create(profile);
    }

    /**
     * Find a user by id and update his profile
     * @exports
     * @method updateById
     * @param {string} _id
     * @param {object} newProfile
     * @summary update a user's profile
     * @returns {Promise<void>}
     */
    updateById(_id, newProfile) {
        return UserModel.updateOne({_id}, newProfile).exec();
    }

    /**
     * @exports
     * @method deleteById
     * @param {string} _id
     * @summary delete a user from database
     * @returns {Promise<void>}
     */
    deleteById(_id) {
        return UserModel.deleteOne({_id}).exec();
    }
}

export default new UserService()
