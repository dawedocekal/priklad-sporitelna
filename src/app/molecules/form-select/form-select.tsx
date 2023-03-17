import { FormControl, InputLabel, FormHelperText } from '@mui/material';
import { getErrorHelperText } from 'src/app/utilities/utilities';
import Select from 'src/app/atoms/select/select';
import { FieldArray } from 'react-hook-form/dist/types';
import { InputErrorsType } from 'src/app/types/types';
import { BankType } from 'src/app/types/types';

export interface FormSelectProps {
  label: string;
  options: BankType[];
  field: Partial<FieldArray>;
  inputErrors?: InputErrorsType;
}

const FormSelect = ({
  label,
  options,
  field,
  inputErrors,
}: FormSelectProps) => {
  return (
    <FormControl fullWidth error={!!inputErrors} sx={{ my: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} options={options} field={field} />
      {!!inputErrors && (
        <FormHelperText error={true}>
          {getErrorHelperText(inputErrors)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormSelect;
