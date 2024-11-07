import { paraglide } from "@inlang/paraglide-next/plugin"
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./paraglide"
	},
	...nextConfig
});
