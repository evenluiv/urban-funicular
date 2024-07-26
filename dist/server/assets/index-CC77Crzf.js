import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const FacebookEmbed = ({ href }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/et_EE/sdk.js#xfbml=1&version=v10.0";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fb-container overflow-hidden rounded-md h-[125px] tablet:h-full flex", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "fb-page",
      "data-href": href,
      "data-tabs": "timeline",
      "data-width": "500",
      "data-height": "600",
      "data-small-header": "false",
      "data-adapt-container-width": "true",
      "data-hide-cover": "false",
      "data-show-facepile": "true",
      "data-lazy": "true"
    }
  ) });
};
export {
  FacebookEmbed as default
};
