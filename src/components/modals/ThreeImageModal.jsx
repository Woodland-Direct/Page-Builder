import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'

const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const ThreeImageModal = props => {
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
      <FormEntry
        type={'input'}
        label={'Section Title'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <Section>First Image Form</Section>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={data['image1'] ? data['image1'].error : null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText1'}
        error={data['altText1'] ? data['altText1'].error : null}
        value={data['altText1'] ? data['altText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader1'}
        error={data['subheader1'] ? data['subheader1'].error : null}
        value={data['subheader1'] ? data['subheader1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph'}
        name={'paragraph1'}
        error={data['paragraph1'] ? data['paragraph1'].error : null}
        value={data['paragraph1'] ? data['paragraph1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <Section>Second Image Form</Section>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={data['image2'] ? data['image2'].error : null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText2'}
        error={data['altText2'] ? data['altText2'].error : null}
        value={data['altText2'] ? data['altText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader2'}
        error={data['subheader2'] ? data['subheader2'].error : null}
        value={data['subheader2'] ? data['subheader2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph'}
        name={'paragraph2'}
        error={data['paragraph2'] ? data['paragraph2'].error : null}
        value={data['paragraph2'] ? data['paragraph2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* Third Img Temp */}
      <Section>Third Image Form</Section>
      <FormEntry
        type={'input'}
        label={'Image 3'}
        name={'image3'}
        error={data['image3'] ? data['image3'].error : null}
        value={data['image3'] ? data['image3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText3'}
        error={data['altText3'] ? data['altText3'].error : null}
        value={data['altText3'] ? data['altText3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader3'}
        error={data['subheader3'] ? data['subheader3'].error : null}
        value={data['subheader3'] ? data['subheader3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        textArea
        type={'text'}
        label={'Paragraph'}
        name={'paragraph3'}
        error={data['paragraph3'] ? data['paragraph3'].error : null}
        value={data['paragraph3'] ? data['paragraph3'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}

ThreeImageModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default ThreeImageModal
