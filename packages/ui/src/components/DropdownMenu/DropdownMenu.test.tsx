import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from './DropdownMenu';

describe('<DropdownMenu />', () => {
  it('should render the dropdown trigger button', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>Trigger Dropdown</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Dropdown Label</DropdownMenuLabel>
          <DropdownMenuItem>Dropdown Item</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sub Trigger</DropdownMenuSubTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuSubContent>Sub Content</DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const text = screen.getByText('Trigger Dropdown');

    expect(text).toBeInTheDocument();
  });

  it('should open dropdown menu when user clicks on trigger', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger Dropdown</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset>Dropdown Label</DropdownMenuLabel>
          <DropdownMenuItem inset>Dropdown Item</DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Sub Trigger</DropdownMenuSubTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuSubContent>Sub Content</DropdownMenuSubContent>
            <DropdownMenuCheckboxItem>Checkbox Item</DropdownMenuCheckboxItem>
            <DropdownMenuShortcut>CMD + P</DropdownMenuShortcut>
            <DropdownMenuRadioItem value="0">Radio Item</DropdownMenuRadioItem>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const trigger = screen.getByText('Trigger Dropdown');

    userEvent.click(trigger);

    await waitFor(() =>
      expect(screen.getByText('Dropdown Label')).toBeInTheDocument()
    );

    expect(screen.getByText('Dropdown Label')).toHaveClass('pl-8');
    expect(screen.getByText('Dropdown Item')).toHaveClass('pl-8');
    expect(screen.getByText('Sub Trigger')).toBeInTheDocument();
    expect(screen.getByText('Sub Trigger')).toHaveClass('pl-8');
    expect(screen.getByText('CMD + P')).toBeInTheDocument();
    expect(screen.getByText('Checkbox Item')).toBeInTheDocument();
    expect(screen.getByText('Radio Item')).toBeInTheDocument();
  });
});
