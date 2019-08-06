const test = require('tape');
const supertest = require('supertest');

test("Success testing", (t) => {
    t.equal(1, 1, "should be equal");
    t.end();
});