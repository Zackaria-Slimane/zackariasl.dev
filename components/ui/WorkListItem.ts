import { h } from "vue";

export default (props, context) => {
	const { name, position, link, to, from } = props.work;
	return h("a", {
		class: 'flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6 mt-10',
		href: link,
		target: '_blank'
	}, [
		h("span", { class: 'font-theme_bold text-head_text text-text_bg dark:text-p_text' }, name),
		h("span", { class: 'flex-[1_1_auto]' }),
		h("span", { class: 'sm:text-right text-sm sm:text-base text-emerald-500' }, position),
		h("span", { class: 'text-sm sm:text-base' }, `${from} - ${to}`),
	])
}
