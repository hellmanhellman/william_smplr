import React from 'react';
import { render } from '@testing-library/react';

import Labels from './labels';

describe('Labels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Labels text="This is a label"/>);
    expect(baseElement).toBeTruthy();
  });
});
