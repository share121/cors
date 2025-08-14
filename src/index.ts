/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request): Promise<Response> {
		const url = new URL(request.url);
		const href = url.pathname.slice(1) + url.search + url.hash;
		console.log(href);
		const resp = await fetch(new Request(href, request));
		resp.headers.set('Access-Control-Allow-Credentials', 'true');
		resp.headers.set('Access-Control-Allow-Headers', '*');
		resp.headers.set('Access-Control-Allow-Methods', '*');
		resp.headers.set('Access-Control-Allow-Origin', '*');
		return resp;
	},
} satisfies ExportedHandler<Env>;
