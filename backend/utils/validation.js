const Yup = require("yup");

exports.SignupSchema = Yup.object().shape({
  Firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),
  Username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Please provide a valid password")
    .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Weak Password"),
});

exports.validateRegister = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};
