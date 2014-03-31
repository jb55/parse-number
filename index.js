
module.exports = function(str) {
  if (str == null) return null;
  var num = +str;
  return isNaN(num)? null : num;
}
