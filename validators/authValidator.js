import { body, validationResult } from "express-validator";

export const validateRegister = [
    body("name").notEmpty().withMessage("Please fill your name"),
    body("email").isEmail().withMessage("Please use valid email"),
    body("password").isLength({min: 8}).withMessage("Password must be 8 character or more"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Invalid data", errors: errors.array()})
        }
        next();
    }
];

export const validateLogin = [
    body("email").isEmail().withMessage("Please use valid email"),
    body("password").notEmpty().withMessage("Please fill your password"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Invalid data", error: errors.array()})
        }
        next()
    }
]