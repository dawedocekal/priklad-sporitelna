import { useEffect, useState } from 'react';
import Layout from 'src/app/templates/layout/layout';
import CustomerFormInfo from 'src/app/organisms/customer-form-info/customer-form-info';
import { BankType } from 'src/app/types/types';

const Homepage = () => {
  const [banks, setBanks] = useState<BankType[]>([])

  const getDataFromApi = async() => {
    const response = await fetch('/api')
    const responseData = await response.json()
    return setBanks(responseData.data?.banks)
  }

  useEffect(() => {
    getDataFromApi()
  }, []);

  return <Layout>
    <CustomerFormInfo banks={banks} />
  </Layout>;
}

export default Homepage;
