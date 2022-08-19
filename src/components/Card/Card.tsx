/** Пропсы, которые принимает компонент Card */
type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <h5 className="card_title">{title}</h5>
      <img src={image} alt="image" />
      <span>{subtitle}</span>
      <div className="card_content">{content}</div>
    </div>
  );
};
