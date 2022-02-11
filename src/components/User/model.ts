import {Schema} from "mongoose";

import connections from "../../config/connection";

const UserModel = new Schema(
    {
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'usermodel',
        versionKey: false,
    },
);

export default connections.model('UserModel', UserModel);
