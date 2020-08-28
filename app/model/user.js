'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {
            type: String,
            unique: true,
            allowNull: false,
            require: true
        },
        password: {
            type: String,
            allowNull: false
        }
    });
    return mongoose.model('User', UserSchema);
};
