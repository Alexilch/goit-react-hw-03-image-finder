import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={onClick}
      />
    </li>
  );
}
