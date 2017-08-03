import { DynamicComponentPage } from './app.po';

describe('dynamic-component App', () => {
  let page: DynamicComponentPage;

  beforeEach(() => {
    page = new DynamicComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
