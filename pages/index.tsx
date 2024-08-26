// pages/index.tsx
import Layout from '@/components/Layout';
import LoanApplicationForm from '@/components/LoanApplicationForm';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <LoanApplicationForm/>
    </Layout>
  );
};

export default Home;
