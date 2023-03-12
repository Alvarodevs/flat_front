
// import { type NavigateFunction } from 'react-router-dom';
// import type IFormData from '../interfaces/IFormData'
import { toast, type ToastOptions } from 'react-toastify';
import { TOAST_CONFIG } from '../utils/constants'

const toastConfig: ToastOptions = TOAST_CONFIG 


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const validationForm = (form: any) => {
  for (const key in form) {
    if (form[key] === '') {
      if (key === 'section'){
        toast.error(`Review ${key} and choose any`, toastConfig )
        return false
      }
      if (key === 'image'){
        toast.error(`Review ${key} field, add an image please.`, toastConfig )
        return false
      }
      toast.error(`Review ${key} field`, toastConfig )
      return false
    }
    if (key === 'name' && form[key].length < 3){
      toast.error(`Review ${key} field, minimum 3 characters`, toastConfig )
      return false
    }
    if (key === 'description' && form[key].length < 10){
      toast.error(`Review ${key} field, minimum 10 characters`, toastConfig )
      return false
    }
    if (key === 'price' && form[key] <= 0){
      toast.error(`Review ${key} field, minimum value of 10`, toastConfig )
      return false
    }
  }
  toast.success(`Your product has been added successfully!`, toastConfig )
  return true
}

export default validationForm