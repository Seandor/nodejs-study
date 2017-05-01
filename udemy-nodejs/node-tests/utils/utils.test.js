const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });


  it('should square a number', () => {
    var result = utils.square(3);

    expect(result).toBe(9).toBeA('number');
  });

  it('should set first and last name', () => {
    var user = { location: 'Shanghai', age: 24 };
    var res = utils.setName(user, 'Sean Ling');

    expect(user).toInclude({
      firstName: 'Sean',
      lastName: 'Ling'
    });
  });
})
