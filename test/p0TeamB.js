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

  it("running_total of 2, 3, 7", function () {
    expect(running_total([2, 3, 7])).to.equal(12);
  });

  it("running_total of -2, 3, -7", function () {
    expect(running_total([-2, 3, -7])).to.equal(-6);
  });

  it("decrement < first: 4, 3, 5", function(){
    expect(decrement_if_less_than_first([4,3,5])).to.deep.equal([4,2,5]);
  });

  it("decrement < first: 10, -1, null", function(){
    expect(decrement_if_less_than_first([10,-1,null])).to.deep.equal([10,-2,-1]);
  });
});