import React from 'react';
import { render } from '@testing-library/react';

import Dropdowns from './dropdowns';

const optionsArray: string[] = ["volvo", "bmw", "vw"]

describe('Dropdowns', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dropdowns options={optionsArray}/>);
    expect(baseElement).toBeTruthy();
  });
});
