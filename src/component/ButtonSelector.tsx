import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

type ButtonSelectorProps = {
  options: string[],
  initOption: string
  onSelected: (option: any) => void,
}

const ButtonSelector = (props: ButtonSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState(props.initOption)

  const buttonVariant = (isSelected: boolean) => isSelected ? "info" : "light"

  const variant = (option: string) => buttonVariant(selectedOption === option)

  const onClick = (option: string) => {
    return () => {
      setSelectedOption(option)
      props.onSelected(option)
    }
  }

  return (
    <div className="d-flex justify-content-center">
      {
        props.options.map((value) => (
          <Button
            className="m-2"
            variant={variant(value)}
            onClick={onClick(value)}
          >
            {value}
          </Button>
        ))
      }
    </div>
  )
}

export default ButtonSelector