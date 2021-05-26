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
var react_emotion_1 = __importStar(require('react-emotion'))
var dialog_1 = __importDefault(require('./dialog'))
var buttons_1 = require('./buttons')
var hideOnMobile = react_emotion_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = react_emotion_1.default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = react_emotion_1.default('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = react_emotion_1.default('th')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ],
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ]
    ))
)
var RowHeading = react_emotion_1.default('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = react_emotion_1.default('tr')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ],
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ]
    ))
)
var InputCell = react_emotion_1.default('td')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ],
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'
      ]
    ))
)
var PreferenceDialog = /** @class */ (function(_super) {
  __extends(PreferenceDialog, _super)
  function PreferenceDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange
      onChange(e.target.name, e.target.value === 'true')
    }
    _this.handleSubmit = function(e) {
      var _a = _this.props,
        onSave = _a.onSave,
        preferences = _a.preferences,
        marketingAndAnalytics = _a.marketingAndAnalytics,
        advertising = _a.advertising,
        functional = _a.functional,
        customCategories = _a.customCategories
      e.preventDefault()
      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (
        !customCategories &&
        (marketingAndAnalytics === null || advertising === null || functional === null)
      ) {
        return
      }
      // Safe guard against custom categories being null
      if (
        customCategories &&
        Object.keys(customCategories).some(function(category) {
          return preferences[category] === null
        })
      ) {
        return
      }
      onSave()
    }
    return _this
  }
  PreferenceDialog.prototype.render = function() {
    var _this = this
    var _a = this.props,
      innerRef = _a.innerRef,
      onCancel = _a.onCancel,
      marketingDestinations = _a.marketingDestinations,
      advertisingDestinations = _a.advertisingDestinations,
      functionalDestinations = _a.functionalDestinations,
      marketingAndAnalytics = _a.marketingAndAnalytics,
      advertising = _a.advertising,
      functional = _a.functional,
      customCategories = _a.customCategories,
      destinations = _a.destinations,
      title = _a.title,
      content = _a.content,
      preferences = _a.preferences
    var buttons = react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement(
        buttons_1.DefaultButton,
        { type: 'button', onClick: onCancel },
        'Cancel'
      ),
      react_1.default.createElement(buttons_1.GreenButton, { type: 'submit' }, 'Save')
    )
    return react_1.default.createElement(
      dialog_1.default,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      react_1.default.createElement(
        TableScroll,
        null,
        react_1.default.createElement(
          Table,
          null,
          react_1.default.createElement(
            'thead',
            null,
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Allow'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Category'),
              react_1.default.createElement(ColumnHeading, { scope: 'col' }, 'Purpose'),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                'Tools'
              )
            )
          ),
          react_1.default.createElement(
            'tbody',
            null,
            !customCategories &&
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'true',
                        checked: functional === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow functional tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'false',
                        checked: functional === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow functional tracking',
                        required: true
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, 'Functional'),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'To monitor the performance of our site and to enhance your browsing experience.'
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, these tools enable you to communicate with us via live chat.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'true',
                        checked: marketingAndAnalytics === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow marketing and analytics tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'false',
                        checked: marketingAndAnalytics === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow marketing and analytics tracking',
                        required: true
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    'Marketing and Analytics'
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.'
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, we collect information about which pages you visit to help us present more relevant information.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'true',
                        checked: advertising === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow advertising tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'false',
                        checked: advertising === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow advertising tracking',
                        required: true
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, 'Advertising'),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      'To personalize and measure the effectiveness of advertising on our site and other websites.'
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, we may serve you a personalized ad based on the pages you visit on our site.'
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    advertisingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              ),
            customCategories &&
              Object.entries(customCategories).map(function(_a) {
                var categoryName = _a[0],
                  _b = _a[1],
                  integrations = _b.integrations,
                  purpose = _b.purpose
                return react_1.default.createElement(
                  Row,
                  { key: categoryName },
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'true',
                        checked: preferences[categoryName] === true,
                        onChange: _this.handleChange,
                        'aria-label': 'Allow "' + categoryName + '" tracking',
                        required: true
                      }),
                      ' ',
                      'Yes'
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'false',
                        checked: preferences[categoryName] === false,
                        onChange: _this.handleChange,
                        'aria-label': 'Disallow "' + categoryName + '" tracking',
                        required: true
                      }),
                      ' ',
                      'No'
                    )
                  ),
                  react_1.default.createElement(RowHeading, { scope: 'row' }, categoryName),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement('p', null, purpose)
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    destinations
                      .filter(function(d) {
                        return integrations.includes(d.id)
                      })
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              }),
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement('td', null, 'N/A'),
              react_1.default.createElement(RowHeading, { scope: 'row' }, 'Essential'),
              react_1.default.createElement(
                'td',
                null,
                react_1.default.createElement(
                  'p',
                  null,
                  'We use browser cookies that are necessary for the site to work as intended.'
                ),
                react_1.default.createElement(
                  'p',
                  null,
                  'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
                )
              ),
              react_1.default.createElement('td', { className: hideOnMobile })
            )
          )
        )
      )
    )
  }
  PreferenceDialog.displayName = 'PreferenceDialog'
  PreferenceDialog.defaultProps = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
  }
  return PreferenceDialog
})(react_1.PureComponent)
exports.default = PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyw2REFBMkM7QUFDM0Msb0RBQTZCO0FBQzdCLHFDQUFzRDtBQUd0RCxJQUFNLFlBQVksR0FBRyxtQkFBRywrSEFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxLQUFLLENBQUMsaUhBQUEsOENBR2hDLElBQUEsQ0FBQTtBQUVELElBQU0sS0FBSyxHQUFHLHVCQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQUMsb0hBQUEsaURBRzlCLElBQUEsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyw0TUFBQSx5SUFTN0IsSUFBQSxDQUFBO0FBb0JEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQThSQztRQWpDQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsUUFBUSxHQUFLLEtBQUksQ0FBQyxLQUFLLFNBQWYsQ0FBZTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLENBQW1DO1lBQzNDLElBQUEsS0FPRixLQUFJLENBQUMsS0FBSyxFQU5aLE1BQU0sWUFBQSxFQUNOLFdBQVcsaUJBQUEsRUFDWCxxQkFBcUIsMkJBQUEsRUFDckIsV0FBVyxpQkFBQSxFQUNYLFVBQVUsZ0JBQUEsRUFDVixnQkFBZ0Isc0JBQ0osQ0FBQTtZQUNkLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNsQixxREFBcUQ7WUFDckQsOENBQThDO1lBQzlDLElBQ0UsQ0FBQyxnQkFBZ0I7Z0JBQ2pCLENBQUMscUJBQXFCLEtBQUssSUFBSSxJQUFJLFdBQVcsS0FBSyxJQUFJLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxFQUMvRTtnQkFDQSxPQUFNO2FBQ1A7WUFFRCxrREFBa0Q7WUFDbEQsSUFDRSxnQkFBZ0I7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUE5QixDQUE4QixDQUFDLEVBQzlFO2dCQUNBLE9BQU07YUFDUDtZQUNELE1BQU0sRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFBOztJQUNILENBQUM7SUFyUkMsaUNBQU0sR0FBTjtRQUFBLGlCQWtQQztRQWpQTyxJQUFBLEtBY0YsSUFBSSxDQUFDLEtBQUssRUFiWixRQUFRLGNBQUEsRUFDUixRQUFRLGNBQUEsRUFDUixxQkFBcUIsMkJBQUEsRUFDckIsdUJBQXVCLDZCQUFBLEVBQ3ZCLHNCQUFzQiw0QkFBQSxFQUN0QixxQkFBcUIsMkJBQUEsRUFDckIsV0FBVyxpQkFBQSxFQUNYLFVBQVUsZ0JBQUEsRUFDVixnQkFBZ0Isc0JBQUEsRUFDaEIsWUFBWSxrQkFBQSxFQUNaLEtBQUssV0FBQSxFQUNMLE9BQU8sYUFBQSxFQUNQLFdBQVcsaUJBQ0MsQ0FBQTtRQUNkLElBQU0sT0FBTyxHQUFHLENBQ2Q7WUFDRSw4QkFBQyx1QkFBYSxJQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLFFBQVEsYUFFOUI7WUFDaEIsOEJBQUMscUJBQVcsSUFBQyxJQUFJLEVBQUMsUUFBUSxXQUFtQixDQUN6QyxDQUNQLENBQUE7UUFDRCxPQUFPLENBQ0wsOEJBQUMsZ0JBQU0sSUFDTCxRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUUxQixPQUFPO1lBRVIsOEJBQUMsV0FBVztnQkFDViw4QkFBQyxLQUFLO29CQUNKO3dCQUNFLDhCQUFDLEdBQUc7NEJBQ0YsOEJBQUMsYUFBYSxJQUFDLEtBQUssRUFBQyxLQUFLLFlBQXNCOzRCQUNoRCw4QkFBQyxhQUFhLElBQUMsS0FBSyxFQUFDLEtBQUssZUFBeUI7NEJBQ25ELDhCQUFDLGFBQWEsSUFBQyxLQUFLLEVBQUMsS0FBSyxjQUF3Qjs0QkFDbEQsOEJBQUMsYUFBYSxJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFFLFlBQVksWUFFbEMsQ0FDWixDQUNBO29CQUVSO3dCQUNHLENBQUMsZ0JBQWdCLElBQUksQ0FDcEI7NEJBQ0UsOEJBQUMsR0FBRztnQ0FDRiw4QkFBQyxTQUFTO29DQUNSO3dDQUNFLHlDQUNFLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxFQUFDLFlBQVksRUFDakIsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUUsVUFBVSxLQUFLLElBQUksRUFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLGdCQUNoQiwyQkFBMkIsRUFDdEMsUUFBUSxTQUNSO3dDQUFDLEdBQUc7OENBRUE7b0NBQ1I7d0NBQ0UseUNBQ0UsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLEVBQUMsWUFBWSxFQUNqQixLQUFLLEVBQUMsT0FBTyxFQUNiLE9BQU8sRUFBRSxVQUFVLEtBQUssS0FBSyxFQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksZ0JBQ2hCLDhCQUE4QixFQUN6QyxRQUFRLFNBQ1I7d0NBQUMsR0FBRzs2Q0FFQSxDQUNFO2dDQUNaLDhCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyxpQkFBd0I7Z0NBQy9DO29DQUNFLDJIQUdJO29DQUNKLHFDQUFHLFNBQVMsRUFBRSxZQUFZLGdGQUV0QixDQUNEO2dDQUNMLHNDQUFJLFNBQVMsRUFBRSxZQUFZLElBQ3hCLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNoRCxDQUNEOzRCQUVOLDhCQUFDLEdBQUc7Z0NBQ0YsOEJBQUMsU0FBUztvQ0FDUjt3Q0FDRSx5Q0FDRSxJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksRUFBQyx1QkFBdUIsRUFDNUIsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUUscUJBQXFCLEtBQUssSUFBSSxFQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksZ0JBQ2hCLHdDQUF3QyxFQUNuRCxRQUFRLFNBQ1I7d0NBQUMsR0FBRzs4Q0FFQTtvQ0FDUjt3Q0FDRSx5Q0FDRSxJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksRUFBQyx1QkFBdUIsRUFDNUIsS0FBSyxFQUFDLE9BQU8sRUFDYixPQUFPLEVBQUUscUJBQXFCLEtBQUssS0FBSyxFQUN4QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksZ0JBQ2hCLDJDQUEyQyxFQUN0RCxRQUFRLFNBQ1I7d0NBQUMsR0FBRzs2Q0FFQSxDQUNFO2dDQUNaLDhCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyw4QkFBcUM7Z0NBQzVEO29DQUNFLGdMQUdJO29DQUNKLHFDQUFHLFNBQVMsRUFBRSxZQUFZLG9IQUd0QixDQUNEO2dDQUNMLHNDQUFJLFNBQVMsRUFBRSxZQUFZLElBQ3hCLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUMvQyxDQUNEOzRCQUVOLDhCQUFDLEdBQUc7Z0NBQ0YsOEJBQUMsU0FBUztvQ0FDUjt3Q0FDRSx5Q0FDRSxJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksRUFBQyxhQUFhLEVBQ2xCLEtBQUssRUFBQyxNQUFNLEVBQ1osT0FBTyxFQUFFLFdBQVcsS0FBSyxJQUFJLEVBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxnQkFDaEIsNEJBQTRCLEVBQ3ZDLFFBQVEsU0FDUjt3Q0FBQyxHQUFHOzhDQUVBO29DQUNSO3dDQUNFLHlDQUNFLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxFQUFDLGFBQWEsRUFDbEIsS0FBSyxFQUFDLE9BQU8sRUFDYixPQUFPLEVBQUUsV0FBVyxLQUFLLEtBQUssRUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLGdCQUNoQiwrQkFBK0IsRUFDMUMsUUFBUSxTQUNSO3dDQUFDLEdBQUc7NkNBRUEsQ0FDRTtnQ0FDWiw4QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssa0JBQXlCO2dDQUNoRDtvQ0FDRSx1SUFHSTtvQ0FDSixxQ0FBRyxTQUFTLEVBQUUsWUFBWSxnR0FHdEIsQ0FDRDtnQ0FDTCxzQ0FBSSxTQUFTLEVBQUUsWUFBWSxJQUN4Qix1QkFBdUIsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDakQsQ0FDRCxDQUNMLENBQ0o7d0JBRUEsZ0JBQWdCOzRCQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQ2xDLFVBQUMsRUFBeUM7b0NBQXhDLFlBQVksUUFBQSxFQUFFLFVBQXlCLEVBQXZCLFlBQVksa0JBQUEsRUFBRSxPQUFPLGFBQUE7Z0NBQVEsT0FBQSxDQUM3Qyw4QkFBQyxHQUFHLElBQUMsR0FBRyxFQUFFLFlBQVk7b0NBQ3BCLDhCQUFDLFNBQVM7d0NBQ1I7NENBQ0UseUNBQ0UsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLEVBQUUsWUFBWSxFQUNsQixLQUFLLEVBQUMsTUFBTSxFQUNaLE9BQU8sRUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUMzQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksZ0JBQ2YsYUFBVSxZQUFZLGdCQUFZLEVBQzlDLFFBQVEsU0FDUjs0Q0FBQyxHQUFHO2tEQUVBO3dDQUNSOzRDQUNFLHlDQUNFLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxFQUFFLFlBQVksRUFDbEIsS0FBSyxFQUFDLE9BQU8sRUFDYixPQUFPLEVBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssRUFDNUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxZQUFZLGdCQUNmLGdCQUFhLFlBQVksZ0JBQVksRUFDakQsUUFBUSxTQUNSOzRDQUFDLEdBQUc7aURBRUEsQ0FDRTtvQ0FDWiw4QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssSUFBRSxZQUFZLENBQWM7b0NBQ25EO3dDQUNFLHlDQUFJLE9BQU8sQ0FBSyxDQUNiO29DQUNMLHNDQUFJLFNBQVMsRUFBRSxZQUFZLElBQ3hCLFlBQVk7eUNBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUM7eUNBQ3hDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDO3lDQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQ1YsQ0FDRCxDQUNQOzRCQXZDOEMsQ0F1QzlDLENBQ0Y7d0JBRUgsOEJBQUMsR0FBRzs0QkFDRixnREFBWTs0QkFDWiw4QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssZ0JBQXVCOzRCQUM5QztnQ0FDRSx1SEFBa0Y7Z0NBQ2xGLGtRQUlJLENBQ0Q7NEJBQ0wsc0NBQUksU0FBUyxFQUFFLFlBQVksR0FBSSxDQUMzQixDQUNBLENBQ0YsQ0FDSSxDQUNQLENBQ1YsQ0FBQTtJQUNILENBQUM7SUExUE0sNEJBQVcsR0FBRyxrQkFBa0IsQ0FBQTtJQUVoQyw2QkFBWSxHQUFHO1FBQ3BCLHFCQUFxQixFQUFFLElBQUk7UUFDM0IsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQTtJQXVSSCx1QkFBQztDQUFBLEFBOVJELENBQThDLHFCQUFhLEdBOFIxRDtrQkE5Um9CLGdCQUFnQiJ9
