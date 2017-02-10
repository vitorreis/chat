import { ChatFrontendPage } from './app.po';

describe('chat-frontend App', function() {
  let page: ChatFrontendPage;

  beforeEach(() => {
    page = new ChatFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
