
module.exports = function(str) {
  if (str == null || Array.isArray(str)) return null;
  var num = +str;
  return isNaN(num)? null : num;
}
