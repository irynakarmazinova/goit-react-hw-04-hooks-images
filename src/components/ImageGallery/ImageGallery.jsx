import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchImages from 'services/pixabay-api';

// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGalleryList from './ImageGalleryList/ImageGalleryList';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

const Status = {
  IDLE: 'idle', //  простой, стоит и ничего не делает
  PENDING: 'pending', // ожидается выполнение
  RESOLVED: 'resolved', // выполнилось с результатом хорошо
  REJECTED: 'rejected', // отклонено
};

// деструктуризировать props и забрать у него нужный пропс - searchImageName
export default function ImageGallery({ searchImageName }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  // const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [lastPage, setLastPage] = useState(1);

  const loadImages = (searchImgName, page) => {
    setLoading(true);
    setLastPage(page);

    setTimeout(() => {
      fetchImages(searchImgName, page)
        .then(({ hits, total }) => {
          if (!total) {
            const newError = new Error(
              `There is no picture with ${searchImgName} name, please enter another request`,
            );

            setError(newError);
            setStatus(Status.REJECTED);
          } else {
            setImages(imgs => [...(imgs || []), ...hits]);
            setStatus(Status.RESOLVED);
          }

          if (page !== 1) {
            setTimeout(() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              });
            }, 0);
          }
        })
        .catch(newError => {
          setError(newError);
          setStatus(Status.REJECTED);
        });

      setLoading(false);
    }, 500);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onModalOpen = activeModalImg => {
    setActiveModalImg(activeModalImg);
    toggleModal();
  };

  const onBtnClick = () => {
    setLoading(true);
    loadImages(searchImageName, lastPage + 1);
  };

  useEffect(() => {
    if (!searchImageName) {
      return;
    }

    setImages([]);
    setLoading(false);
    loadImages(searchImageName, 1);
  }, [searchImageName]);

  // useEffect(() => {
  //   if (lastPage !== 1) {
  //     setTimeout(() => {
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     }, 0);
  //   }
  // }, [images, lastPage]);

  if (status === Status.IDLE) {
    return <div className="errorMessage">Please enter your request</div>;
  }

  // if (status === Status.PENDING) {
  //   return <Loader />;
  // }

  if (status === Status.REJECTED) {
    return <h1>{error.message}</h1>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGalleryList images={images} onModalOpen={onModalOpen} />
        {/* <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={`image-item-image-${image.id}`}
              onModalOpen={onModalOpen}
              // webformatURL={image.webformatURL}
              // tags={image.tags}
              // largeImageURL={image.largeImageURL}
              // {...image}
              image={image}
            />
          ))}
        </ul> */}

        {loading && <Loader />}
        <Button onBtnClick={onBtnClick} />

        {showModal && (
          <Modal onModalClose={toggleModal} activeModalImg={activeModalImg} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImageName: PropTypes.string.isRequired,
};
