import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components';

const TeamDetails: NextPage = () => {
  const { name } = useRouter().query;

  return (
    <Layout>
      <h2>Name: {name}</h2>
    </Layout>
  );
};

export default TeamDetails;
