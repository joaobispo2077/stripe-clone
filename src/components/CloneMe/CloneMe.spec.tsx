import { CloneMe } from '.';
import { renderTheme } from '../../styles/themes/renderTheme';
import { screen, render } from '@testing-library/react';

describe('<CloneMe/ >', () => {
  it('should render', () => {
    // to render
    render(renderTheme(<CloneMe title="CloneMe" />));
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
