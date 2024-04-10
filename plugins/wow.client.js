import WOW from "wowjs/dist/wow";
import "animate.css";

export default defineNuxtPlugin(() => {
	return {
		provide: {
			wow: () => new WOW.WOW({ animateClass: "animate_animated" }),
		},
	};
});
