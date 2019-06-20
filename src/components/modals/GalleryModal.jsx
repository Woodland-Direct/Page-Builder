import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const StyledButton = styled.button`
    margin: 5px;
    font-size: 18px;
    font-weight: 700;
    height: 20px;
    outline: none;
    height: 45px;
    width: 100%;
    border: 2px solid ${props => props.theme.backgroundAccent};
    background-color: white;
    font-family: ${props => props.theme.fontBody};
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.mainPrimary};
    border-radius: 3px;
    margin-bottom: 40px;
    transition: 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      background-color: ${props => props.theme.backgroundAccent};
    }
`
const GalleryModal = props => {
  const { updateFormData, data } = props
  const [galleryFormRender, setGalleryFormRender] = useState([0])
  let isMaxGalleries = galleryFormRender.length === 5

  // this allows you to choose how many galleries in a section
  const buildAllGalleryFields = addGallery => {
    let createdGalleries = [...galleryFormRender]
    if (addGallery) {
      createdGalleries.push(createdGalleries.length)
    } else {
      createdGalleries.pop()
    }
    setGalleryFormRender(createdGalleries)
  }
  const galleryObj = {
    error: null,
    updateFormData: updateFormData,
    groups: [
      { label: 'Gallery Name Button', name: 'galleryName', type: 'input' },
      { label: 'Info Title', name: 'infoTitle', type: 'input' },
      { label: 'Info Body Text', name: 'infoBodyText', type: 'textarea' },
      { label: 'Image Url', name: 'image', type: 'input' },
      { label: 'Image Alt Text', name: 'imgAltText', type: 'input' }
    ]
  }
  const createFields = idx => {
    return (
      <Fragment key={idx}>
        <p>Gallery {idx + 1}</p>
        {galleryObj.groups.map(galleryFormat => (
          <Fragment key={galleryFormat.name + idx}>
            <FormEntry
              type={galleryFormat.type}
              label={galleryFormat.label}
              name={galleryFormat.name}
              error={null}
              value={data[galleryFormat.name + idx] ? data[galleryFormat.name + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
          </Fragment>
        ))}
        {galleryFormRender.length > 1 && <StyledButton onClick={() => buildAllGalleryFields(false, idx)}>Remove</StyledButton>}
      </Fragment>
    )
  }
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
        required
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
        required
      />
      <FormEntry
        type={'input'}
        label={'Section Header'}
        name={'sectionHeader'}
        error={null}
        value={data['sectionHeader'] ? data['sectionHeader'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {galleryFormRender.map((gallery, idx) => createFields(idx))}
      <ButtonContainer>
        {!isMaxGalleries && <StyledButton onClick={() => buildAllGalleryFields(true)}>Add Gallery</StyledButton>}
      </ButtonContainer>
    </>
  )
}
export default GalleryModal
