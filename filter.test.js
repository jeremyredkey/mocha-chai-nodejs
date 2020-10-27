const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');
const filter = require('../app');

it('should sort by title', () => {
    return supertest(app)
      .get('/app')
      .query({ sort: 'App' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');

      });
  });

  it('should sort by title', () => {
    return supertest(app)
      .get('/app')
      .query({ genres: 'Action' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body[0].Genres).includes("Action")
      });
  });