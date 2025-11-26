import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

const renderButton = (props = {}) => {
  const utils = render(<Button {...props} />);
  const button = utils.container.querySelector('button');
  return {
    ...utils,
    button,
  };
};

describe('Button Component', () => {
  it('should render with default props', () => {
    const { button } = renderButton({ children: 'Click me' });
    expect(button).toBeDefined();
  });

  it('should render disabled button', () => {
    const { button } = renderButton({ disabled: true, children: 'Disabled' });
    expect(button?.hasAttribute('disabled')).toBe(true);
  });

  it.each(['default', 'secondary', 'ghost', 'outline', 'destructive', 'link'])(
    'should render %s variant without errors',
    (variant) => {
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const { button } = renderButton({ variant, children: 'Button' });
      expect(button).toBeDefined();

      expect(errorSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();

      errorSpy.mockRestore();
      warnSpy.mockRestore();
    }
  );

  it('should call the onClick function on click', async () => {
    const handleClick = vi.fn();
    const { button } = renderButton({
      onClick: handleClick,
      children: 'Click',
    });
    const event = userEvent.setup();
    await event.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render as child', () => {
    const CustomButton = () => (
      <button data-testid="custom-button">Custom</button>
    );
    const { container } = render(
      <Button asChild>
        <CustomButton />
      </Button>
    );
    expect(
      container.querySelector('[data-testid="custom-button"]')
    ).toBeDefined();
  });

  it('should apply size classes', () => {
    const { button } = renderButton({ size: 'lg', children: 'Large' });
    expect(button.className).toContain('h-10');
  });
});
