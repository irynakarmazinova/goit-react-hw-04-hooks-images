import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchImages from 'services/pixabay-api';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import ImageGalleryList from './ImageGalleryList/ImageGalleryList';
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

  useEffect(() => {
    // if (contacts === '') {
    //   // if (!contacts) {
    //   return;
    // }

    setImages([]);
    // loadImages(1);
  }, [searchImageName]);

  useEffect(() => {
    // if (contacts === '') {
    //   // if (!contacts) {
    //   return;
    // }

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  }, [images]);

  const loadImages = (page, searchImageName) => {
    setLoading(true);
    setLastPage(page);

    setTimeout(() => {
      fetchImages(searchImageName, page)
        .then(({ hits, total }) => {
          if (!total) {
            const error = new Error(
              `There is no picture with ${searchImageName} name, please enter another request`,
            );
            setError(error);
            setStatus(Status.REJECTED);
          } else {
            setImages([...(images || []), ...hits]);
            setStatus(Status.RESOLVED);
          }
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });

      setLoading(false);
    }, 1000);
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
    loadImages(lastPage + 1);
  };

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
        {/* <ImageGalleryList images={images} onModalOpen={this.onModalOpen} /> */}
        <ul className="ImageGallery">
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
        </ul>
        {loading && <Loader />}
        <Button onBtnClick={onBtnClick} />

        {showModal && (
          <Modal onModalClose={toggleModal} activeModalImg={activeModalImg} />
        )}
      </>
    );
  }
}

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     error: null,
//     status: Status.IDLE,
//     showModal: false,
//     loading: false,

//     activeModalImg: null,
//     lastPage: 1,
//   };

//   // когда компонент обновляется
//   componentDidUpdate(prevProps, prevState) {
//     const { searchImageName } = this.props;

//     // всегда нужно делать проверку, потому что может зациклить компонент!
//     // предыдущий пропс имг и следующий(текущий) пропс имг
//     // старый рендет-новый рендер
//     if (prevProps.searchImageName !== searchImageName) {
//       this.setState({ images: [] }, () => {
//         this.loadImages(1);
//       });
//     }

//     if (prevState.images !== this.state.images) {
//       setTimeout(() => {
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       }, 0);
//     }
//   }

//   loadImages = page => {
//     const { images } = this.state;
//     const { searchImageName } = this.props;

//     this.setState({ loading: true, lastPage: page });
//     setTimeout(() => {
//       fetchImages(searchImageName, page)
//         .then(({ hits, total }) => {
//           if (!total) {
//             const error = new Error(
//               `There is no picture with ${searchImageName} name, please enter another request`,
//             );
//             this.setState({ error, status: Status.REJECTED });
//           } else {
//             this.setState({
//               images: [...(images || []), ...hits],
//               status: Status.RESOLVED,
//             });
//           }
//         })
//         .catch(error => this.setState({ error, status: Status.REJECTED }));

//       this.setState({ loading: false });
//     }, 1000);
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   onModalOpen = activeModalImg => {
//     this.setState({ activeModalImg });
//     this.toggleModal();
//   };

//   onBtnClick = () => {
//     const { lastPage } = this.state;
//     this.setState({ loading: true });
//     this.loadImages(lastPage + 1);
//   };

//   render() {
//     const { images, error, status, showModal, loading, activeModalImg } =
//       this.state;

//     if (status === Status.IDLE) {
//       return <div className="errorMessage">Please enter your request</div>;
//     }

//     // if (status === Status.PENDING) {
//     //   return <Loader />;
//     // }

//     if (status === Status.REJECTED) {
//       return <h1>{error.message}</h1>;
//     }

//     if (status === Status.RESOLVED) {
//       return (
//         <>
//           {/* <ImageGalleryList images={images} onModalOpen={this.onModalOpen} /> */}
//           <ul className="ImageGallery">
//             {images.map(image => (
//               <ImageGalleryItem
//                 key={`image-item-image-${image.id}`}
//                 onModalOpen={this.onModalOpen}
//                 // webformatURL={image.webformatURL}
//                 // tags={image.tags}
//                 // largeImageURL={image.largeImageURL}
//                 // {...image}
//                 image={image}
//               />
//             ))}
//           </ul>
//           {loading && <Loader />}
//           <Button onBtnClick={this.onBtnClick} />

//           {showModal && (
//             <Modal
//               onModalClose={this.toggleModal}
//               activeModalImg={activeModalImg}
//             />
//           )}
//         </>
//       );
//     }
//   }
// }
// export default ImageGallery;

ImageGallery.propTypes = {
  searchImageName: PropTypes.string.isRequired,
};
