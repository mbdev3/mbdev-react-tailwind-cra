import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

export const useHandleUpload = () => {
  const [uploadedImage, setUploadedImage] = useState();

  const [progress, setProgress] = useState(0);
  async function uploadPhoto(e) {
    const type = e.target.files[0]?.type;
    let data = new FormData();
    data.append('image', e.target.files[0], 'name');
    if (!checkFileIsImage(type)) {
      console.log('wrong format');
    } else {
      console.log('valid format');
      try {
        const options = {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            // console.log(`${loaded} of ${total} | ${percent}%`);
            setProgress(percent);
            if (percent === 100) {
              setProgress(percent);
            }
          },
        };
        await setUploadedImage(URL.createObjectURL(e.target.files[0]));
        const response = await axios.post('http://localhost:5000/upload', data, options, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    if (progress === 100) {
      setProgress(0);
    }
  }, [uploadedImage, progress]);
  const checkFileIsImage = (file) => {
    const acceptedFormats = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    return file && acceptedFormats.includes(file);
  };
  const handleRemove = (e) => {
    e.stopPropagation();
    setUploadedImage();
  };

  return {
    uploadedImage,
    uploadPhoto,
    progress,
    handleRemove,
    setUploadedImage,
  };
};

export default useHandleUpload;
