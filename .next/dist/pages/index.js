'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('D:\\NEXT\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\NEXT\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\NEXT\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\NEXT\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\NEXT\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('D:\\NEXT\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('D:\\NEXT\\node_modules\\next\\dist\\lib\\css.js');

var _link = require('D:\\NEXT\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _css.style)(styles.header) },
          _react2.default.createElement(
            'h3',
            null,
            ' NEXTHRONE - THE REVELATION OF GAME OF THRONES CHARACTERS '
          )
        ),
        _react2.default.createElement(
          'table',
          { className: (0, _css.style)(styles.table) },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Character'
              ),
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Real Name'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.posts.map(function (post, i) {
              return _react2.default.createElement(
                'tr',
                { key: i },
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  post.codeName
                ),
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  _react2.default.createElement(
                    _link2.default,
                    { href: '/account?id=' + post.id },
                    post.realName
                  )
                )
              );
            })
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { posts: _posts2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px'
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxORVhUXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiaGVhZGVyIiwidGFibGUiLCJ0aCIsInByb3BzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaSIsInRkIiwiY29kZU5hbWUiLCJpZCIsInJlYWxOYW1lIiwiQ29tcG9uZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwibWFyZ2luIiwiYm9yZGVyQ29sbGFwc2UiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJsaXN0IiwicGhvdG8iLCJkaXNwbGF5IiwicGhvdG9MaW5rIiwidmVydGljYWxBbGlnbiIsImN1cnNvciIsIndpZHRoIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPWTtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFlBQUssV0FBVyxnQkFBTUEsT0FBT0MsTUFBYixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQURBO0FBSUE7QUFBQTtBQUFBLFlBQU8sV0FBVyxnQkFBTUQsT0FBT0UsS0FBYixDQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSSxXQUFXLGdCQUFNRixPQUFPRyxFQUFiLENBQWY7QUFBQTtBQUFBLGVBREo7QUFFSTtBQUFBO0FBQUEsa0JBQUksV0FBVyxnQkFBTUgsT0FBT0csRUFBYixDQUFmO0FBQUE7QUFBQTtBQUZKO0FBREYsV0FERjtBQU9FO0FBQUE7QUFBQTtBQUVNLGlCQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLHFCQUNsQjtBQUFBO0FBQUEsa0JBQUksS0FBS0EsQ0FBVDtBQUNJO0FBQUE7QUFBQSxvQkFBSSxXQUFXLGdCQUFNUixPQUFPUyxFQUFiLENBQWY7QUFBbUNGLHVCQUFLRztBQUF4QyxpQkFESjtBQUVJO0FBQUE7QUFBQSxvQkFBSSxXQUFXLGdCQUFNVixPQUFPUyxFQUFiLENBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQU0sdUJBQXFCRixLQUFLSSxFQUFoQztBQUF3Q0oseUJBQUtLO0FBQTdDO0FBREY7QUFGSixlQURrQjtBQUFBLGFBQXRCO0FBRk47QUFQRjtBQUpBLE9BREY7QUEyQkQ7OztzQ0FoQ3lCO0FBQ3hCLGFBQU8sRUFBRVAsc0JBQUYsRUFBUDtBQUNEOzs7RUFIMEIsZ0JBQU1RLFM7Ozs7O0FBb0NuQyxJQUFNYixTQUFTO0FBQ2JHLE1BQUk7QUFDRlcsZ0JBQVksU0FEVjtBQUVGQyxXQUFPLE1BRkw7QUFHRkMsbUJBQWUsV0FIYjtBQUlGQyxjQUFVLE1BSlI7QUFLRkMsYUFBUztBQUxQLEdBRFM7O0FBU2JqQixVQUFRO0FBQ05rQixVQUFNLGFBREE7QUFFTkMsZUFBVztBQUZMLEdBVEs7O0FBY2JsQixTQUFPO0FBQ0xtQixnQkFBWSxPQURQO0FBRUxDLFlBQVEsV0FGSDtBQUdMQyxvQkFBZ0IsVUFIWDtBQUlMQyxZQUFRLGdCQUpIO0FBS0xDLGtCQUFjO0FBTFQsR0FkTTs7QUFzQmJoQixNQUFJO0FBQ0ZNLFdBQU8sTUFETDtBQUVGUyxZQUFRLGdCQUZOO0FBR0ZOLGFBQVMsV0FIUDtBQUlGSyxvQkFBZ0I7QUFKZCxHQXRCUzs7QUE2QmJHLFFBQU07QUFDSlIsYUFBUyxNQURMO0FBRUpFLGVBQVc7QUFGUCxHQTdCTzs7QUFrQ2JPLFNBQU87QUFDTEMsYUFBUztBQURKLEdBbENNOztBQXNDYkMsYUFBVztBQUNUZCxXQUFPLE1BREU7QUFFVGUsbUJBQWUsUUFGTjtBQUdUQyxZQUFRLFNBSEM7QUFJVGpCLGdCQUFZLE1BSkg7QUFLVGMsYUFBUyxjQUxBO0FBTVRJLFdBQU8sT0FORTtBQU9UQyxZQUFRLE9BUEM7QUFRVEMsZ0JBQVksT0FSSDtBQVNUWixZQUFRLE1BVEM7QUFVVEUsWUFBUSx1QkFWQztBQVdULGNBQVU7QUFDUlcsbUJBQWE7QUFETDtBQVhEO0FBdENFLENBQWYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovTkVYVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXHJcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcclxuICAgIHJldHVybiB7IHBvc3RzOiBwb3N0cyB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkZXIpfT5cclxuICAgICAgICA8aDM+IE5FWFRIUk9ORSAtIFRIRSBSRVZFTEFUSU9OIE9GIEdBTUUgT0YgVEhST05FUyBDSEFSQUNURVJTIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGFibGUpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnRoKX0+Q2hhcmFjdGVyPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGgpfT5SZWFsIE5hbWU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCggKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGQpfT57IHBvc3QuY29kZU5hbWUgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hY2NvdW50P2lkPSR7cG9zdC5pZH1gfT57IHBvc3QucmVhbE5hbWUgfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRoOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzAwY2NjYycsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgcGFkZGluZzogJzEycHggMzVweCcsXHJcbiAgfSxcclxuXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBmb250OiAnMTVweCBNb25hY28nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcblxyXG4gIHRhYmxlOiB7XHJcbiAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgbWFyZ2luOiAnMjVweCBhdXRvJyxcclxuICAgIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkICMwMGNjY2MnXHJcbiAgfSxcclxuXHJcbiAgdGQ6IHtcclxuICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2VlZScsXHJcbiAgICBwYWRkaW5nOiAnMTJweCAzNXB4JyxcclxuICAgIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnXHJcbiAgfSxcclxuXHJcbiAgbGlzdDoge1xyXG4gICAgcGFkZGluZzogJzUwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcblxyXG4gIHBob3RvOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gIH0sXHJcblxyXG4gIHBob3RvTGluazoge1xyXG4gICAgY29sb3I6ICcjMzMzJyxcclxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgbGluZUhlaWdodDogJzI1MHB4JyxcclxuICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYmx1ZSdcclxuICAgIH1cclxuICB9XHJcbn0iXX0=