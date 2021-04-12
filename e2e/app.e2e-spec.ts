import { CzoneArkUiPage } from './app.po';

describe('czone-ark-ui App', function() {
  let page: CzoneArkUiPage;

  beforeEach(() => {
    page = new CzoneArkUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
