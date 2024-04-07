import { createHash, validatePassword } from "../utils/bcrypt.js";
import { UserModel } from "../models/user.models.js";
import passport from "passport";
import local from "passport-local";

const localStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new localStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        passwordField: "password",
      },
      async (req, username, password, done) => {
        const { username: reqUsername, email, phone, address } = req.body;

        try {
          const user = await UserModel.findOne({ email: email });

          if (user) {
            return done(null, false);
          } else {
            const passwordHash = createHash(password);
            const userCreated = await UserModel.create({
              username: reqUsername,
              email: email,
              password: passwordHash,
              phone: phone,
              address: address,
            });

            return done(null, userCreated);
          }
        } catch (error) {
          console.error("Error al registrar el usuario:", error);
          return done(null, false);
        }
      }
    )
  );

  passport.use(
    "login",
    new local.Strategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        passwordField: "password",
      },
      async (req, username, password, done) => {
        try {
          const user = await UserModel.findOne({ email: username });
          if (!user) {
            return done(null, false);
          }

          if (validatePassword(password, user.password)) {
            return done(null, user);
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  //INICIALIZAR LA SESION DEL USUARIO
  passport.serializeUser((email, done) => {
    done(null, email);
  });

  //ELIMINAR LA SESION DEL USUARIO
  passport.deserializeUser(async (email, done) => {
    const user = await UserModel.findById(email);
    done(null, user);
  });
};

export default initializePassport;
