import Utilities from '../../utils/util.spec'

describe("Marvel Series API Error codes", function () {
    it("Get Series API- timeStamp missing", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'apikey': apiKey, 'hash': hash }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(409)
                expect(response.body).to.have.property('message', 'You must provide a timestamp.')
            })
    });

    it("Get Series API- apiKey missing", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'ts': timeStamp, 'hash': hash }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(409)
                expect(response.body).to.have.property('message', 'You must provide a user key.')
            })
    });
    it("Get Series API- Hash missing", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'ts': timeStamp, 'apikey': apiKey }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(409)
                expect(response.body).to.have.property('message', 'You must provide a hash.')
            })
    });
    it("Get Series API- apiKey incorrect", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'ts': timeStamp, 'apikey': apiKey + 1, 'hash': hash }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(401)
                expect(response.body).to.have.property('message', 'The passed API key is invalid.')
            })
    });
    it("Get Series API- invalid hash", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'ts': timeStamp, 'apikey': apiKey, 'hash': hash + 1 }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(401)
                expect(response.body).to.have.property('message', 'That hash, timestamp and key combination is invalid.')
            })
    });
    it("Get Series API- invalid HTTP method", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'post',
            failOnStatusCode: false,
            url: url + '/v1/public/series',
            qs: { 'ts': timeStamp, 'apikey': apiKey, 'hash': hash }
        })
            .then((response) => {
                console.log('Response is ->' + response.body.message)
                expect(response.status).to.eq(405)
                expect(response.body).to.have.property('message', 'POST is not allowed')
            })
    });
});

describe("Marvel Comics API", function () {
    it("Get Comic API- by Id ", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/comics/27649',
            qs: { 'ts': timeStamp, 'apikey': apiKey, 'hash': hash }
        })
            .then((response) => {
                console.log('response code is ->'+ response.status)
                console.log('comic id received in response ->' +response.body.data.results[0].id)
                expect(response.status).to.eq(200)
                expect(response.body.data.count).to.eq(1)
                expect(response.body.data.results[0].id).to.eq(27649)
            })
    });
}); 
describe("Marvel Character API", function () {
    it("Get Character API- by Id ", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/characters/1011010',
            qs: { 'ts': timeStamp, 'apikey': apiKey, 'hash': hash }
        })
            .then((response) => {
                console.log('response status code ->' + response.status)
                expect(response.status).to.eq(200)
                expect(response.body.data.count).to.eq(1)
                expect(response.body.data.results[0].name).to.eq('Spider-Man (Ultimate)')
                console.log('Name received in response ->' +response.body.data.results[0].name)
                expect(response.body.data.results[0].modified).to.gt('2014-01')
                var imagePath = response.body.data.results[0].thumbnail.path + '.' + response.body.data.results[0].thumbnail.extension
                cy.log(imagePath)
                console.log('image path ->' + imagePath)
                cy.request(imagePath).then((response) => {
                    expect(response.status).to.eq(200)
                });
            })
    });
});

describe("Marvel Character API for invalid id", function () {
    it("Get Character API- by Invalid Id ", function () {
        const util = new Utilities();
        var hash = util.generateHash();
        var timeStamp = util.getTimeStamp();
        var apiKey = util.getApiKey();
        var url = Cypress.env('baseUrl')

        cy.request({
            method: 'get',
            failOnStatusCode: false,
            url: url + '/v1/public/characters/10110102',
            qs: { 'ts': timeStamp, 'apikey': apiKey, 'hash': hash }
        })
            .then((response) => {
                console.log('Response received ->' +response.body.status)
                expect(response.status).to.eq(404)
                expect(response.body.status).to.eq('We couldn\'t find that character')
                expect(response.body).not.eq('Spider-Man (Ultimate)')
            })
        });
    });    
