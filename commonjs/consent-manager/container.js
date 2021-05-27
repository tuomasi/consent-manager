'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.openDialog = void 0
var events_1 = __importDefault(require('events'))
var react_1 = __importDefault(require('react'))
var banner_1 = __importDefault(require('./banner'))
var preference_dialog_1 = __importDefault(require('./preference-dialog'))
var cancel_dialog_1 = __importDefault(require('./cancel-dialog'))
var categories_1 = require('./categories')
var emitter = new events_1.default()
function openDialog() {
  emitter.emit('openDialog')
}
exports.openDialog = openDialog
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      categories_1.ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      categories_1.FUNCTIONAL_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      functionalDestinations.push(destination)
    } else {
      // Fallback to marketing
      marketingDestinations.push(destination)
    }
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    _loop_1(destination)
  }
  return {
    marketingDestinations: marketingDestinations,
    advertisingDestinations: advertisingDestinations,
    functionalDestinations: functionalDestinations
  }
}
var Container = function(props) {
  var _a = react_1.default.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var _b = react_1.default.useState(true),
    showBanner = _b[0],
    toggleBanner = _b[1]
  var _c = react_1.default.useState(false),
    isCancelling = _c[0],
    toggleCancel = _c[1]
  var banner = react_1.default.useRef(null)
  var preferenceDialog = react_1.default.useRef(null)
  var cancelDialog = react_1.default.useRef(null)
  var _d = normalizeDestinations(props.destinations),
    marketingDestinations = _d.marketingDestinations,
    advertisingDestinations = _d.advertisingDestinations,
    functionalDestinations = _d.functionalDestinations
  var handleBodyClick = function(e) {
    // Do nothing if no new implicit consent needs to be saved
    if (
      !props.isConsentRequired ||
      !props.implyConsentOnInteraction ||
      props.newDestinations.length === 0
    ) {
      return
    }
    // Ignore propogated clicks from inside the consent manager
    if (
      (banner.current && banner.current.contains(e.target)) ||
      (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
      (cancelDialog.current && cancelDialog.current.contains(e.target))
    ) {
      return
    }
    props.saveConsent(undefined, false)
  }
  var showDialog = function() {
    return toggleDialog(true)
  }
  react_1.default.useEffect(function() {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function() {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  react_1.default.useEffect(
    function() {
      if (isDialogOpen) {
        props.resetPreferences()
      }
    },
    [isDialogOpen]
  )
  var onClose = function() {
    if (props.closeBehavior === undefined || props.closeBehavior === 'dismiss' /* DISMISS */) {
      return toggleBanner(false)
    }
    if (props.closeBehavior === 'accept' /* ACCEPT */) {
      return props.saveConsent()
    }
    if (props.closeBehavior === 'deny' /* DENY */) {
      var falsePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
        acc[category] = false
        return acc
      }, {})
      props.setPreferences(falsePreferences)
      return props.saveConsent()
    }
    // closeBehavior is a custom function
    var customClosePreferences = props.closeBehavior(props.preferences)
    props.setPreferences(customClosePreferences)
    props.saveConsent()
    return toggleBanner(false)
  }
  var handleCategoryChange = function(category, value) {
    var _a
    props.setPreferences(((_a = {}), (_a[category] = value), _a))
  }
  var handleSave = function() {
    toggleDialog(false)
    props.saveConsent()
  }
  var handleCancel = function() {
    // Only show the cancel confirmation if there's unconsented destinations
    if (props.newDestinations.length > 0) {
      toggleCancel(true)
    } else {
      toggleDialog(false)
      props.resetPreferences()
    }
  }
  var handleCancelBack = function() {
    toggleCancel(false)
  }
  var handleCancelConfirm = function() {
    toggleCancel(false)
    toggleDialog(false)
    props.resetPreferences()
  }
  return react_1.default.createElement(
    'div',
    null,
    showBanner &&
      props.isConsentRequired &&
      props.newDestinations.length > 0 &&
      react_1.default.createElement(banner_1.default, {
        innerRef: function(current) {
          return (banner = { current: current })
        },
        onClose: onClose,
        onChangePreferences: function() {
          return toggleDialog(true)
        },
        content: props.bannerContent,
        subContent: props.bannerSubContent,
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor
      }),
    isDialogOpen &&
      react_1.default.createElement(preference_dialog_1.default, {
        customCategories: props.customCategories,
        destinations: props.destinations,
        preferences: props.preferences,
        innerRef: function(current) {
          return (preferenceDialog = { current: current })
        },
        onCancel: handleCancel,
        onSave: handleSave,
        onChange: handleCategoryChange,
        marketingDestinations: marketingDestinations,
        advertisingDestinations: advertisingDestinations,
        functionalDestinations: functionalDestinations,
        marketingAndAnalytics: props.preferences.marketingAndAnalytics,
        advertising: props.preferences.advertising,
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        translate: props.translate
      }),
    isCancelling &&
      react_1.default.createElement(cancel_dialog_1.default, {
        innerRef: function(current) {
          return (cancelDialog = { current: current })
        },
        onBack: handleCancelBack,
        onConfirm: handleCancelConfirm,
        title: props.cancelDialogTitle,
        content: props.cancelDialogContent,
        translate: props.translate
      })
  )
}
exports.default = Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFpQztBQUNqQyxnREFBeUI7QUFDekIsb0RBQTZCO0FBQzdCLDBFQUFrRDtBQUNsRCxrRUFBMEM7QUFDMUMsMkNBQTRFO0FBUTVFLElBQU0sT0FBTyxHQUFHLElBQUksZ0JBQVksRUFBRSxDQUFBO0FBQ2xDLFNBQWdCLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRkQsZ0NBRUM7QUFxQ0QsU0FBUyxxQkFBcUIsQ0FBQyxZQUEyQjtJQUN4RCxJQUFNLHFCQUFxQixHQUFrQixFQUFFLENBQUE7SUFDL0MsSUFBTSx1QkFBdUIsR0FBa0IsRUFBRSxDQUFBO0lBQ2pELElBQU0sc0JBQXNCLEdBQWtCLEVBQUUsQ0FBQTs0QkFFckMsV0FBVztRQUNwQixJQUFJLG1DQUFzQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDaEUsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzFDO2FBQU0sSUFBSSxrQ0FBcUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ3RFLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUN6QzthQUFNO1lBQ0wsd0JBQXdCO1lBQ3hCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUN4Qzs7SUFSSCxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVk7UUFBakMsSUFBTSxX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
