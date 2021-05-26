import { PureComponent } from 'react'
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
    bannerSubContent: string
    bannerBackgroundColor: string
    preferencesDialogTitle: string
    cancelDialogTitle: string
    defaultDestinationBehavior: string
    cancelText: string
    backText: string
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
