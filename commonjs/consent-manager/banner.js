'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function() {
            return m[k]
          }
        })
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function(o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_emotion_1 = __importDefault(require('react-emotion'))
var font_styles_1 = __importDefault(require('./font-styles'))
var Root = react_emotion_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  padding-right: 40px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  padding: 8px;\n  padding-right: 40px;\n  background: ',
        ';\n  color: ',
        ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'
      ]
    )),
  font_styles_1.default,
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var Content = react_emotion_1.default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n'
      ],
      [
        '\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n'
      ]
    ))
)
var P = react_emotion_1.default('p')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'],
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n']
    ))
)
var CloseButton = react_emotion_1.default('button')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ],
      [
        '\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ]
    ))
)
var Banner = /** @class */ (function(_super) {
  __extends(Banner, _super)
  function Banner() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Banner.prototype.render = function() {
    var _a = this.props,
      innerRef = _a.innerRef,
      onClose = _a.onClose,
      onChangePreferences = _a.onChangePreferences,
      content = _a.content,
      subContent = _a.subContent,
      backgroundColor = _a.backgroundColor,
      textColor = _a.textColor
    return react_1.default.createElement(
      Root,
      { innerRef: innerRef, backgroundColor: backgroundColor, textColor: textColor },
      react_1.default.createElement(
        Content,
        null,
        react_1.default.createElement(P, null, content),
        react_1.default.createElement(
          P,
          null,
          react_1.default.createElement(
            'button',
            { type: 'button', onClick: onChangePreferences },
            subContent
          )
        )
      ),
      react_1.default.createElement(
        CloseButton,
        { type: 'button', title: 'Close', 'aria-label': 'Close', onClick: onClose },
        '\u2715'
      )
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(react_1.PureComponent)
exports.default = Banner
var templateObject_1, templateObject_2, templateObject_3, templateObject_4
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLGdFQUFrQztBQUNsQyw4REFBc0M7QUFPdEMsSUFBTSxJQUFJLEdBQUcsdUJBQU0sQ0FBQyxHQUFHLHFQQUFXLE1BQzlCLEVBQVUsbUZBSUUsRUFBOEIsY0FDbkMsRUFBd0IscUVBSWxDLEtBVEcscUJBQVUsRUFJRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBSWxDLENBQUE7QUFFRCxJQUFNLE9BQU8sR0FBRyx1QkFBTSxDQUFDLEtBQUssQ0FBQywrUUFBQSw0TUFZNUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxDQUFDLEdBQUcsdUJBQU0sQ0FBQyxHQUFHLENBQUMsMklBQUEsd0VBS3BCLElBQUEsQ0FBQTtBQUVELElBQU0sV0FBVyxHQUFHLHVCQUFNLENBQUMsUUFBUSxDQUFDLGlUQUFBLDhPQWFuQyxJQUFBLENBQUE7QUFZRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBK0JBLENBQUM7SUE1QkMsdUJBQU0sR0FBTjtRQUNRLElBQUEsS0FRRixJQUFJLENBQUMsS0FBSyxFQVBaLFFBQVEsY0FBQSxFQUNSLE9BQU8sYUFBQSxFQUNQLG1CQUFtQix5QkFBQSxFQUNuQixPQUFPLGFBQUEsRUFDUCxVQUFVLGdCQUFBLEVBQ1YsZUFBZSxxQkFBQSxFQUNmLFNBQVMsZUFDRyxDQUFBO1FBRWQsT0FBTyxDQUNMLDhCQUFDLElBQUksSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDOUUsOEJBQUMsT0FBTztnQkFDTiw4QkFBQyxDQUFDLFFBQUUsT0FBTyxDQUFLO2dCQUNoQiw4QkFBQyxDQUFDO29CQUNBLDBDQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixJQUMvQyxVQUFVLENBQ0osQ0FDUCxDQUNJO1lBRVYsOEJBQUMsV0FBVyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLE9BQU8sZ0JBQVksT0FBTyxFQUFDLE9BQU8sRUFBRSxPQUFPLGFBRTlELENBQ1QsQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQTdCTSxrQkFBVyxHQUFHLFFBQVEsQ0FBQTtJQThCL0IsYUFBQztDQUFBLEFBL0JELENBQW9DLHFCQUFhLEdBK0JoRDtrQkEvQm9CLE1BQU0ifQ==