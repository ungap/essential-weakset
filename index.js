/*! (c) Andrea Giammarchi - ISC */
try { new WeakSet; }
catch (o_O) {
  (function (id, dP) {
    WeakSet = function () {'use strict';
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
    };
    var proto = WeakSet.prototype;
    proto.add = function (object) {
      if (!this.has(object))
        dP(object, this._, {value: true, configurable: true});
      return this;
    };
    proto.has = function (object) {
      return this.hasOwnProperty.call(object, this._);
    };
    proto.delete = function (object) {
      return this.has(object) && delete object[this._];
    };
  }(Math.random(), Object.defineProperty));
}
