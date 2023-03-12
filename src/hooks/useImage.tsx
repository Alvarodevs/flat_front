import { useState, type ChangeEvent } from 'react';

export const useImage = (): [string, File | undefined, (event: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [image, setImage] = useState<string>('');
  const [file, setFile] = useState<File | undefined>()
  
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      setFile(file)
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImage(reader.result as string)
      })
      reader.readAsDataURL(file);
    } else {
      setImage('')
    }
  };
  
  const clearImage = (): void => {
    setImage('')
  };
  
  return [image, file, handleImageUpload, clearImage]
};

export default useImage