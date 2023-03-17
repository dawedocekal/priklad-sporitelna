import Heading from 'src/app/atoms/heading/heading';
import { Box } from '@mui/material';
import SubmitButton from 'src/app/atoms/submit-button/submit-button';
import { getDataFromSessionStorage } from 'src/app/utilities/utilities';

interface ConfirmationSectionProps {
  drinkName: string;
}

const ConfirmationSection = ({ drinkName }: ConfirmationSectionProps) => {
  const sessionStorageData = getDataFromSessionStorage();
  
  return (
    <Box sx={{ mt: 5, background: '#f6fbfd', borderRadius: '5px', p: 4 }}>
      <Heading variant="h2">Potvrzení rezervace</Heading>
      <Box sx={{my: 4}}>
        <Heading variant="body1">Drink: {drinkName}</Heading>
        <Heading variant="body1">Jméno: {sessionStorageData?.name}</Heading>
        <Heading variant="body1">Věk: {sessionStorageData?.years}</Heading>
        <Heading variant="body1">Email: {sessionStorageData?.email}</Heading>
        <Heading variant="body1">Pobočka: {sessionStorageData?.branch}</Heading>
      </Box>
      <SubmitButton onClick={() => {alert("Rezervováno")}}>Rezervovat</SubmitButton>
    </Box>
  );
};



export default ConfirmationSection;
