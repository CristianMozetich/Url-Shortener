import { UrlModel } from "../models/url.models.js";
import { UserModel } from "../models/user.models.js";



export const urlShortener = async (req, res) => {
  const { url, userId } = req.body;

  try {
    const shortUrl = Math.random().toString(36).substring(2, 5);

    // Crear una nueva URL acortada
    const newUrl = await UrlModel.create({ url, shortUrl });

    // Buscar al usuario por su ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "Usuario no encontrado" });
    }

    // Agregar la URL acortada al array de shortenedUrls del usuario
    user.shortenedUrls.push(newUrl);
    await user.save();

    res.status(200).send({ data: newUrl });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


export const getUrlShort = async (req, res) => {
  try {
    const { shortId } = req.params;
    const data = await UrlModel.findOne({ shortUrl: shortId });

    if (!data) {
      res.redirect("/");
    } else {
      res.redirect(data.url);
    }
  } catch (error) {
    console.error("Error fetching URL:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const customUrlShortener = async (req, res) => {
  const { url, customName, userId } = req.body;

  try {
    const existigUrl = await UrlModel.findOne({ shortUrl: customName });

    if (existigUrl) {
      res.status(400).send({ error: "Url existente en la base de datos" });
    }

    const data = await UrlModel.create({ url, shortUrl: customName });

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send({ error: "Usuario no encontrado" });
    }
    user.shortenedUrls.push(data);
    await user.save();

    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
