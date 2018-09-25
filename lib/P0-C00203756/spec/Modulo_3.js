var path = require('path');
var expect = require('chai').expect;

var Modulo_3 = require(path.join(__dirname, '..', './Modulo_3.js'));

describe('Modulo_3()', function () {
  'use strict';

  it('exists', function () {
    expect(Modulo_3).to.be.a('function');
  });

  it('computes mod 3', function() {
    const input = [7, 2, 8, 3, 9, 4, 10, 5, 11, 6];
    const output = [1, 2, 2, 0, 0, 1, 1, 2, 2, 0];

    const length = input.length;
  
    for (let i= 0; i < length; i++) {
      expect(Modulo_3(input[i])).to.equal(output[i]);
    }
  });

  // Add more assertions here
});
