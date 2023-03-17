import { PropsWithChildren } from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps extends PropsWithChildren {
  onClick?: ()=> void;
}

const SubmitButton = ({ children, onClick }: SubmitButtonProps) => {
  return (
    <Button
      sx={{
        width: '150px',
        mx: 'auto',
        display: 'block',
        background: '#e30613',
        color: '#fff',
        textTransform: 'none',
        fontWeight: 700,
        '&:hover': {
          background: '#c70000',
        },
      }}
      type="submit"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
