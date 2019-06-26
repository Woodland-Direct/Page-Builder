import React from 'react'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

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
      <div>Pick Multiple Quote Templates </div>
      <FormEntry
        type={'checkbox'}
        label={'FAQ Layout'}
        name={'faqLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['faqLayout'] ? data['faqLayout'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Pro Tips Layout'}
        name={'proTipLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['proTipLayout'] ? data['proTipLayout'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Customer Feedback Layout'}
        name={'feedBackLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['feedBackLayout'] ? data['feedBackLayout'].value : false}
      />
      <div>FAQ Form</div>
      <FormEntry
        type={'input'}
        label={'FAQ - Question'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
      />
      <FormEntry
        textArea
        type={'text'}
        label={'FAQ - Answer'}
        name={'answer'}
        error={data['answer'] ? data['answer'].error : null}
        value={data['answer'] ? data['answer'].value : ''}
        updateFormData={updateFormData}
      />
      <div>Pro Form</div>
      <FormEntry
        textArea
        type={'text'}
        label={'Pro Tip'}
        name={'proTip'}
        error={data['proTip'] ? data['proTip'].error : null}
        value={data['proTip'] ? data['proTip'].value : ''}
        updateFormData={updateFormData}
      />
      <div>Customer Feedback Form</div>
      <FormEntry
        textArea
        type={'text'}
        label={'Customer Feedback'}
        name={'customerFeedback'}
        error={data['customerFeedback'] ? data['customerFeedback'].error : null}
        value={data['customerFeedback'] ? data['customerFeedback'].value : ''}
        updateFormData={updateFormData}
      />
    </>
  )
}

QuotesModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default QuotesModal
