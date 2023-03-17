import { TextField } from '@mui/material';
import { rewriteSessionStorageItem } from 'src/app/utilities/utilities';
import { InputErrorsType } from 'src/app/types/types';
import { getErrorHelperText } from 'src/app/utilities/utilities';
import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  inputErrors?: InputErrorsType;
  field: any;
  type: string;
}

const Input = ({ field, label, inputErrors, type }: InputProps) => {
  return (
    <TextField
      {...field}
      label={label}
      type={type}
      error={!!inputErrors}
      variant="outlined"
      helperText={inputErrors && getErrorHelperText(inputErrors)}
      sx={{ my: 1 }}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        field?.onChange(event);
        rewriteSessionStorageItem(event)
      }}
    />
  );
};

export default Input;
