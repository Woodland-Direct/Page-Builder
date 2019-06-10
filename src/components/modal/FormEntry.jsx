import React, { useState } from 'react'

import { EntryContainer, Input, Label } from './formEntryStyles'
// import { doValidation } from '../../../../globals/services/validation'

const FormEntry = props => {
  const { name, required, type, updateFormData } = props
  let label = props.required ? props.label : props.label + ' (Optional)'
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(false)
  const [noError, setNoError] = useState(null)

  const handleBlur = () => {
    let isValid = null
    if (required) {
      // validate function and setError
      // let validation //= doValidation({ name, value })
      // isValid = !validation[0]
      // setNoError(!isValid)
    }
    setSelected(false)
    // update higher state
    updateFormData({ name, value, error: isValid })
  }
  return (
    <EntryContainer className={'entry-container ' + name}>
      <Label className={'entry-label'} label={label} selected={selected} value={value}>
        {label}
      </Label>
      <Input
        className={'input'}
        value={value}
        onBlur={handleBlur}
        onChange={e => setValue(e.target.value)}
        onFocus={() => {
          setNoError(true)
          setSelected(true)
        }}
        type={type}
        name={name}
        required={required}
        error={noError}
      />
    </EntryContainer>
  )
}
export default FormEntry