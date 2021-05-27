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
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import React, { PureComponent } from 'react'
import ConsentManagerBuilder from '../consent-manager-builder'
import Container from './container'
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories'
import defaultMessages from './default-messages'
var zeroValuePreferences = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null
}
var ConsentManager = /** @class */ (function(_super) {
  __extends(ConsentManager, _super)
  function ConsentManager() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.getInitialPreferences = function() {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        customCategories = _a.customCategories
      if (initialPreferences) {
        return initialPreferences
      }
      if (!customCategories) {
        return zeroValuePreferences
      }
      var initialCustomPreferences = {}
      Object.keys(customCategories).forEach(function(category) {
        initialCustomPreferences[category] = null
      })
      return initialCustomPreferences
    }
    _this.handleMapCustomPreferences = function(destinations, preferences) {
      var customCategories = _this.props.customCategories
      var destinationPreferences = {}
      var customPreferences = {}
      if (customCategories) {
        for (var _i = 0, _a = Object.keys(customCategories); _i < _a.length; _i++) {
          var preferenceName = _a[_i]
          var value = preferences[preferenceName]
          if (typeof value === 'boolean') {
            customPreferences[preferenceName] = value
          } else {
            customPreferences[preferenceName] = true
          }
        }
        destinations.forEach(function(destination) {
          // Mark custom categories
          Object.entries(customCategories).forEach(function(_a) {
            var categoryName = _a[0],
              integrations = _a[1].integrations
            var consentAlreadySetToFalse = destinationPreferences[destination.id] === false
            var shouldSetConsent = integrations.includes(destination.id)
            if (shouldSetConsent && !consentAlreadySetToFalse) {
              destinationPreferences[destination.id] = customPreferences[categoryName]
            }
          })
        })
        return {
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences
        }
      }
      // Default unset preferences to true (for implicit consent)
      for (var _b = 0, _c = Object.keys(preferences); _b < _c.length; _b++) {
        var preferenceName = _c[_b]
        var value = preferences[preferenceName]
        if (typeof value === 'boolean') {
          customPreferences[preferenceName] = value
        } else {
          customPreferences[preferenceName] = true
        }
      }
      var customPrefs = customPreferences
      var _loop_1 = function(destination) {
        // Mark advertising destinations
        if (
          ADVERTISING_CATEGORIES.find(function(c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.advertising
        }
        // Mark function destinations
        if (
          FUNCTIONAL_CATEGORIES.find(function(c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.functional
        }
        // Fallback to marketing
        if (!(destination.id in destinationPreferences)) {
          destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics
        }
      }
      for (var _d = 0, destinations_1 = destinations; _d < destinations_1.length; _d++) {
        var destination = destinations_1[_d]
        _loop_1(destination)
      }
      return {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences
      }
    }
    return _this
  }
  ConsentManager.prototype.render = function() {
    var _this = this
    var _a = this.props,
      writeKey = _a.writeKey,
      otherWriteKeys = _a.otherWriteKeys,
      shouldRequireConsent = _a.shouldRequireConsent,
      implyConsentOnInteraction = _a.implyConsentOnInteraction,
      cookieDomain = _a.cookieDomain,
      cookieName = _a.cookieName,
      cookieExpires = _a.cookieExpires,
      bannerContent = _a.bannerContent,
      bannerSubContent = _a.bannerSubContent,
      bannerTextColor = _a.bannerTextColor,
      bannerBackgroundColor = _a.bannerBackgroundColor,
      preferencesDialogTitle = _a.preferencesDialogTitle,
      preferencesDialogContent = _a.preferencesDialogContent,
      cancelDialogTitle = _a.cancelDialogTitle,
      cancelDialogContent = _a.cancelDialogContent,
      customCategories = _a.customCategories,
      defaultDestinationBehavior = _a.defaultDestinationBehavior,
      cdnHost = _a.cdnHost,
      onError = _a.onError,
      locale = _a.locale,
      translations = _a.translations
    var translate = function(key) {
      var transDictionary
      var lng
      if (translations) {
        transDictionary = __assign(
          __assign({}, ConsentManager.defaultProps.translations),
          translations
        )
      } else {
        transDictionary = ConsentManager.defaultProps.translations
      }
      if (locale && transDictionary[locale]) {
        lng = locale
      } else {
        lng = ConsentManager.defaultProps.locale
      }
      return transDictionary[lng][key]
    }
    return React.createElement(
      ConsentManagerBuilder,
      {
        onError: onError,
        writeKey: writeKey,
        otherWriteKeys: otherWriteKeys,
        shouldRequireConsent: shouldRequireConsent,
        cookieDomain: cookieDomain,
        cookieName: cookieName,
        cookieExpires: cookieExpires,
        initialPreferences: this.getInitialPreferences(),
        mapCustomPreferences: this.handleMapCustomPreferences,
        customCategories: customCategories,
        defaultDestinationBehavior: defaultDestinationBehavior,
        cdnHost: cdnHost
      },
      function(_a) {
        var destinations = _a.destinations,
          customCategories = _a.customCategories,
          newDestinations = _a.newDestinations,
          preferences = _a.preferences,
          isConsentRequired = _a.isConsentRequired,
          setPreferences = _a.setPreferences,
          resetPreferences = _a.resetPreferences,
          saveConsent = _a.saveConsent,
          havePreferencesChanged = _a.havePreferencesChanged,
          workspaceAddedNewDestinations = _a.workspaceAddedNewDestinations
        return React.createElement(Container, {
          customCategories: customCategories,
          destinations: destinations,
          newDestinations: newDestinations,
          preferences: preferences,
          isConsentRequired: isConsentRequired,
          setPreferences: setPreferences,
          resetPreferences: resetPreferences,
          saveConsent: saveConsent,
          closeBehavior: _this.props.closeBehavior,
          implyConsentOnInteraction:
            implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0
              ? implyConsentOnInteraction
              : ConsentManager.defaultProps.implyConsentOnInteraction,
          bannerContent: bannerContent || translate('ui.banner.content'),
          bannerSubContent: bannerSubContent || translate('ui.banner.subContent'),
          bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor,
          bannerBackgroundColor:
            bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor,
          preferencesDialogTitle: preferencesDialogTitle || translate('ui.preferences.title'),
          preferencesDialogContent: preferencesDialogContent || translate('ui.preferences.content'),
          cancelDialogTitle: cancelDialogTitle || translate('ui.cancel.title'),
          cancelDialogContent: cancelDialogContent || translate('ui.cancel.content'),
          havePreferencesChanged: havePreferencesChanged,
          defaultDestinationBehavior: defaultDestinationBehavior,
          workspaceAddedNewDestinations: workspaceAddedNewDestinations,
          translate: translate
        })
      }
    )
  }
  ConsentManager.displayName = 'ConsentManager'
  ConsentManager.defaultProps = {
    otherWriteKeys: [],
    shouldRequireConsent: function() {
      return true
    },
    implyConsentOnInteraction: false,
    onError: undefined,
    cookieDomain: undefined,
    cookieName: undefined,
    cookieExpires: undefined,
    customCategories: undefined,
    bannerTextColor: '#fff',
    bannerBackgroundColor: '#1f4160',
    locale: 'de',
    translations: defaultMessages,
    defaultDestinationBehavior: 'disable'
  }
  return ConsentManager
})(PureComponent)
export default ConsentManager
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUM1QyxPQUFPLHFCQUFxQixNQUFNLDRCQUE0QixDQUFBO0FBQzlELE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQTtBQUNuQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFFNUUsT0FBTyxlQUFlLE1BQU0sb0JBQW9CLENBQUE7QUFFaEQsSUFBTSxvQkFBb0IsR0FBd0I7SUFDaEQscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFBO0FBRUQ7SUFBNEMsa0NBQXNDO0lBQWxGO1FBQUEscUVBb05DO1FBcEZDLDJCQUFxQixHQUFHO1lBQ2hCLElBQUEsS0FBMkMsS0FBSSxDQUFDLEtBQUssRUFBbkQsa0JBQWtCLHdCQUFBLEVBQUUsZ0JBQWdCLHNCQUFlLENBQUE7WUFDM0QsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsT0FBTyxrQkFBa0IsQ0FBQTthQUMxQjtZQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsT0FBTyxvQkFBb0IsQ0FBQTthQUM1QjtZQUVELElBQU0sd0JBQXdCLEdBQUcsRUFBRSxDQUFBO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUM1Qyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUE7WUFDM0MsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPLHdCQUF3QixDQUFBO1FBQ2pDLENBQUMsQ0FBQTtRQUVELGdDQUEwQixHQUFH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
