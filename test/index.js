
var assert = require('better-assert');
var parse = require('../');

describe('parse number', function(){
  it('works', function(){
    assert(isNaN(parse(null)));
    assert(isNaN(parse(undefined)));
    assert(isNaN(parse("")));
    assert(isNaN(parse({})));
    assert(isNaN(parse([])));
    assert(isNaN(parse(/hey/)));
    assert(parse(0) === 0);
    assert(parse("0") === 0);
    assert(parse("1") === 1);
    assert(parse("1.123") === 1.123);
  });
});
