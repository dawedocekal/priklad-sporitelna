import type { PropsWithChildren } from 'react';
import { Typography, TypographyProps } from '@mui/material';

const Heading = ({
  variant = 'h1',
  children,
}: TypographyProps & PropsWithChildren) => {
  return <Typography variant={variant}>{children}</Typography>;
}

export default Heading;
