import { VetrungesPage } from './app.po';

describe('vetrunges App', () => {
  let page: VetrungesPage;

  beforeEach(() => {
    page = new VetrungesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
