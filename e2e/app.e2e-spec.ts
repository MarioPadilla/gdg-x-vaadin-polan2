import { GdgXVaadinPolan2Page } from './app.po';

describe('gdg-x-vaadin-polan2 App', function() {
  let page: GdgXVaadinPolan2Page;

  beforeEach(() => {
    page = new GdgXVaadinPolan2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
