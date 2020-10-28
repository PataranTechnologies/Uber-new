var crypto = require('crypto');


var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'password';


var cipher = crypto.createCipher(algorithm, key);  

var decipher = crypto.createDecipher(algorithm, key);


const SecurityTool={

    cipher:(data)=>{
        return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    },

     decrypt :(data)=>{
        return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
   } 

}



export default SecurityTool