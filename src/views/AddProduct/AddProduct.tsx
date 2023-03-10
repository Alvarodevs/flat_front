import { useState } from 'react'
import { InputForm } from '../../components/index'
import { Label } from '../../components/InputForm/InputFormStyle'
import { SelectContainer, ButtonsContainer, Button } from './AddProductStyle'
import {formDataInitialState} from '../../utils/constants'

interface IFormData {
  name: string,
  description: string,
  isFavourite: boolean,
  price: number,
  section: string,
}

const sectionOptions = [
  'kitchen',
  'bathroom',
  'terrace',
  'bedroom',
  'livingroom',
  'diningroom'
]

const AddProductForm: React.FC = (): JSX.Element => {
  
  const [formData, setFormData] = useState<IFormData>(formDataInitialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    e.preventDefault()
    setFormData({
      ...formData,
      [name]: name === "favourite" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const clearData = (): void => {
    setFormData(formDataInitialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="name"
        type="text"
        labelText="Product name"
        value={formData.name}
        maxLength={30}
        onChange={handleChange}
      />
      <InputForm
        name="description"
        type="text"
        labelText="Description"
        value={formData.description}
        maxLength={100}
        onChange={handleChange}
      />
      {/* <InputForm
        name="favourite"
        type="checkbox"
        labelText="What are you looking for?"
        checked={formData.favourite}
        onChange={handleChange}
      /> */}
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
          required
        >
          <option value="">Section options</option>
          {sectionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </SelectContainer>
      <ButtonsContainer>
      <Button type="submit" isClear={false}>Submit</Button>
      <Button type="reset" isClear={true} onClick={clearData}>Clear</Button>
      </ButtonsContainer>
    </form>
  )
}

export default AddProductForm
