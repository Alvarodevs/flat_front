import { type ToastPosition } from 'react-toastify';

export const FORM_DATA_INIT_STATE = {
  name: '',
  description: '',
  isFavourite: false,
  price: 0,
  section: '',
  image: '',
}

export const ITEMS_PER_PAGE = 6

export const TOAST_CONFIG = {
  position: 'top-center' as ToastPosition,
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}
