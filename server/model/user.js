import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment"
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    employee: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const user = mongoose.model('user', userSchema);

export default user;