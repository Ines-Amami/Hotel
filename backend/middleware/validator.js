const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName").notEmpty().withMessage(" this field is required"),
  check("email").isEmail().withMessage("this field should be a valid email"),
  check("password").isLength({
    min: 6,
  }).withMessage(" password should have at least 6 char"),
];

exports.loginRules = () => [
    check("email", "this field should be a valid email").isEmail(),
    check("password", "password should have at least 6 char").isLength({
      min: 6,
    }),
  ];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
