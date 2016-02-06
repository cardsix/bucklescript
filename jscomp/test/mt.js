// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Assert     = require("assert");
var Caml_curry = require("../runtime/caml_curry");
var List       = require("../stdlib/list");

function assert_equal(prim, prim$1) {
  return Assert.deepEqual(prim, prim$1);
}

function assert_notequal(prim, prim$1) {
  return Assert.notDeepEqual(prim, prim$1);
}

function from_suites(name, suite) {
  return describe(name, function () {
              return List.iter(function (param) {
                          return it(param[1], param[2]);
                        }, suite);
            });
}

function from_pair_suites(name, suites) {
  return describe(name, function () {
              return List.iter(function (param) {
                          var code = param[2];
                          return it(param[1], function () {
                                      var match = Caml_curry.app1(code, /* () */0);
                                      if (match[0]) {
                                        return Assert.notDeepEqual(match[1], match[2]);
                                      }
                                      else {
                                        return Assert.deepEqual(match[1], match[2]);
                                      }
                                    });
                        }, suites);
            });
}

exports.assert_equal     = assert_equal;
exports.assert_notequal  = assert_notequal;
exports.from_suites      = from_suites;
exports.from_pair_suites = from_pair_suites;
/* assert Not a pure module */
