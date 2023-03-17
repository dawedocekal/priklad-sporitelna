import { render } from '@testing-library/react';

import FormSelect from './form-select';

describe('FormSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormSelect label='Select' options={[]} field={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
