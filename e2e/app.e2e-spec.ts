import { BmsAppPage } from './app.po';

describe('bms-app App', function() {
  let page: BmsAppPage;

  beforeEach(() => {
    page = new BmsAppPage();
  });

  it('should display message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBeTruthy();
  });
});
