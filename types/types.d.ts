/// <reference types="react" />
/// <reference types="segment-analytics" />
import { CloseBehavior, CloseBehaviorFunction } from './consent-manager/container'
import { PreferencesManager } from './consent-manager-builder/preferences'
declare type AJS = SegmentAnalytics.AnalyticsJS & {
  initialized: boolean
  track: (
    event: string,
    properties: {
      [key: string]: any
    }
  ) => void
  addSourceMiddleware: (middleware: Middleware) => void
}
export declare type Middleware = (input: MiddlewareInput) => void
interface MiddlewareInput {
  payload: {
    obj: Record<string, any>
    [key: string]: any
  }
  integrations?: Record<string, boolean>
  next: (payload: MiddlewareInput['payload']) => void
}
export declare type WindowWithAJS = Window &
  typeof globalThis & {
    analytics?: AJS
  }
export declare type WindowWithConsentManagerConfig = Window &
  typeof globalThis & {
    consentManagerConfig?: (
      args: StandaloneConsentManagerParams
    ) => ConsentManagerInput | ConsentManagerInput
  }
export declare type ConsentManagerInput = ConsentManagerProps & {
  container: string
}
export declare type DefaultDestinationBehavior = 'enable' | 'disable' | 'imply' | 'ask'
interface StandaloneConsentManagerParams {
  React: unknown
  version?: string
  openConsentManager: () => void
  doNotTrack: () => boolean | null
  inEU: () => boolean
  preferences: PreferencesManager
  inRegions: (regions: string[]) => () => boolean
  locales?: object
}
export interface Preferences {
  destinationPreferences?: CategoryPreferences
  customPreferences?: CategoryPreferences
}
export interface Destination {
  id: string
  name: string
  creationName: string
  description: string
  website: string
  category: string
}
export interface CategoryPreferences {
  functional?: boolean | null | undefined
  marketingAndAnalytics?: boolean | null | undefined
  advertising?: boolean | null | undefined
  [category: string]: boolean | null | undefined
}
export interface CustomCategories {
  [key: string]: CustomCategory
}
interface CustomCategory {
  integrations: string[]
  purpose: string
  example?: string
}
export interface ConsentManagerProps {
  writeKey: string
  otherWriteKeys?: string[]
  shouldRequireConsent?: () => Promise<boolean> | boolean
  implyConsentOnInteraction?: boolean
  cookieDomain?: string
  cookieName?: string
  cookieExpires?: number
  bannerContent: React.ReactNode | string
  bannerSubContent?: React.ReactNode | string
  bannerTextColor?: string
  bannerBackgroundColor?: string
  preferencesDialogTitle?: React.ReactNode | string
  preferencesDialogContent?: React.ReactNode | string
  onError?: (error: Error | undefined) => void
  cancelDialogTitle?: React.ReactNode | string
  cancelDialogContent: React.ReactNode | string
  closeBehavior?: CloseBehavior | CloseBehaviorFunction
  initialPreferences?: CategoryPreferences
  customCategories?: CustomCategories
  defaultDestinationBehavior?: DefaultDestinationBehavior
  cdnHost?: string
  locale?: string
  translations?: object
}
export {}
