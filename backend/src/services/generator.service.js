const otpGenerator = require("otp-generator");
const generator = require('generate-password');

exports.generatePassword = () => {
    return generator.generate({ length: 8, numbers: true });
}

exports.generateOtp = () => {
    return otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
}