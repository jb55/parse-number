
/**
 * More correct array check
 */
var parser = module.exports = function(str) {
  if (Array.isArray(str)) return null;
  return parser.str(str);
}

/**
 * Simple check, assumes non-array inputs
 */
parser.str = function(str) {
  if (str == null || str === "") return null;
  var num = +str;
  return isNaN(num)? null : num;
}
