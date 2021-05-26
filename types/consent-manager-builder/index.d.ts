import { Component } from 'react'
import {
  Destination,
  CategoryPreferences,
  CustomCategories,
  DefaultDestinationBehavior
} from '../types'
interface Props {
  /** Your Segment Write key for your website */
  writeKey: string
  /** A list of other write keys you may want to provide */
  otherWriteKeys?: string[]
  cookieDomain?: string
  cookieName?: string
  /**
   * Number of days until the preferences cookie should expire
   */
  cookieExpires?: number
  /**
   * An initial selection of Preferences
   */
  initialPreferences?: CategoryPreferences
  /**
   * Provide a function to define whether or not consent should be required
   */
  shouldRequireConsent?: () => Promise<boolean> | boolean
  /**
   * Render props for the Consent Manager builder
   */
  children: (props: RenderProps) => React.ReactElement
  /**
   * Allows for customizing how to show different categories of consent.
   */
  mapCustomPreferences?: (
    destinations: Destination[],
    preferences: CategoryPreferences
  ) => {
    destinationPreferences: CategoryPreferences
    customPreferences: CategoryPreferences
  }
  /**
   * Allows for adding custom consent categories by mapping a custom category to Segment integrations
   */
  customCategories?: CustomCategories
  /**
   * Specified default behavior for when new destinations are detected on the source(s) of this consent manager.
   */
  defaultDestinationBehavior?: DefaultDestinationBehavior
  /**
   * A callback for dealing with errors in the Consent Manager
   */
  onError?: (err: Error) => void | Promise<void>
  /**
   * CDN to fetch list of integrations from
   */
  cdnHost?: string
}
interface RenderProps {
  destinations: Destination[]
  newDestinations: Destination[]
  preferences: CategoryPreferences
  destinationPreferences: CategoryPreferences
  isConsentRequired: boolean
  customCategories?: CustomCategories
  havePreferencesChanged: boolean
  workspaceAddedNewDestinations: boolean
  setPreferences: (newPreferences: CategoryPreferences) => void
  resetPreferences: () => void
  saveConsent: (newPreferences?: CategoryPreferences | boolean, shouldReload?: boolean) => void
}
interface State {
  isLoading: boolean
  destinations: Destination[]
  newDestinations: Destination[]
  preferences?: CategoryPreferences
  destinationPreferences?: CategoryPreferences
  isConsentRequired: boolean
  havePreferencesChanged: boolean
  workspaceAddedNewDestinations: boolean
}
export default class ConsentManagerBuilder extends Component<Props, State> {
  static displayName: string
  static defaultProps: {
    otherWriteKeys: never[]
    onError: undefined
    shouldRequireConsent: () => boolean
    initialPreferences: {}
    cdnHost: string
  }
  state: {
    isLoading: boolean
    destinations: never[]
    newDestinations: never[]
    preferences: {}
    destinationPreferences: {}
    isConsentRequired: boolean
    havePreferencesChanged: boolean
    workspaceAddedNewDestinations: boolean
  }
  render():
    | import('react').ReactElement<
        any,
        | string
        | ((props: any) => import('react').ReactElement<any, any> | null)
        | (new (props: any) => Component<any, any, any>)
      >
    | null
  componentDidMount(): Promise<void>
  initialise: () => Promise<void>
  handleSetPreferences: (newPreferences: CategoryPreferences) => void
  handleResetPreferences: () => void
  handleSaveConsent: (
    newPreferences: CategoryPreferences | undefined,
    shouldReload: boolean
  ) => void
  mergePreferences: (args: {
    destinations: Destination[]
    existingPreferences?: CategoryPreferences | undefined
    newPreferences?: CategoryPreferences | undefined
  }) => CategoryPreferences
}
export {}
