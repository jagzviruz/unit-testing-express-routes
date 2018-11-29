import { assert } from 'chai';
import { before } from 'mocha';

describe(__filename, () => {
  before(() => {
    console.log('bootstrap all tests in here');
  })
  it('test users endpoint', () => {
    assert(true);
  });
})
