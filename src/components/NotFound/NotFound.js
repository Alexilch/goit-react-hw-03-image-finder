import s from './NotFound.module.css';

export default function NotFound({ searchQuery }) {
  return (
    <div className={s.notfoundwrapper}>
      <h1>Image '{searchQuery}' not found!</h1>
    </div>
  );
}
