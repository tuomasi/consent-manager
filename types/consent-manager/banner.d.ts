import React, { PureComponent } from 'react'
interface Props {
  innerRef: (node: HTMLElement | null) => void
  onClose: () => void
  onChangePreferences: () => void
  content: React.ReactNode
  subContent: React.ReactNode
  backgroundColor: string
  textColor: string
}
export default class Banner extends PureComponent<Props> {
  static displayName: string
  render(): JSX.Element
}
export {}
