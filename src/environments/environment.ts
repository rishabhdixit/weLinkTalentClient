// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
export const environment = {
	// TODO remove heroku urls once prod env starts working
	production: false,
	api: 'https://welinktalent-server-new.herokuapp.com' || 'http://localhost:8080',
	encodedUrl: 'https%3A%2F%2Fwelinktalent-client.herokuapp.com' || 'http%3A%2F%2Flocalhost%3A4200'
};
