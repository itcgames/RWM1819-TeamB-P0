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

  it("running_total of 2, 3, 7", function () {
    expect(running_total([2, 3, 7])).to.equal(12);
  });


  it("decrement < first: 10, -1, null", function(){
    expect(decrement_if_less_than_first([10,-1,null])).to.deep.equal([10,-2,-1]);
  });

  it("xor_21 of 4", function() {
    expect(xor_21(4)).to.equal(17);
  });

  it("collatz of 3", function() {
    expect(collatz(3)).to.equal(10);
  });

  it("diff of 4, 2, 8, 3, 9, 4, 10", function() {
    expect(diff([4, 2, 8, 3, 9, 4, 10])).to.deep.equal([4, 2, 6, 5, 6, 5, 6]);
  });

  it("fact of 8", function() {
    expect(fact(8)).to.equal(40320);
  });

  it("fizzbuzz of 30", function() {
    expect(fizzbuzz(30)).to.equal(0);
  });
});
