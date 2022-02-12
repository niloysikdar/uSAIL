import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout, PrivateUserCard } from '../../components';

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <PrivateUserCard />
    </Layout>
  );
};

export default User;
