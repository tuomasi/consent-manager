import React from 'react'
import {
  Destination,
  CategoryPreferences,
  CustomCategories,
  DefaultDestinationBehavior
} from '../types'
export declare function openDialog(): void
export declare const enum CloseBehavior {
  ACCEPT = 'accept',
  DENY = 'deny',
  DISMISS = 'dismiss'
}
export interface CloseBehaviorFunction {
  (categories: CategoryPreferences): CategoryPreferences
}
interface ContainerProps {
  setPreferences: (prefs: CategoryPreferences) => void
  saveConsent: (newPreferences?: CategoryPreferences, shouldReload?: boolean) => void
  resetPreferences: () => void
  closeBehavior?: CloseBehavior | CloseBehaviorFunction
  destinations: Destination[]
  customCategories?: CustomCategories | undefined
  newDestinations: Destination[]
  preferences: CategoryPreferences
  havePreferencesChanged: boolean
  isConsentRequired: boolean
  implyConsentOnInteraction: boolean
  bannerContent: React.ReactNode
  bannerSubContent: React.ReactNode
  bannerTextColor: string
  bannerBackgroundColor: string
  preferencesDialogTitle: React.ReactNode
  preferencesDialogContent: React.ReactNode
  cancelDialogTitle: React.ReactNode
  cancelText: string
  backText: string
  cancelDialogContent: React.ReactNode
  workspaceAddedNewDestinations?: boolean
  defaultDestinationBehavior?: DefaultDestinationBehavior
}
declare const Container: React.FC<ContainerProps>
export default Container
