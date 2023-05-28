import mongoose from "mongoose";

let isConnected = false

const connect = async () => {
    if (isConnected) {
        return
    }

    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
}

export default { connect }