import {PropsWithChildren} from 'react';
import Heading from 'src/app/atoms/heading/heading';
import { Container, Box } from '@mui/material';

export function Layout({children} : PropsWithChildren) {
  return (
    <Container maxWidth="sm">
      <Box>
        <Heading variant="h1">
          Udělejte si Margaritu na některé z poboček v Brně
        </Heading>
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
