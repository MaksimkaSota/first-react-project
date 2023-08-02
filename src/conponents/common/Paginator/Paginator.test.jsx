import { create } from 'react-test-renderer';
import { Paginator } from './Paginator';

describe('Paginator component tests', () => {
  it('page count is 11 but should be showed only 10', async () => {
    const component = create(<Paginator pageSize={1} totalCount={11} onSetCurrentPage={() => {}} portionSize={10} />);
    const root = component.root;

    const spans = await root.findAllByType('span');
    expect(spans.length).toBe(10);
  });

  it('if pages count is more then 10 button next should be present', async () => {
    const component = create(<Paginator pageSize={1} totalCount={11} onSetCurrentPage={() => {}} portionSize={10} />);
    const root = component.root;

    const button = await root.findAllByType('button');
    expect(button.length).toBe(1);
  });
})
