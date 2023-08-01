import { act, create } from 'react-test-renderer'
import { ProfileStatus } from './ProfileStatus';
// import { ProfileStatusFunction } from './ProfileStatusFunction';

describe('ProfileStatus component', () => {
  // for class component (1)
  it('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="max" />);
    const instance = component.getInstance();

    expect(instance.state.status).toBe('max');
  });
  // for all components (1)
  it('input should be displayed instead of span (status from props should be in the input)', async () => {
    const component = create(<ProfileStatus status="max" />);
    const root = component.root;

    const span = await root.findByType('span');
    act(() => {
      span.props.onDoubleClick();
    });

    await expect(async () => {
      let span = await root.findByType('span');
    }).rejects.toThrow();

    const input = await root.findByType('input');
    expect(input.props.value).toBe('max');
  });

  // for all components
  it('after creation span should be displayed', async () => {
    const component = create(<ProfileStatus status="max" />);
    const root = component.root;

    const span = await root.findByType('span');
    expect(span).not.toBeNull();
  });

  // for all components
  it('after creation input should not be displayed', async () => {
    const component = create(<ProfileStatus status="max" />);
    const root = component.root;

    await expect(async () => {
      let input = await root.findByType('input');
    }).rejects.toThrow();
  });

  // for all components
  it('after creation span should contains status', async () => {
    const component = create(<ProfileStatus status="max" />);
    const root = component.root;

    const span = await root.findByType('span');
    expect(span.props.children).toBe('max');
  });

  // for class component (2)
  it('callback should be called (class component)', async () => {
    const mockCallback = jest.fn();

    const component = create(<ProfileStatus status="max" updateStatus={mockCallback} />);
    const instance = component.getInstance();

    instance.onDeactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  // for all components (2)
  it('callback should be called (all components)', async () => {
    const mockCallback = jest.fn();

    const component = create(<ProfileStatus status="max" updateStatus={mockCallback} />);
    const root = component.root;

    const span = await root.findByType('span');
    act(() => {
      span.props.onDoubleClick();
    });

    const input = await root.findByType('input');
    act(() => {
      input.props.onBlur();
    });

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
