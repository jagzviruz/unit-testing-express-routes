import { assert, expect } from 'chai';
import { before } from 'mocha';
import request from 'supertest';
import express from 'express';

import usersRouter from '../src/api'

describe(__filename, () => {
  let app;

  before(() => {
    app = express();

    app.use('/users', usersRouter);
  })
  it('test users endpoint', (done) => {
    request(app)
      .get('/users/all')
      .expect(200)
      .end((err, { body }) => {
        if (err) console.log(err);

        assert(Array.isArray(body.users));
        const { users } = body;
        expect(users[0].name.first).to.equal('Delaney');
        done();
      });
  });
})
