import React from 'react'
import { Button } from 'react-bootstrap'

type ButtonSelectorProps = {
  options: string[],
  initOption: string
  onSelected: (option: any) => void,
}

type ButtonSelectorState = {
  selectedOption: string,
}

export class ButtonSelector extends React.Component<ButtonSelectorProps, ButtonSelectorState> {
  constructor(props: ButtonSelectorProps) {
    super(props)
    this.state = {selectedOption: props.initOption}
  }

  private buttonVariant(isSelected: boolean): string {
    return isSelected ? "info" : "light"
  }

  private variant(option: string): string {
    return this.buttonVariant(this.state.selectedOption === option)
  }

  private onClick(option: string): () => void {
    return () => {
      this.setState({selectedOption: option})
      this.props.onSelected(option)
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        {
          this.props.options.map((value) => (
            <Button
              className="m-2"
              variant={this.variant(value)}
              onClick={this.onClick(value)}
            >
              {value}
            </Button>
          ))
        }
      </div>
    )
  }
}