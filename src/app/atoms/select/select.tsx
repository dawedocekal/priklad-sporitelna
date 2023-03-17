import { rewriteSessionStorageItem } from 'src/app/utilities/utilities';
import {
  SelectChangeEvent,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import { BankType } from 'src/app/types/types';

interface SelectProps {
  label: string;
  field: any;
  options: BankType[];
}

const Select = ({ label, field, options }: SelectProps) => {
  return (
    <MuiSelect
      label={label}
      {...field}
      onChange={(event: SelectChangeEvent) => {
        field?.onChange(event);
        rewriteSessionStorageItem(event);
      }}
    >
      {options.map((branch: BankType) => {
        return (
          <MenuItem key={branch.id} value={branch.name}>
            {branch.name}
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
};

export default Select;
