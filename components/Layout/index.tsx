import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Sidebar } from '../Sidebar';
import { adminTest } from '../../data/AdminTest';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface PropTypes {
  children?: ReactNode;
  isProtested?: boolean;
}

const Layout: FC<PropTypes> = (props) => {
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole !== adminTest.role && props.isProtested) {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Sidebar>{props.children}</Sidebar>
      <ToastContainer />
    </>
  );
};

export { Layout };
