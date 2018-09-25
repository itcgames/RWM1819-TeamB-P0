/* global p0TeamB, describe, it, expect, should */

describe('p0TeamB()', function () {
  'use strict';

  it('exists', function () {
    expect(p0TeamB).to.be.a('function');

  });

  it('Cubed of 2', function () {
    expect(Cube(2)).to.equal(8);
  });

  it('modulo_first of 2 into 2, 3, 6, and 5', function () {
    expect(modulo_first([2, 3, 6, 5])).to.deep.equal([0,1,0,1]);
  });

  it("Modulo_3 of 3", function () {
    expect(Modulo_3(3)).to.equal(0);
  });

  it("Modulo_3 of 7", function () {
    expect(Modulo_3(7)).to.equal(1);
  });
});