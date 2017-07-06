import { SueraPage } from './app.po';

describe('suera App', () => {
  let page: SueraPage;

  beforeEach(() => {
    page = new SueraPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
