const crypto = require("crypto");
const password = 'abc123';
const hash = crypto.createHash('sha1').update(password).digest('hex')
console.log(hash)