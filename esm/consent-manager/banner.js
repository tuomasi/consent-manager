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
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'
var Root = styled.div(
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
  fontStyles,
  function(props) {
    return props.backgroundColor
  },
  function(props) {
    return props.textColor
  }
)
var Content = styled('div')(
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
var P = styled('p')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'],
      ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n']
    ))
)
var CloseButton = styled('button')(
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
    return React.createElement(
      Root,
      { innerRef: innerRef, backgroundColor: backgroundColor, textColor: textColor },
      React.createElement(
        Content,
        null,
        React.createElement(P, null, content),
        React.createElement(
          P,
          null,
          React.createElement(
            'button',
            { type: 'button', onClick: onChangePreferences },
            subContent
          )
        )
      ),
      React.createElement(
        CloseButton,
        { type: 'button', title: 'Close', 'aria-label': 'Close', onClick: onClose },
        '\u2715'
      )
    )
  }
  Banner.displayName = 'Banner'
  return Banner
})(PureComponent)
export default Banner
var templateObject_1, templateObject_2, templateObject_3, templateObject_4
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9iYW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxNQUFNLE1BQU0sZUFBZSxDQUFBO0FBQ2xDLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQTtBQU90QyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxxUEFBVyxNQUM5QixFQUFVLG1GQUlFLEVBQThCLGNBQ25DLEVBQXdCLHFFQUlsQyxLQVRHLFVBQVUsRUFJRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQ25DLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBSWxDLENBQUE7QUFFRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLCtRQUFBLDRNQVk1QixJQUFBLENBQUE7QUFFRCxJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDJJQUFBLHdFQUtwQixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGlUQUFBLDhPQWFuQyxJQUFBLENBQUE7QUFZRDtJQUFvQywwQkFBb0I7SUFBeEQ7O0lBK0JBLENBQUM7SUE1QkMsdUJBQU0sR0FBTjtRQUNRLElBQUEsS0FRRixJQUFJLENBQUMsS0FBSyxFQVBaLFFBQVEsY0FBQSxFQUNSLE9BQU8sYUFBQSxFQUNQLG1CQUFtQix5QkFBQSxFQUNuQixPQUFPLGFBQUEsRUFDUCxVQUFVLGdCQUFBLEVBQ1YsZUFBZSxxQkFBQSxFQUNmLFNBQVMsZUFDRyxDQUFBO1FBRWQsT0FBTyxDQUNMLG9CQUFDLElBQUksSUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDOUUsb0JBQUMsT0FBTztnQkFDTixvQkFBQyxDQUFDLFFBQUUsT0FBTyxDQUFLO2dCQUNoQixvQkFBQyxDQUFDO29CQUNBLGdDQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixJQUMvQyxVQUFVLENBQ0osQ0FDUCxDQUNJO1lBRVYsb0JBQUMsV0FBVyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLE9BQU8sZ0JBQVksT0FBTyxFQUFDLE9BQU8sRUFBRSxPQUFPLGFBRTlELENBQ1QsQ0FDUixDQUFBO0lBQ0gsQ0FBQztJQTdCTSxrQkFBVyxHQUFHLFFBQVEsQ0FBQTtJQThCL0IsYUFBQztDQUFBLEFBL0JELENBQW9DLGFBQWEsR0ErQmhEO2VBL0JvQixNQUFNIn0=
