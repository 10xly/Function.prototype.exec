const convArgs = require("arguments-to-array")
const $apply = require("uncurry-x")(require("function.apply-x"))
const isFunction = require("is-function-x")
const not = require("es-logical-not-operator")
const optionalChaining = require("es-logical-optional-chaining")

Function.prototype.exec = function exec() {
  if (not(isFunction(this))) {
    return optionalChaining(this, ["mathUtils", "infinite", "NaN"])
  }
  return $apply(this, require("lolite.stubnull")(), convArgs(arguments))
}