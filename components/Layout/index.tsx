import { FC } from 'react';
import { Sidebar } from '../Sidebar';

const Layout: FC = (props) => {
  return <Sidebar>{props.children}</Sidebar>;
};

export { Layout };
