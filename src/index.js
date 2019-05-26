"use strict";
exports.__esModule = true;
var fMod_1 = require("./fMod");
console.log('Hello fom TS');
fMod_1["default"]('1');
function hjg(x) {
    var o = {
        propOne: x.propOne + 1,
        propTwo: x.propTwo + ''
    };
    return o;
}
hjg({ propOne: 5, propTwo: 'djk' });
//# sourceMappingURL=index.js.map