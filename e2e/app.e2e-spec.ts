import { Firebase1Page } from './app.po';

describe('firebase1 App', function() {
  let page: Firebase1Page;

  beforeEach(() => {
    page = new Firebase1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
