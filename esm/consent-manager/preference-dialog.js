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
      preferences = _a.preferences,
      translate = _a.translate
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(
        DefaultButton,
        { type: 'button', onClick: onCancel },
        translate('ui.cancel')
      ),
      React.createElement(GreenButton, { type: 'submit' }, translate('ui.save'))
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
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.allow')),
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.category')),
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.purpose')),
              React.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                translate('ui.header.tools')
              )
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
                        'aria-label': translate('aria.functional.allow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.yes')
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
                        'aria-label': translate('aria.functional.disallow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.functional')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.functional.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.functional.example')
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
                        'aria-label': translate('aria.marketing.allow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.yes')
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
                        'aria-label': translate('aria.marketing.disallow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.marketing')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.marketing.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.marketing.example')
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
                        'aria-label': translate('aria.advertising.allow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.yes')
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
                        'aria-label': translate('aria.advertising.disallow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.advertising')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.advertising.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.advertising.example')
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
                        'aria-label': translate('aria.' + categoryName + '.allow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.yes')
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
                        'aria-label': translate('aria.' + categoryName + '.disallow'),
                        required: true
                      }),
                      ' ',
                      translate('ui.no')
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
              React.createElement('td', null, translate('ui.not_available')),
              React.createElement(RowHeading, { scope: 'row' }, translate('category.essential')),
              React.createElement(
                'td',
                null,
                React.createElement('p', null, translate('purpose.essential.explanation')),
                React.createElement('p', null, translate('purpose.essential.example'))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUd0RCxJQUFNLFlBQVksR0FBRyxHQUFHLCtIQUFBLDREQUl2QixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFBLDhDQUdoQyxJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtMQUFBLCtHQU1qQyxJQUFBLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9IQUFBLGlEQUc5QixJQUFBLENBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDRNQUFBLHlJQVM3QixJQUFBLENBQUE7QUFxQkQ7SUFBOEMsb0NBQXdDO0lBQXRGO1FBQUEscUVBMFFDO1FBakNDLGtCQUFZLEdBQUcsVUFBQSxDQUFDO1lBQ04sSUFBQSxRQUFRLEdBQUssS0FBSSxDQUFDLEtBQUssU0FBZixDQUFlO1lBQy9CLFFBQVEsQ0FBQyxDQUFD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
