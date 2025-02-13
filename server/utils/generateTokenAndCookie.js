import jwt from 'jsonwebtoken';

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, //millisecond(15days)
    httpOnly: true, //prevent XXS attacks--> cross-side scripting attacks
    sameSite: "none", //CSRF attacks--> cross-site request frogery attacks 
    secure: true
}

const generateTokenAndCookie = (user, res, message) => {
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });

    return res.cookie("jwt", token, cookieOptions).json({
        success: true,
        user,
        message
    });
}

export {generateTokenAndCookie, cookieOptions};