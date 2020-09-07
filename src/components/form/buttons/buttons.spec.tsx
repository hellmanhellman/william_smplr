import React from 'react';
import { render } from '@testing-library/react';

import Buttons from './buttons';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Buttons text="Button test"/>);
    expect(baseElement).toBeTruthy();
  });
});
