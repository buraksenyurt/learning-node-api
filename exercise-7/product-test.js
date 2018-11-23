var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[Product Controller tests]', function () {

    var sampleProduct = {
        title: 'kilo patates',
        quantity: 3,
        unit: 'kilo',
        unitPrice: 3.45,
        category: 'gıda'
    };

    it('should get all product list', function (done) {
        request(app)
            .get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, resp) {
                expect(resp.body).to.be.an('array');
                done();
            });
    });

    it('should create a product', function (done) {
        request(app)
            .post('/products')
            .send(sampleProduct)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, resp) {
                expect(resp.body).to.be.an('object');
                done();
            });
    });

    it('should create another new product', function (done) {
        request(app)
            .post('/products')
            .send(
                {
                    title: 'kivi',
                    quantity: 10,
                    unit: 'adet',
                    unitPrice: 6.45,
                    category: 'gıda'
                })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function (err, resp) {
                expect(resp.body).to.be.an('object');
                done();
            });
    });

    it('should delete a product', function (done) {
        request(app)
            .delete('/products/1')
            .end(function (err, resp) {
                expect(resp.body).to.eql(sampleProduct);
                done();
            });
    });

    it('should update a product', function (done) {
        request(app)
            .put('/products/2')
            .send({
                quantity: 15,
                unitPrice: 6
            })
            .end(function (err, res) {
                expect(res.body.quantity).to.equal(15);
                expect(res.body.unitPrice).to.equal(6);
                done();
            });
    });

    //todo: complete other tests(put, get(id) etc...) and fix failed tests
});