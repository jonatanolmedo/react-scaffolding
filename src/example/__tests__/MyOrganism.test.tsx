import React from 'react';
import { render } from '@testing-library/react-native';
import MyOrganism from '../components/MyOrganism/MyOrganism';

describe('MyOrganism', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<MyOrganism />);
    
    // Check if the title is rendered
    const titleElement = getByText('This is MyOrganism!');
    expect(titleElement).toBeDefined();

    // Check if MyMolecule is rendered
    const myOrganismElement = getByTestId('myOrganismTestId');
    expect(myOrganismElement).toBeDefined();    

    // Check if MyMolecule is rendered
    const myMoleculeElement = getByTestId('myMoleculeTestId');
    expect(myMoleculeElement).toBeDefined();
  });

  // Add more test cases as needed
});
