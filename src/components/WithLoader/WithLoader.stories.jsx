import { WithLoader } from './WithLoader';
import './WithLoader.scss';
export default {
  title: 'WithLoader',
  component: WithLoader,
};

export const Template = (arg) => (
  <WithLoader {...arg}>
    <div>
      fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff
      fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff
      fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff
      fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff fffffffff
      fffffffff fffffffff fffffffff fffffffff fffffffff ffffffffffffffffff
      ffffffffffffffffff fffffffff fffffffff fffffffff{' '}
    </div>
  </WithLoader>
);
export const Default = () => Template.bind({});
