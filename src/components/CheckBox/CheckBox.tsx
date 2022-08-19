import classNames from 'classnames';

/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  return (
    <input
      {...props}
      type="checkbox"
      checked={props.checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};
