import { useForm, Controller } from 'react-hook-form';
import SubmitButton from 'src/app/atoms/submit-button/submit-button';
import Input from 'src/app/atoms/input/input';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import FormSelect from 'src/app/molecules/form-select/form-select';
import Heading from 'src/app/atoms/heading/heading';
import { getDataFromSessionStorage } from 'src/app/utilities/utilities';
import { SPORITELNA_SESSION_KEY } from 'src/app/constants/constants';
import { BankType } from 'src/app/types/types';
import { FORM_EMAIL_ELEMENT, FORM_BRANCH_ELEMENT, FORM_YEARS_ELEMENT, FORM_NAME_ELEMENT } from 'src/app/constants/constants';

export interface CustomerFormInfoProps {
  banks: BankType[];
}

const CustomerFormInfo = ({ banks }: CustomerFormInfoProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: {
    name?: string;
    years?: string;
    email?: string;
    branch?: string;
  }) => {
    sessionStorage.setItem(SPORITELNA_SESSION_KEY, JSON.stringify(data));
    navigate('/potvrzeni');
  };

  useEffect(() => {
    reset(getDataFromSessionStorage());
  }, []);

  return (
    <Box sx={{ mt: 5, background: '#f6fbfd', borderRadius: '5px', p: 4 }}>
      <Heading variant="h2">Nejdříve nám o sobě něco řekněte</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
          <Controller
            name={FORM_NAME_ELEMENT}
            control={control}
            rules={{ required: true }}
            defaultValue={''}
            render={({ field }) => (
              <Input
                type="string"
                label="Jméno"
                field={field}
                inputErrors={errors[FORM_NAME_ELEMENT]}
              />
            )}
          />

          <Controller
            name={FORM_YEARS_ELEMENT}
            control={control}
            rules={{ required: true, min: 18 }}
            defaultValue={''}
            render={({ field }) => (
              <Input
                type="number"
                label="Věk"
                field={field}
                inputErrors={errors[FORM_YEARS_ELEMENT]}
              />
            )}
          />

          <Controller
            name={FORM_EMAIL_ELEMENT}
            control={control}
            rules={{
              required: true,
              pattern:
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            defaultValue={''}
            render={({ field }) => (
              <Input
                type="string"
                label="Email"
                field={field}
                inputErrors={errors[FORM_EMAIL_ELEMENT]}
              />
            )}
          />

          <Controller
            name={FORM_BRANCH_ELEMENT}
            control={control}
            defaultValue={''}
            rules={{ required: true }}
            render={({ field }) => (
              <FormSelect
                options={banks}
                label="Branch"
                field={field}
                inputErrors={errors[FORM_BRANCH_ELEMENT]}
              />
            )}
          />
        </Box>
        <SubmitButton>Odeslat</SubmitButton>
      </form>
    </Box>
  );
};

export default CustomerFormInfo;
