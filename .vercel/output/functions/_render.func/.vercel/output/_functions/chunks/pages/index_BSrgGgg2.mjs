/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as renderComponent, i as renderTransition, e as createAstro } from '../astro_CN_WT_iu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as usePlayerStore, P as Pause, b as Play, p as playlists, $ as $$Layout } from './_id__CXMr6VSE.mjs';
import { jsx } from 'react/jsx-runtime';

const CardPlayButton = ({ id }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handlePlaying = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ songs, playlist, song: songs[0] });
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handlePlaying,
      className: "card-play-button bg-green-600 p-3.5 rounded-full hover:scale-110 transition-all duration-200",
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
    }
  );
};

const $$Astro = createAstro();
const $$PlayListItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md transition-all duration-300"> <div${addAttribute(`absolute right-5 bottom-20 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10 shadow-lg`, "class")}> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/CardPlayButton", "client:component-export": "default" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex flex-col relative p-3 overflow-hidden gap-5 w-44 items-start"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Imagen de ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col"> <h4 class=""${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist ${id} title`), "data-astro-transition-scope")}>${title}</h4> <span class="text-sm text-gray-400"${addAttribute(renderTransition($$result, "dhifvp3a", "", `playlist ${id} artist`), "data-astro-transition-scope")}>${artistsString}</span> </div> </a> </article>`;
}, "E:/PracticandoAndo/Astro-Spotify-Clon/ClonSpotify/spotify-clone/src/components/PlayListItemCard.astro", "self");

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* E:/PracticandoAndo/Astro-Spotify-Clon/ClonSpotify/spotify-clone/src/components/Greeting.svelte generated by Svelte v4.2.17 */

const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const currentTime = /* @__PURE__ */ new Date();
	const currentHour = currentTime.getHours();
	let greeting = "";

	if (currentHour < 5) {
		greeting = "Empieza tu d\xEDa con \u{1F57A}";
	} else if (currentHour < 12) {
		greeting = "Buenos d\xEDas \u26C5";
	} else if (currentHour < 18) {
		greeting = "Buenas tardes \u{1F31E}";
	} else {
		greeting = "Buenas noches\u{1F31B}";
	}

	return `<h1 class="text-4xl font-bold">${escape(greeting)}</h1>`;
});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <!-- <PageHeader /> --> <div class="relative z-10 px-6 pt-10"> ${renderComponent($$result2, "Greeting", Greeting, {})} <div class="flex flex-wrap mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div> </div> ` })} `;
}, "E:/PracticandoAndo/Astro-Spotify-Clon/ClonSpotify/spotify-clone/src/pages/index.astro", void 0);

const $$file = "E:/PracticandoAndo/Astro-Spotify-Clon/ClonSpotify/spotify-clone/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
