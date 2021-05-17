let expect = require('chai').expect;
let request = require('request');

describe('Status and content', function() {
    describe ('Users page', function() {
        it('status', function(done){
            request('http://localhost:5000/api/users/github/Donnpie',
                function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        // it('content', function(done) {
        //     request('http://localhost:3000/users',
        //     function(error, response, body) {
        //         expect(body).to.equal('respond with a resource');
        //         done();
        //     });
        // });
    });
});