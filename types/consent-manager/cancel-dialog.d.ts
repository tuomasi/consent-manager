import React, { PureComponent } from 'react'
interface Props {
  innerRef: (node: HTMLElement) => void
  onBack: () => void
  onConfirm: () => void
  title: React.ReactNode
  content: React.ReactNode
  translate: (key: string) => string
}
export default class CancelDialog extends PureComponent<Props> {
  static displayName: string
  render(): JSX.Element
  componentDidMount(): void
  componentWillUnmount(): void
  handleSubmit: (e: any) => void
  handleEsc: (e: KeyboardEvent) => void
}
export {}
