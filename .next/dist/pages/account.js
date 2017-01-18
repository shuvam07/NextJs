'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('D:\\NEXT\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('D:\\NEXT\\node_modules\\next\\dist\\lib\\css.js');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.url.query.id;

  var item = _.find(_posts2.default, { id: id });

  return _react2.default.createElement(
    'div',
    { className: (0, _css.style)(styles.main) },
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.header) },
      _react2.default.createElement(
        'h3',
        null,
        ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.panel) },
      _react2.default.createElement(
        'h1',
        { className: (0, _css.style)(styles.heading) },
        'Character: ',
        item.codeName,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        'Real Name: ',
        item.realName,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        'Brief Description:',
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          ' ',
          item.story,
          ' '
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.singlePhoto) },
      _react2.default.createElement('img', { src: item.display_src, alt: item.realName, width: 500, height: 500 })
    )
  );
};

var styles = {
  main: {
    padding: '50px'
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  panel: {
    float: 'right',
    marginRight: '140px',
    width: '300px'
  },

  singlePhoto: {
    border: '1px solid #999',
    width: '500px',
    height: '500px',
    float: 'left'
  },

  heading: {
    font: '15px Monaco'
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxORVhUXFxwYWdlc1xcYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJfIiwiaWQiLCJ1cmwiLCJxdWVyeSIsIml0ZW0iLCJmaW5kIiwic3R5bGVzIiwibWFpbiIsImhlYWRlciIsInBhbmVsIiwiaGVhZGluZyIsImNvZGVOYW1lIiwicmVhbE5hbWUiLCJzdG9yeSIsInNpbmdsZVBob3RvIiwiZGlzcGxheV9zcmMiLCJwYWRkaW5nIiwiZm9udCIsInRleHRBbGlnbiIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFhQSxDOzs7Ozs7a0JBRUUsZ0JBQWdDO0FBQUEsTUFBYkMsRUFBYSxRQUE3QkMsR0FBNkIsQ0FBdEJDLEtBQXNCLENBQWJGLEVBQWE7O0FBQzdDLE1BQU1HLE9BQVFKLEVBQUVLLElBQUYsa0JBQWMsRUFBRUosSUFBSUEsRUFBTixFQUFkLENBQWQ7O0FBRUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXLGdCQUFNSyxPQUFPQyxJQUFiLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBTUQsT0FBT0UsTUFBYixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBTUYsT0FBT0csS0FBYixDQUFoQjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVcsZ0JBQU1ILE9BQU9JLE9BQWIsQ0FBZjtBQUFBO0FBQ2VOLGFBQUtPLFFBRHBCO0FBRUUsaURBRkY7QUFHRSxpREFIRjtBQUFBO0FBSWVQLGFBQUtRLFFBSnBCO0FBS0UsaURBTEY7QUFNRSxpREFORjtBQUFBO0FBUUUsaURBUkY7QUFTRSxpREFURjtBQVVFO0FBQUE7QUFBQTtBQUFBO0FBQVNSLGVBQUtTLEtBQWQ7QUFBQTtBQUFBO0FBVkY7QUFERixLQUpGO0FBbUJFO0FBQUE7QUFBQSxRQUFLLFdBQVcsZ0JBQU1QLE9BQU9RLFdBQWIsQ0FBaEI7QUFDRSw2Q0FBSyxLQUFNVixLQUFLVyxXQUFoQixFQUE2QixLQUFLWCxLQUFLUSxRQUF2QyxFQUFpRCxPQUFPLEdBQXhELEVBQTZELFFBQVEsR0FBckU7QUFERjtBQW5CRixHQURGO0FBeUJELEM7O0FBR0QsSUFBTU4sU0FBUztBQUNiQyxRQUFNO0FBQ0pTLGFBQVM7QUFETCxHQURPOztBQUtiUixVQUFRO0FBQ05TLFVBQU0sYUFEQTtBQUVOQyxlQUFXO0FBRkwsR0FMSzs7QUFVYlQsU0FBTztBQUNMVSxXQUFPLE9BREY7QUFFTEMsaUJBQWEsT0FGUjtBQUdMQyxXQUFPO0FBSEYsR0FWTTs7QUFnQmJQLGVBQWE7QUFDWFEsWUFBUSxnQkFERztBQUVYRCxXQUFPLE9BRkk7QUFHWEUsWUFBUSxPQUhHO0FBSVhKLFdBQU87QUFKSSxHQWhCQTs7QUF1QmJULFdBQVM7QUFDUE8sVUFBTTtBQURDO0FBdkJJLENBQWYiLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9ORVhUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vZGF0YS9wb3N0cydcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2NzcydcclxuaW1wb3J0ICogYXMgIF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsOiB7IHF1ZXJ5OiB7IGlkIH0gfSB9KSA9PiB7XHJcbiAgY29uc3QgaXRlbSA9ICBfLmZpbmQocG9zdHMsIHsgaWQ6IGlkIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLm1haW4pfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkZXIpfT5cclxuICAgICAgICA8aDM+IE5FWFRIUk9ORSAtIFRIRSBSRVZFTEFUSU9OIE9GIEdBTUUgT0YgVEhST05FUycgQ0hBUkFDVEVSUyA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5wYW5lbCl9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkaW5nKX0+XHJcbiAgICAgICAgICBDaGFyYWN0ZXI6IHsgaXRlbS5jb2RlTmFtZSB9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIFJlYWwgTmFtZTogeyBpdGVtLnJlYWxOYW1lIH1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgQnJpZWYgRGVzY3JpcHRpb246XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxzcGFuPiB7IGl0ZW0uc3RvcnkgfSA8L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnNpbmdsZVBob3RvKX0+XHJcbiAgICAgICAgPGltZyBzcmM9eyBpdGVtLmRpc3BsYXlfc3JjfSBhbHQ9e2l0ZW0ucmVhbE5hbWV9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBtYWluOiB7XHJcbiAgICBwYWRkaW5nOiAnNTBweCdcclxuICB9LFxyXG5cclxuICBoZWFkZXI6IHtcclxuICAgIGZvbnQ6ICcxNXB4IE1vbmFjbycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfSxcclxuXHJcbiAgcGFuZWw6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICcxNDBweCcsXHJcbiAgICB3aWR0aDogJzMwMHB4J1xyXG4gIH0sXHJcblxyXG4gIHNpbmdsZVBob3RvOiB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzk5OScsXHJcbiAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgIGZsb2F0OiAnbGVmdCdcclxuICB9LFxyXG5cclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250OiAnMTVweCBNb25hY28nXHJcbiAgfVxyXG59Il19