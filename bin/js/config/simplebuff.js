/*
Author:
Data:
Desc: local data config
NOTE: Don't modify this file, it's build by xml-to-python!!!
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var config;
(function (config) {
    var simplebuff_map = null;
    function simplebuff_map_init(config_obj) {
        simplebuff_map = config_obj["simplebuff_map"];
    }
    config.simplebuff_map_init = simplebuff_map_init;
    var Simplebuff = /** @class */ (function (_super) {
        __extends(Simplebuff, _super);
        function Simplebuff(key) {
            var _this = _super.call(this) || this;
            _this.m_config = simplebuff_map[key];
            for (var i in _this.m_config) {
                _this[i] = _this.m_config[i];
            }
            return _this;
        }
        Simplebuff.get_Simplebuff = function (key) {
            if (Simplebuff.m_static_map.hasOwnProperty(key) == false) {
                Simplebuff.m_static_map[key] = Simplebuff.create_Simplebuff(key);
            }
            return Simplebuff.m_static_map[key];
        };
        Simplebuff.create_Simplebuff = function (key) {
            if (simplebuff_map.hasOwnProperty(key)) {
                return new Simplebuff(key);
            }
            return null;
        };
        Simplebuff.get_cfg_object = function () {
            return simplebuff_map;
        };
        Simplebuff.m_static_map = new Object();
        return Simplebuff;
    }(Object));
    config.Simplebuff = Simplebuff;
})(config || (config = {}));
//# sourceMappingURL=simplebuff.js.map