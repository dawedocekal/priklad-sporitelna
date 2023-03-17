import { render } from '@testing-library/react';

import CustomerFormInfo from './customer-form-info';

describe('CustomerFormInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerFormInfo banks={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
