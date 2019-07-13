class Utilities {
    generateHash() {
        var md5 = require('md5');
        var ts = this.getTimeStamp();
        var apiKey = 'aa0977968818e5d86da059d7d1060ddd';
        var privateKey = 'bb5598b98c18455db78a376c05146686632a5d52';
        var hash = md5(ts+privateKey+apiKey);
        //var hash = md5('1562598513538bb5598b98c18455db78a376c05146686632a5d52aa0977968818e5d86da059d7d1060ddd');
        //cy.log(hash);
        return hash;
    }
    getTimeStamp() {
        var timeStamp = Math.round(new Date() / 1000);
        return timeStamp;
    }
    getApiKey() {
        var apiKey = 'aa0977968818e5d86da059d7d1060ddd';
        return apiKey;
    }
}
export default Utilities;