import { model, Model, models } from "mongoose";
import userSchema, { UserDocument } from "../user.model"

let User: Model<UserDocument>;

class UserRepository {
    private static _instance: UserRepository | null = null
    private static _lock: boolean = false

    private constructor() {
        try {
            User = model<UserDocument>('User')
        } catch (error) {
            User = model<UserDocument>('User', userSchema)
        }
    }

    public static getInstance() : UserRepository {
        if (!UserRepository._instance) {
            if (!UserRepository._lock) {
                UserRepository._lock = true
                UserRepository._instance = new UserRepository()
                UserRepository._lock = false
            }

            console.log("UserRepo created")
        }

        return UserRepository._instance as UserRepository
    }

    async insert(user: UserDocument) {
        const newUser = new User(user);

        await newUser.save()

        return newUser
    }
}

export default UserRepository