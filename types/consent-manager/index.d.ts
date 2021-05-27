import React, { PureComponent } from 'react'
import { CategoryPreferences, Destination, ConsentManagerProps } from '../types'
export default class ConsentManager extends PureComponent<ConsentManagerProps, {}> {
  static displayName: string
  static defaultProps: {
    otherWriteKeys: never[]
    shouldRequireConsent: () => boolean
    implyConsentOnInteraction: boolean
    onError: undefined
    cookieDomain: undefined
    cookieName: undefined
    cookieExpires: undefined
    customCategories: undefined
    bannerTextColor: string
    bannerBackgroundColor: string
    locale: string
    translations: {
      en: {
        'ui.save': string
        'ui.cancel': string
        'ui.yes': string
        'ui.no': string
        'ui.not_available': string
        'ui.go_back': string
        'ui.yes_cancel': string
        'ui.header.allow': string
        'ui.header.category': string
        'ui.header.purpose': string
        'ui.header.tools': string
        'ui.banner.content': string
        'ui.banner.subContent': string
        'ui.preferences.title': string
        'ui.preferences.content': React.FunctionComponentElement<{}>
        'ui.cancel.title': string
        'ui.cancel.content': string
        'aria.functional.allow': string
        'aria.functional.disallow': string
        'aria.marketing.allow': string
        'aria.marketing.disallow': string
        'aria.advertising.allow': string
        'aria.advertising.disallow': string
        'category.functional': string
        'category.marketing': string
        'category.advertising': string
        'category.essential': string
        'purpose.functional.explanation': string
        'purpose.functional.example': string
        'purpose.marketing.explanation': string
        'purpose.marketing.example': string
        'purpose.advertising.explanation': string
        'purpose.advertising.example': string
        'purpose.essential.explanation': string
        'purpose.essential.example': string
      }
      de: {
        'ui.save': string
        'ui.cancel': string
        'ui.yes': string
        'ui.no': string
        'ui.not_available': string
        'ui.go_back': string
        'ui.yes_cancel': string
        'ui.header.allow': string
        'ui.header.category': string
        'ui.header.purpose': string
        'ui.header.tools': string
        'ui.banner.content': React.FunctionComponentElement<{}>
        'ui.banner.subContent': string
        'ui.preferences.title': string
        'ui.preferences.content': React.FunctionComponentElement<{}>
        'ui.cancel.title': string
        'ui.cancel.content': string
        'aria.functional.allow': string
        'aria.functional.disallow': string
        'aria.marketing.allow': string
        'aria.marketing.disallow': string
        'aria.advertising.allow': string
        'aria.advertising.disallow': string
        'category.functional': string
        'category.marketing': string
        'category.advertising': string
        'category.essential': string
        'purpose.functional.explanation': string
        'purpose.functional.example': string
        'purpose.marketing.explanation': string
        'purpose.marketing.example': string
        'purpose.advertising.explanation': string
        'purpose.advertising.example': string
        'purpose.essential.explanation': string
        'purpose.essential.example': string
      }
    }
    defaultDestinationBehavior: string
  }
  render(): JSX.Element
  getInitialPreferences: () => {}
  handleMapCustomPreferences: (
    destinations: Destination[],
    preferences: CategoryPreferences
  ) => {
    destinationPreferences: {}
    customPreferences: {}
  }
}
