import React, { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ImgManagementForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken') ? true : false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileNames, setSelectedFileNames] = useState([]);
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [editModeImageId, setEditModeImageId] = useState(null);
  const fileInputRef = useRef(null);

  const fetchImages = () => {
    axios.get('http://localhost:5000/images')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageSelection = (e, imageId) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(imageId)) {
        return prevSelectedImages.filter((id) => id !== imageId);
      } else {
        return [...prevSelectedImages, imageId];
      }
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setSelectedFile(selectedFiles);

    if (selectedFiles.length > 0) {
      const names = Array.from(selectedFiles).map((file) => file.name);
      setSelectedFileNames(names);
      const selectedFileNamesString = names.join(', ');
      setImageName(selectedFileNamesString);
    } else {
      setSelectedFileNames([]);
      setImageName('');
    }
  };

  const enterEditMode = (imageId) => {
    setEditModeImageId(imageId);
    const selectedImage = images.find((image) => image.id === imageId);
    setImageName(selectedImage.name);
    setImageDescription(selectedImage.description);
    setSelectedImages([]);
  };

  const handleSaveChanges = () => {
    if (!editModeImageId) {
      console.error('No image selected for editing.');
      return;
    } 
   
    const updatedImage = {
      name: imageName,
      description: imageDescription,
    };
  
    axios
      .put(`http://localhost:5000/update/${editModeImageId}`, updatedImage)
      .then((response) => {
        console.log('Image updated successfully:', response);
        fetchImages();
        setSelectedFile(null);
        setImageName('');
        setImageDescription('');
        setEditModeImageId(null);
        exitEditMode();
      })
      .catch((error) => {
        console.error('Error updating image:', error);
      });
  };

  const exitEditMode = () => {
    setEditModeImageId(null);
    setImageName('');
    setImageDescription('');
  };

  const handleDeleteSelectedImages = () => {
    if (selectedImages.length === 0) {
      console.warn('No images selected for deletion.');
      return;
    }

    const isConfirmed = window.confirm('Are you sure you want to delete the selected images?');
    if (!isConfirmed) {
      return;
    }

    axios
      .delete('http://localhost:5000/delete_selected', {
        data: { imageIds: selectedImages },
      })
      .then((response) => {
        console.log('Selected images deleted successfully:', response);
        fetchImages();
        setSelectedImages([]);
      })
      .catch((error) => {
        console.error('Error deleting images:', error);
      });
  }; 

  const handleNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setImageDescription(e.target.value);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No image selected.');
      return;
    }   

    const formData = new FormData();
    formData.append('user_file', selectedFile[0]);
    formData.append('name', imageName);
    formData.append('description', imageDescription);   

    axios.post('http://localhost:5000/insert', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Image uploaded successfully!', response);
      fetchImages();
      setSelectedFile(null);
      setImageName('');
      setImageDescription('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
  };
   
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='img-mngmt-form-page-wrapper'>        
      <div className='img-list-wrapper'>
        <h2>- Image Admin -</h2>
        {images.length === 0 ? (
          <p>No images found.</p>
        ) : (
          <>
          <div className='image-delete-btn'>
            <button className='btn' onClick={handleDeleteSelectedImages}>Delete Images</button>
            </div>
            <ul>
              {images.map((image) => (
                <li key={image.id}>
                  <label>
                    <input
                      type='checkbox'
                      checked={selectedImages.includes(image.id)}
                      onChange={() => handleImageSelection(null, image.id)}
                    />
                    <img src={image.s3_url} alt={image.name} onClick={(e) => handleImageSelection(e, image.id)} />
                    <h3>{image.name}</h3>
                    <p>{image.description}</p>
                  </label>
                  {!editModeImageId ? (
                    <button className="edit-btn" onClick={() => enterEditMode(image.id)}>
                      Edit
                    </button>
                  ) : null} 
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className='img-mngmt-form-wrapper'>
        <div className='file-input-container'>
          <input ref={fileInputRef} type="file" onChange={handleFileChange} />
        </div>
        <div className='image-name-input-container'>
          <input type="text" placeholder="Image Name" value={imageName} onChange={handleNameChange} maxLength={30}/>
        </div>
        <div className='description-input-contaner'>
          <textarea className='description-input'
            placeholder="Image Description"
            value={imageDescription}
            onChange={handleDescriptionChange}
            maxLength={100}
          />
        </div>
        <div className='upload-image-btn-container'>
        {!editModeImageId ? (
          <button className="btn" onClick={handleUpload}>
            Upload Image
          </button>
        ) : (
          <div>
            <button className="btn" onClick={handleSaveChanges}>
              Save Changes
            </button><br/>
            <button className="btn" onClick={exitEditMode}>
              Cancel
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ImgManagementForm;