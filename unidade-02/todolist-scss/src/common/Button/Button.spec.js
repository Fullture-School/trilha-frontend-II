import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const componentWrapper = ({ props }) => {
  return render(<Button {...props} />);
};

describe('Componente botão', () => {
  it('Deve renderizar o botão corretamente', () => {
    const props = {
      onClick: jest.fn(),
      className: 'button__search',
      text: 'button'
    };
    const button = componentWrapper({ props });
    expect(button).toMatchSnapshot();
  });

  it('Deve ser possível clicar', () => {
    const props = {
      onClick: jest.fn(),
      className: 'button__search',
      text: 'button'
    };
    componentWrapper({ props });
    userEvent.click(screen.getByRole('button'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
 });
