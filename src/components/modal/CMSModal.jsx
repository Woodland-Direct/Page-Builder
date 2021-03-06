import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CMSDiv = styled.div`
  background-color: white;
  border-radius: 15px;
  min-height: 400px;
  min-width: 400px;
  padding: 20px 50px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontBody};
  font-size: 20px;
  font-weight: normal;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`
const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 120px;
  border: none;
  background-color: ${props => props.theme.accentPrimary};
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.accentPrimaryDark};
  }
`
const GhostButton = styled(StyledButton)`
  background-color: white;
  color: ${props => props.theme.mainPrimary};
  :hover {
    color: ${props => props.theme.mainPrimary};
    background-color: ${props => props.theme.backgroundAccent};
  }
`

const CMSModal = props => {
  const { error, formData, template, updateFormData, updateTemplateData, selectedTemplates, saveModalData, cleanOutImages } = props
  let tempName = template.tempName
  let FormModal = template.modal
  return (
    <CMSDiv className={'cms-div'}>
      <Title className={'template-title'}>{tempName}</Title>
      <FormModal
        data={formData}
        updateFormData={updateFormData}
        selectedTemplates={selectedTemplates}
        updateTemplateData={updateTemplateData}
        cleanOutImages={cleanOutImages}
      />
      {error && <div>*Please fill out the required fields to submit your template</div>}
      <ButtonContainer>
        <GhostButton
          onClick={() => {
            updateTemplateData({})
          }}>
          Clear All
        </GhostButton>
        <StyledButton
          onClick={e => {
            saveModalData()
          }}>
          Save
        </StyledButton>
      </ButtonContainer>
    </CMSDiv>
  )
}

CMSModal.propTypes = {
  error: PropTypes.bool,
  closeModal: PropTypes.func,
  formData: PropTypes.object,
  updateFormData: PropTypes.func,
  cleanOutImages: PropTypes.func,
  tempName: PropTypes.string,
  updateTemplateData: PropTypes.func
}

export default CMSModal
