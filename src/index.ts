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
		const resp = await fetch(href, request);
		const newResp = new Response(resp.body, resp);
		newResp.headers.set('Access-Control-Allow-Credentials', 'true');
		newResp.headers.set('Access-Control-Allow-Headers', '*');
		newResp.headers.set('Access-Control-Allow-Methods', '*');
		newResp.headers.set('Access-Control-Allow-Origin', '*');
		return newResp;
	},
} satisfies ExportedHandler<Env>;
