import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
})

export const UrlModel = model("Url", urlSchema)