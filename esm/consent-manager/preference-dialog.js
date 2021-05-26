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
import styled, { css } from 'react-emotion'
import Dialog from './dialog'
import { DefaultButton, GreenButton } from './buttons'
var hideOnMobile = css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = styled('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = styled('th')(
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
var RowHeading = styled('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = styled('tr')(
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
var InputCell = styled('td')(
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
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(DefaultButton, { type: 'button', onClick: onCancel }, 'Cancel'),
      React.createElement(GreenButton, { type: 'submit' }, 'Save')
    )
    return React.createElement(
      Dialog,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      React.createElement(
        TableScroll,
        null,
        React.createElement(
          Table,
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              Row,
              null,
              React.createElement(ColumnHeading, { scope: 'col' }, 'Allow'),
              React.createElement(ColumnHeading, { scope: 'col' }, 'Category'),
              React.createElement(ColumnHeading, { scope: 'col' }, 'Purpose'),
              React.createElement(ColumnHeading, { scope: 'col', className: hideOnMobile }, 'Tools')
            )
          ),
          React.createElement(
            'tbody',
            null,
            !customCategories &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Functional'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'To monitor the performance of our site and to enhance your browsing experience.'
                    ),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, these tools enable you to communicate with us via live chat.'
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Marketing and Analytics'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.'
                    ),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, we collect information about which pages you visit to help us present more relevant information.'
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, 'Advertising'),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      'To personalize and measure the effectiveness of advertising on our site and other websites.'
                    ),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      'For example, we may serve you a personalized ad based on the pages you visit on our site.'
                    )
                  ),
                  React.createElement(
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
                return React.createElement(
                  Row,
                  { key: categoryName },
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(RowHeading, { scope: 'row' }, categoryName),
                  React.createElement('td', null, React.createElement('p', null, purpose)),
                  React.createElement(
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
            React.createElement(
              Row,
              null,
              React.createElement('td', null, 'N/A'),
              React.createElement(RowHeading, { scope: 'row' }, 'Essential'),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'p',
                  null,
                  'We use browser cookies that are necessary for the site to work as intended.'
                ),
                React.createElement(
                  'p',
                  null,
                  'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
                )
              ),
              React.createElement('td', { className: hideOnMobile })
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
})(PureComponent)
export default PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUd0RCxJQUFNLFlBQVksR0FBRyxHQUFHLCtIQUFBLDREQUl2QixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFBLDhDQUdoQyxJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtMQUFBLCtHQU1qQyxJQUFBLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9IQUFBLGlEQUc5QixJQUFBLENBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDRNQUFBLHlJQVM3QixJQUFBLENBQUE7QUFvQkQ7SUFBOEMsb0NBQXdDO0lBQXRGO1FBQUEscUVBOFJDO1FBakNDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSxRQUFRLEdBQUssS0FBSSxDQUFDLEtBQUssU0FBZixDQUFlO1lBQy9CLFFBQVEsQ0FBQyxDQUFD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
