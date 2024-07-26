import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: "instagram-media bg-white border-0 rounded-md shadow-sm m-1 p-0 w-6/12",
      "data-instgrm-permalink": url,
      "data-instgrm-version": "12",
      children: /* @__PURE__ */ jsx("div", { style: { padding: "16px" }, children: /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "block w-full h-full" }) })
    }
  );
};
export {
  InstagramEmbed as default
};
