import EventEmitter from 'events'
import React from 'react'
import Banner from './banner'
import PreferenceDialog from './preference-dialog'
import CancelDialog from './cancel-dialog'
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories'
var emitter = new EventEmitter()
export function openDialog() {
  emitter.emit('openDialog')
}
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      FUNCTIONAL_CATEGORIES.find(function(c) {
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
  var _a = React.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var _b = React.useState(true),
    showBanner = _b[0],
    toggleBanner = _b[1]
  var _c = React.useState(false),
    isCancelling = _c[0],
    toggleCancel = _c[1]
  var banner = React.useRef(null)
  var preferenceDialog = React.useRef(null)
  var cancelDialog = React.useRef(null)
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
  React.useEffect(function() {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function() {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  React.useEffect(
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
  return React.createElement(
    'div',
    null,
    showBanner &&
      props.isConsentRequired &&
      props.newDestinations.length > 0 &&
      React.createElement(Banner, {
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
      React.createElement(PreferenceDialog, {
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
      React.createElement(CancelDialog, {
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
export default Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLFFBQVEsQ0FBQTtBQUNqQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sZ0JBQWdCLE1BQU0scUJBQXFCLENBQUE7QUFDbEQsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBUTVFLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFDbEMsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBcUNELFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsSUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxDQUFBO0lBQy9DLElBQU0sdUJBQXVCLEdBQWtCLEVBQUUsQ0FBQTtJQUNqRCxJQUFNLHNCQUFzQixHQUFrQixFQUFFLENBQUE7NEJBRXJDLFdBQVc7UUFDcEIsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ2hFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxQzthQUFNLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUN0RSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDekM7YUFB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
