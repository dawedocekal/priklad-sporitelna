import { render } from '@testing-library/react';

import ConfirmationSection from './confirmation-section';

describe('ConfirmationSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfirmationSection drinkName='Margarita' />);
    expect(baseElement).toBeTruthy();
  });
});
