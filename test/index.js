
var assert = require('better-assert');
var parse = require('../');

describe('parse number', function(){
  it('works', function(){
    assert(parse(null) === null);
    assert(parse(undefined) === null);
    assert(parse("") === null);
    assert(parse({}) === null);
    assert(parse([]) === null);
    assert(parse(/hey/) === null);
    assert(parse(0) === 0);
    assert(parse("0") === 0);
    assert(parse("1") === 1);
    assert(parse("1.123") === 1.123);
  });

  it('simpler check fails on array', function(){
    assert(parse.str([]) === 0);
  });
});
