import { WelinktalentClientPage } from './app.po';

describe('welinktalent-client App', function() {
	let page: WelinktalentClientPage;

	beforeEach(() => {
		page = new WelinktalentClientPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
