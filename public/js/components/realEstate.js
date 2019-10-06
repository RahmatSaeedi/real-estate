webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'h4',
          null,
          'Filter'
        ),
        _react2.default.createElement(
          'select',
          { name: 'neighbourhood', className: 'filters neighbourhood' },
          _react2.default.createElement(
            'option',
            null,
            'Castle Downs'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Northgate'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Southgate'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Downtown'
          )
        ),
        _react2.default.createElement(
          'select',
          { name: 'house-type', className: 'filters house-type' },
          _react2.default.createElement(
            'option',
            null,
            'Townhouse'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Semi-detached'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Duplex'
          ),
          _react2.default.createElement(
            'option',
            null,
            'Apartment'
          )
        ),
        _react2.default.createElement(
          'select',
          { name: 'bedrooms', className: 'filters bedrooms' },
          _react2.default.createElement(
            'option',
            null,
            '1 bedroom'
          ),
          _react2.default.createElement(
            'option',
            null,
            '2 bedroom'
          ),
          _react2.default.createElement(
            'option',
            null,
            '3+ bedroom'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters price' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Price'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min-price' }),
          _react2.default.createElement('input', { type: 'text', name: 'max-price' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters space' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Floor Space'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min-space' }),
          _react2.default.createElement('input', { type: 'text', name: 'max-space' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters extras' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            ' Extras '
          ),
          _react2.default.createElement(
            'label',
            null,
            'Elevators',
            _react2.default.createElement('input', { type: 'checkbox', value: 'elevators', name: 'extras' })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Swimming pool',
            _react2.default.createElement('input', { type: 'checkbox', value: 'swimmingPool', name: 'extras' })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Finished Basement',
            _react2.default.createElement('input', { type: 'checkbox', value: 'finishedBasement', name: 'extras' })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Gym',
            _react2.default.createElement('input', { type: 'checkbox', value: 'gym', name: 'extras' })
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About Us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Login"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(239);

var _freeSolidSvgIcons = __webpack_require__(238);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { id: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { id: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', id: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dec' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faList, className: 'fa' }),
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTh, className: 'fa' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-3' },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img' },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  '12345 - 12 Street'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement('div', { className: 'user-img' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Jane Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '2019/05/05'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      ' ',
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '1500 ft\xB2'
                      ),
                      ' '
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        null,
                        '3 bedrooms'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-listing-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'rent' },
                  '$1000 / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                  ' Northgate, Edmonton'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              null,
              '1'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              '6'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '123 - 95 Avenue',
  location: 'Castle Downs',
  city: 'Edmonton',
  rooms: 1,
  price: 850,
  floorSpace: 1850,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://cdn.pixabay.com/photo/2018/08/09/06/41/apartment-3593876_960_720.jpg'
}, {
  address: '5483 - 78 St',
  location: 'Northgate',
  city: 'Edmonton',
  rooms: 2,
  price: 950,
  floorSpace: 1500,
  extras: ['gym'],
  homeType: 'Apartment',
  image: 'https://cdn.pixabay.com/photo/2018/02/12/10/07/apartment-lounge-3147892_960_720.jpg'
}, {
  address: '604 - 79 Street',
  location: 'Southgate',
  city: 'Edmonton',
  rooms: 3,
  price: 1150,
  floorSpace: 1000,
  extras: ['pool', 'basement'],
  homeType: 'Townhouse',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TownHouse_Galleria_new_entrance.jpg/640px-TownHouse_Galleria_new_entrance.jpg'
}, {
  address: '7890 - 86 Street',
  location: 'Downtown',
  city: 'Edmonton',
  rooms: 4,
  price: 1450,
  floorSpace: 1400,
  extras: ['pool', 'gym'],
  homeType: 'Duplex',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duplex_house_in_Yeronga_03.2014.jpg/640px-Duplex_house_in_Yeronga_03.2014.jpg'
}, {
  address: '945 - 33 Street',
  location: 'Northgate',
  city: 'Edmonton',
  rooms: 2,
  price: 1650,
  floorSpace: 1500,
  extras: ['pool', 'gym', 'basement'],
  homeType: 'Semi-detached',
  image: 'https://live.staticflickr.com/3179/2698850178_fc45097068_b.jpg'
}, {
  address: '91 - 12 Avenue',
  location: 'Downtown',
  city: 'Edmonton',
  rooms: 1,
  price: 850,
  floorSpace: 2000,
  extras: ['basement', 'gym'],
  homeType: 'Semi-detached',
  image: 'https://s0.geograph.org.uk/geophotos/05/01/87/5018764_5e96cafa.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RealEstate = function (_Component) {
  _inherits(RealEstate, _Component);

  function RealEstate() {
    _classCallCheck(this, RealEstate);

    var _this = _possibleConstructorReturn(this, (RealEstate.__proto__ || Object.getPrototypeOf(RealEstate)).call(this));

    _this.state = {
      listingsData: _listingsData2.default
    };
    return _this;
  }

  _createClass(RealEstate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, null),
          _react2.default.createElement(_Listings2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          'welp'
        )
      );
    }
  }]);

  return RealEstate;
}(_react.Component);

var app = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(RealEstate, null), app);

/***/ })

},[240]);