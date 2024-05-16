import { error } from "console";
import { UrlModel } from "../models/url.models.js";
import { UserModel } from "../models/user.models.js";

export const urlShortener = async (req, res) => {
  const { url } = req.body;

  try {
    const shortUrl = Math.random().toString(36).substring(2, 5);

    // Crear una nueva URL acortada
    const newUrl = await UrlModel.create({ url, shortUrl });

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

export const getUrls = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findById(userId);

    if(!user){
      return res.status(404).send({ error: "Usuario no encontrado" });
    }

    const urls = user.shortenedUrls;

    res.status(200).json({ data: urls });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteUrl = async (req, res) => {
  const { shortUrl } = req.body;
  const { userId } = req.params;

  try {

    const user = await UserModel.findById(userId);
    if(!user){
      return res.status(404).send({ error: "Usuario no encontrado" });
    }


    const urlToDelete = await UrlModel.findOne({ shortUrl });
    if (!urlToDelete) {
      return res.status(404).send({ error: "URL no encontrada" });
    }

    await UrlModel.deleteOne({ shortUrl });

    user.shortenedUrls = user.shortenedUrls.filter((url)=> url.shortUrl !== shortUrl);
    await user.save();

    res.status(200).send({ message: "URL eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la URL:", error);
    res.status(500).send({ error: "Error interno del servidor" });
  }
};

