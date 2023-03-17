import Layout from 'src/app/templates/layout/layout';
import ConfirmationSection from 'src/app/organisms/confirmation-section/confirmation-section';
import { useState, useEffect } from 'react';

const Confirmation = () => {
  const [drinkName, setDrinkName] = useState<string>('');

  const getDataFromApi = async () => {
    const response = await fetch('/api');
    const responseData = await response.json();
    return setDrinkName(responseData.data?.drink?.strDrink);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <Layout>
      <ConfirmationSection drinkName={drinkName} />
    </Layout>
  );
};

export default Confirmation;
