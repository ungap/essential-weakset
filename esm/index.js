/*! (c) Andrea Giammarchi - ISC */
try { new WeakSet; }
catch (o_O) {
  (function (C, dP) {
    WeakSet = function () {'use strict';
      dP(this, '_', {value: ['__', Math.random(), C++, '__'].join('ws')});
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
  }(0, Object.defineProperty));
}
export default WeakSet;
