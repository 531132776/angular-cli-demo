import { FirstNgPage } from './app.po';

describe('first-ng App', function() {
  let page: FirstNgPage;

  beforeEach(() => {
    page = new FirstNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
