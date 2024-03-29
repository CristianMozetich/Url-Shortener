import { UrlModel } from "../models/url.models.js";


export const urlShortener = async (req, res) => {
    const { url } = req.body;
    
    try{
        const shortUrl = Math.random().toString(36).substring(2, 5);

        const data = await UrlModel.create({ url, shortUrl });

        res.status(200).send({ data });
        
    } catch (error) {
        res.status(500).send({ error: error.message });
    }

}

export const getUrlShort = async (req, res) => {
    try {
        const { shortId } = req.params;
        const data = await UrlModel.findOne({ shortUrl: shortId });

        if (!data) {
            res.redirect('/');
        } else {
            res.redirect(data.url);
        }
    } catch (error) {
        console.error('Error fetching URL:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};