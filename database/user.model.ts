import UseModel from "@/shared/UserModel";
import { Schema, Document } from "mongoose";

interface UserDocument extends UseModel, Document {
   
}

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    identityCardNumber: {
        type: Number,
        required: true,
    },
    shirtSize: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'],
        required: true,
    },
    metadata: {
        ip: {
            type: String
        }
    }
}, { timestamps: true })


export default userSchema
export type { UserDocument }