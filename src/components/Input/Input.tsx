/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};
import classNames from 'classnames';
export const Input: React.FC<InputProps> = ({
  onChange,
  value,
  disabled,
  ...props
}) => {
  let dis = disabled !== undefined ? true : false;
  return (
    <input
      type="text"
      value={value}
      {...props}
      className={classNames('input', props.className, {
        input_disabled: dis,
      })}
      disabled={dis}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
