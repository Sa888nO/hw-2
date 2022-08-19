import { Loader } from './Loader';
import './Loader.scss';
export default {
  title: 'Loader',
  component: Loader,
};

export const Template = (arg) => <Loader {...arg} />;
export const Default = () => Template.bind({});
