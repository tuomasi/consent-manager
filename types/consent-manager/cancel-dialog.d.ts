import React, { PureComponent } from 'react'
interface Props {
  innerRef: (node: HTMLElement) => void
  backText: string
  cancelText: string
  onBack: () => void
  onConfirm: () => void
  title: React.ReactNode
  content: React.ReactNode
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
