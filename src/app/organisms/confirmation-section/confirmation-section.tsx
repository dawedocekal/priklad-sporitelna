import Heading from 'src/app/atoms/heading/heading';
import { Box } from '@mui/material';
import SubmitButton from 'src/app/atoms/submit-button/submit-button';
import { getDataFromSessionStorage } from 'src/app/utilities/utilities';
import { FORM_EMAIL_ELEMENT, FORM_BRANCH_ELEMENT, FORM_YEARS_ELEMENT, FORM_NAME_ELEMENT } from 'src/app/constants/constants';

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
        <Heading variant="body1">Jméno: {sessionStorageData[FORM_NAME_ELEMENT]}</Heading>
        <Heading variant="body1">Věk: {sessionStorageData[FORM_YEARS_ELEMENT]}</Heading>
        <Heading variant="body1">Email: {sessionStorageData[FORM_EMAIL_ELEMENT]}</Heading>
        <Heading variant="body1">Pobočka: {sessionStorageData[FORM_BRANCH_ELEMENT]}</Heading>
      </Box>
      <SubmitButton onClick={() => {alert("Rezervováno")}}>Rezervovat</SubmitButton>
    </Box>
  );
};



export default ConfirmationSection;
