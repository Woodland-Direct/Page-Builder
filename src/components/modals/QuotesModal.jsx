import React from 'react'
import styled from 'styled-components'

import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

const OptionTitle = styled.div`
  width: 100%;
`
const ImageOption = styled.div`
  width: 100%;
  display: flex;
  height: 32px;
  align-items: center;
  padding: 5px 0;
`
const QuotesModal = props => {
  const { updateFormData, data } = props
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      <OptionTitle>Pick Image </OptionTitle>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg' alt='' />
        <FormEntry
          type={'radio'}
          label={'Wrench Icon'}
          name={'icon'}
          error={null}
          updateFormData={updateFormData}
          value={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg'}
          checked={data.icon ? data.icon.value === 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg': false}
        />
      </ImageOption>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg' alt='' />
        <FormEntry
          type={'radio'}
          label={'Question Mark Icon'}
          name={'icon'}
          error={null}
          updateFormData={updateFormData}
          value={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg'}
          checked={data.icon ? data.icon.value === 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg' : false}
        />
      </ImageOption>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg' alt='' />
        <FormEntry
          type={'radio'}
          label={'Star Icon'}
          name={'icon'}
          error={null}
          updateFormData={updateFormData}
          value={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'}
          checked={data.icon ? data.icon.value === 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg' : false}
        />
      </ImageOption>
      <FormEntry
        type={'input'}
        label={'Header'}
        name={'header'}
        error={data['header'] ? data['header'].error : null}
        updateFormData={updateFormData}
        value={data['header'] ? data['header'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText'}
        error={data['bodyText'] ? data['bodyText'].error : null}
        updateFormData={updateFormData}
        value={data['bodyText'] ? data['bodyText'].value : ''}
        required
      />
    </>
  )
}

QuotesModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default QuotesModal
