const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');




test("Success testing", (t) => {
    t.equal(1, 1, "should be equal");
    t.end();
});

test('Testing for endpoint /', (t) => {
    supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            t.end();
        })
})

test("Testing /books endpoint", (t) => {
    supertest(app)
        .get('/books')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);
            // t.deepEqual(grabData(testObj))
            console.log(res.text);
            t.end();
        })
})