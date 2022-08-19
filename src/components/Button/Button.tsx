import classNames from 'classnames';
import { Loader } from '../Loader/Loader';

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = 'primary',
  /** Второстепенная кнопка */
  secondary = 'secondary',
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  children,
  ...props
}) => {
  let dis = loading || props.disabled ? true : false;
  return (
    <button
      {...props}
      className={classNames(
        'button',
        `button_color-${color}`,
        {
          button_disabled: dis,
        },
        props.className
      )}
      disabled={dis}
    >
      {loading && <Loader loading={true} />}
      {children}
    </button>
  );
};
