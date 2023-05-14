import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });
});
