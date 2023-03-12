import { useState, useEffect } from 'react'
import useImage from '../../hooks/useImage'
// Redux
import { useAppDispatch } from "../../app/hooks";
import { addNewProduct } from '../../features/products/productsSlice';

import validationForm from "../../utils/validateForm"
import type IFormData from '../../interfaces/IFormData'
import { useNavigate } from "react-router-dom"
import noPhoto from '../../assets/images/noPhoto.jpg'
import { InputForm } from '../../components/index'
import { Label } from '../../components/InputForm/InputFormStyle'
import {
  ContainerImageInput,
  Image,
  SelectContainer,
  ButtonsContainer,
  Button
} from './AddProductStyle'
import { FORM_DATA_INIT_STATE } from '../../utils/constants'

const sectionOptions = [
  'kitchen',
  'bathroom',
  'terrace',
  'bedroom',
  'livingroom',
  'diningroom'
]

const AddProductForm: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>(FORM_DATA_INIT_STATE)
  const [image, handleImageUpload, clearImage] = useImage()
  const dispatch = useAppDispatch();
  // const products = useAppSelector(selectProducts)
  const navigate = useNavigate()

  useEffect(() => {
    setFormData({ ...formData, image })
  }, [image])

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (validationForm(formData)){
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(addNewProduct(formData))
    }
    navigate('/')
  }

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    e.preventDefault()
    setFormData({
      ...formData,
      [name]: value
    })
  }

  
  const clearData = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setFormData(FORM_DATA_INIT_STATE)
    clearImage()
  }
  

  return (
    <form onSubmit={handleSubmit}>
      
      <InputForm
        name="name"
        type="text"
        labelText="Product name"
        value={formData.name}
        minLength={3}
        maxLength={20}
        onChange={handleChange}
      />
      <InputForm
        name="description"
        type="text"
        labelText="Description"
        value={formData.description}
        minLength={10}
        maxLength={100}
        onChange={handleChange}
        
      />
      <InputForm
        name="price"
        type="number"
        labelText="Price in €"
        value={formData.price}
        min={10}
        max={50000}
        onChange={handleChange}
        
      />
      <SelectContainer>
        <Label htmlFor="section">Choose a section: </Label>
        <select
          id="section"
          name="section"
          value={formData.section}
          onChange={handleChange}
        >
          <option value="">Section options</option>
          {sectionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </SelectContainer>
      <ContainerImageInput>
        <div className="file-input">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input"
            onChange={handleImageUpload}
          />
          <label className="file-input__label" htmlFor="file-input">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="upload"
              className="svg-inline--fa fa-upload fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Upload file</span>
          </label>
        </div>

        {image && <Image src={image || noPhoto} alt="Selected Image" />}
      </ContainerImageInput>
      <ButtonsContainer>
        <Button type="submit" isClear={false}>
          Submit
        </Button>
        <Button type="reset" isClear={true} onClick={clearData}>
          Clear
        </Button>
      </ButtonsContainer>
      
    </form>
    
  )
}

export default AddProductForm
