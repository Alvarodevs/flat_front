interface IFormData {
  name: string
  description: string
  isFavourite: boolean
  price: number
  section: string
  image: string
  imageFile?: File
  // [key: string]: any
}

export default IFormData