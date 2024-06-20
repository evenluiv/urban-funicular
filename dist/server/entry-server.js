import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useSwipeable } from "react-swipeable";
import { StaticRouter } from "react-router-dom/server.mjs";
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};
const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggeled, setIsMenuToggeled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");
  return /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${flexBetween} fixed top-0 z-40 shadow-lg bg-pink-100 w-full py-5`,
        children: /* @__PURE__ */ jsx("div", { className: `${flexBetween} mx-auto w-8/12`, children: /* @__PURE__ */ jsxs("div", { className: `${flexBetween} w-full`, children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "font-extrabold tracking-wide text-lg", children: "KOERTEHOTELL" }),
          /* @__PURE__ */ jsx("div", { className: `${flexBetween}` }),
          isAboveMediumScreens ? /* @__PURE__ */ jsxs("div", { className: `flex justify-end gap-3 w-full`, children: [
            /* @__PURE__ */ jsx("div", { className: `${flexBetween} font-semibold text-sm`, children: /* @__PURE__ */ jsxs("ul", { className: `${flexBetween} gap-3`, children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/meist", children: "MEIST" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/hinnakiri", children: "HINNAKIRI" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/galerii", children: "GALERII" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/blogi", children: "BLOGI" }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: `${flexBetween} bg-blue-100 py-1 px-5 rounded-2xl`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", className: `${flexBetween} font-semibold`, children: "KONTAKT" }) }) })
          ] }) : /* @__PURE__ */ jsx(
            "button",
            {
              className: "rounded-full bg-blue-100 p-2",
              onClick: () => setIsMenuToggeled(!isMenuToggeled),
              children: /* @__PURE__ */ jsx(Bars3Icon, { className: "h-6 w-6 text-black" })
            }
          )
        ] }) })
      }
    ),
    !isAboveMediumScreens && isMenuToggeled && /* @__PURE__ */ jsxs("div", { className: "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end p-12", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsMenuToggeled(!isMenuToggeled), children: /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6 text-black" }) }) }),
      /* @__PURE__ */ jsx("div", { className: `flex font-semibold text-2xl`, children: /* @__PURE__ */ jsxs("ul", { className: `flex flex-col gap-4 pl-8`, children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/meist", children: "MEIST" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/hinnakiri", children: "HINNAKIRI" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/galerii", children: "GALERII" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/blogi", children: "BLOGI" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", children: "KONTAKT" }) })
      ] }) })
    ] })
  ] });
};
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
const Blogi = () => {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100", children: [
    /* @__PURE__ */ jsx("h1", { className: "flex \n                items-center \n                justify-center \n                text-center \n                desktop:text-left \n                desktop:justify-start \n                text-4xl \n                tablet:text-5xl \n                desktop:text-5xl \n                font-semibold\n                z-10", children: "BLOGI" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 pt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(FacebookEmbed, { href: "https://www.facebook.com/facebook" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center z-10", children: /* @__PURE__ */ jsx(InstagramEmbed, { url: "https://www.instagram.com/instagram/" }) })
    ] })
  ] });
};
const dogCircle = "/assets/doggo-circle-cropped-CdTp4XUF.png";
const image2 = "/assets/image2-DbSFKxjC.jpeg";
const sunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2dT08TQRjGJ3rRW9FyM5JoYkVNrD0I6AfzuBz9BkyiJ+VeI+LVRHrQC4KBE6AnUDIf4jGvuAdJd3d2u913Z+d5kichhdKZ38POzp+3xRiKoiiKoiiKoiiKoiiKCkDYMOvYMC+12xEvfGvw1wxBEb5lCPrwLUPQh28Zgj58yxD04VuGoA/fMgR9+JYh6MO3EYdQGzzbDpvQpA0MDEAfGngF6IMDh6AaILy+CrxbACZLwPdl4McIOF0Bzp9dWL6Wx+R78jPjhYvnMIAZwY8XgL0BcL4GuOflLM/5Nrj4HTUEYULTTB3e6gMnT8pDz/LxENi6yQAKwW9eBw4f1Qf+sg8eApvXeAVMhf9xEfi1Oj/4qeU1thc5BP0H//Pt+YO/bLlZ8x5ggK93m4efWl476pvwZEkPfuodvyvBhKbCTn3o68NPLfefqAKQ2U4TN1zn6bNV4G3+7Mh0KoB5TjXdDFPUKAKQRZY2bJfhnMWa6cxhSp0rXFezZcUc+qFOLnzZUNOG7Ao87oUbQuEx4t59fcCuwLuD/BlRW0MohC/bw1V2NV3D/r0GvLoSVgheB+ghDD/OYxhqWwje1QttWPW6elfH6iGUKh2R0yptsM7T+8t+fdIMoXTdzs+RPljnaTneLNO3pkOoVDQl57baYJ2nT5+W61uTIVSuWJPDc22wztMyW6vSxyZCgDUvGIDJCiGZewCVQ+j6EGQbgl85BLmxaYN1nj4ZtRt+pRC6Og21SvBLhxDSQmyyFAb8UiFIhZo2WFfjVkRb4HuH0KXNONsy+N4hSK2mNmBX4N17YcL3CiGEYWjcCxe+VwhHj/UhuwpHkqHAT5XZETn41gbtMvz+RmYAJjTljqMHD/Rhu1jLUsRSIs7CrPkqqNLE7dhKE1PvtGB1LKXxHm01nQzAKpenf7nj18ZOB2AN8OlW8/D5Bo0p09OzlYbeotT3/+OI4gqw/ywl4jIdnBd8mf6+4Zv0/K6G42F94I+GuYssXgE2A4Lsy0itpuxQloUuz5GNNb+tZQ5ByIMg28MCUqatclp1MuWjCuSx/fSjCno+W8oMAAHZhCZtYGAA+tDAK0AfHGIdgtQq8GwHDlM6FkKi3Y+YQ0i02x9zCIl2u2MOIdFub8whJNrtjDmERLt9MYeQaLcr5hAS7fbE/G+s1rXbQVEURVEURVEURVEURVHGQ38AuubmeCMuMP0AAAAASUVORK5CYII=";
const moonIcon = "data:image/png;base64,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";
const PriceCard = ({
  image,
  title,
  price,
  listItems
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-5/6 max-w-80 h-80 bg-pink-50 shadow-lg rounded-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: "sun-or-moon",
        className: "absolute -top-12 left-1/2 transform -translate-x-1/2"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-12 pl-12 tablet:pl-14 gap-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: title }),
      /* @__PURE__ */ jsx("h2", { className: "text-md font-medium", children: price }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col list-disc gap-2", children: listItems.map((item, index) => /* @__PURE__ */ jsx("li", { children: item }, index)) })
    ] })
  ] });
};
const dayInfo = {
  image: sunIcon,
  title: "Päevahoid",
  price: "15€/12h",
  listItems: [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum"
  ]
};
const nightInfo = {
  image: moonIcon,
  title: "Hotell",
  price: "40€/24h",
  listItems: [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum"
  ]
};
const Kodu = () => {
  const flexBetween = "flex items-center justify-between";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `grid mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 tablet:grid-cols-2`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-content-end gap-4 pb-4 z-10", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl tablet:text-4xl desktop:text-5xl font-extrabold", children: "PORKUNI" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl tablet:text-4xl desktop:text-5xl font-extrabold", children: "KOERTEHOTELL" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", children: "Lorem ipsum do lor sit amet, consectetur adipiscing elit. Curabitur id nunc fringilla erat semper suscipit eget in lacus. " }),
        /* @__PURE__ */ jsxs("div", { className: `flex justify-start flex-wrap gap-2 text-lg`, children: [
          /* @__PURE__ */ jsx("div", { className: `${flexBetween} bg-blue-100 py-1 px-5 rounded-md`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", className: `${flexBetween} font-semibold`, children: "KONTAKT" }) }) }),
          /* @__PURE__ */ jsx("div", { className: `${flexBetween} py-1 px-5 border-2 border-blue-100 rounded-md`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/hinnakiri", className: `${flexBetween} font-semibold`, children: "HINNAKIRI" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end z-10", children: /* @__PURE__ */ jsx("img", { src: dogCircle, alt: "smallDogCircle", className: "w-full object-scale-down desktop:w-5/6 " }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-pink-50 py-1", children: /* @__PURE__ */ jsxs("div", { className: "grid mx-auto mt-10 pb-6 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2 laptop:grid-rows-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-content-end gap-6 z-10", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl tablet:text-5xl desktop:text-5xl font-semibold", children: "Too oma koer puhkama" }),
        /* @__PURE__ */ jsx("p", { className: "text-md tablet:text-lg tablet:font-semibold", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nunc fringilla erat semper suscipit eget in lacus. Aliquam dapibus nibh lorem, in venenatis lorem condimentum vitae. Donec sit amet odio vitae nulla viverra accumsan. Aliquam tincidunt non felis a viverra. Cras ullamcorper nisl vestibulum tellus semper, sed molestie turpis cursus. In rutrum iaculis tellus ac tincidunt." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-wrap place-content-end gap-2 py-4 text-lg laptop:grid laptop:row-start-2 laptop:col-span-2 laptop:grid-cols-2 laptop:justify-items-center z-10`, children: [
        /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center tablet:max-h-10 tablet:w-48 bg-blue-100 py-1 px-5 rounded-md`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", className: `${flexBetween} font-semibold`, children: "KIRJUTA MEILE" }) }) }),
        /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center tablet:max-h-10 tablet:w-48 bg-blue-100 py-1 px-5 rounded-md`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/hinnakiri", className: `${flexBetween} font-semibold`, children: "LOE ROHKEM" }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid content-end laptop:col-start-1 laptop:row-start-1 z-10", children: /* @__PURE__ */ jsx("img", { src: image2, alt: "Dogs", className: "w-full rounded-md shadow-lg desktop:w-5/6" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-auto my-10 pb-6 laptop:w-8/12 w-10/12 gap-20", children: [
      /* @__PURE__ */ jsx("h1", { className: "flex items-center justify-center text-center laptop:text-left laptop:justify-start text-4xl tablet:text-5xl desktop:text-5xl font-semibold z-10", children: "Meie Teenused" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 laptop:flex-row laptop:gap-4", children: [
        /* @__PURE__ */ jsx(
          PriceCard,
          {
            image: dayInfo.image,
            title: dayInfo.title,
            price: dayInfo.price,
            listItems: dayInfo.listItems
          }
        ),
        /* @__PURE__ */ jsx(
          PriceCard,
          {
            image: nightInfo.image,
            title: nightInfo.title,
            price: nightInfo.price,
            listItems: nightInfo.listItems
          }
        )
      ] })
    ] }) })
  ] });
};
const image0 = "/assets/image0-ZaiDQP1P.jpeg";
const image5 = "/assets/image5-kxw6qmfG.jpeg";
const Meist = () => {
  const textStyle = "font-semibold text-md/normal tablet:text-xl/normal";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `grid mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-content-end gap-4 z-10", children: [
        /* @__PURE__ */ jsx("h1", { className: "flex \n                items-center \n                justify-center \n                text-center \n                laptop:text-left \n                laptop:justify-start \n                text-4xl \n                tablet:text-5xl \n                desktop:text-5xl \n                font-semibold", children: "MEIST" }),
        /* @__PURE__ */ jsx("p", { className: `${textStyle}`, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, quam et consectetur lacinia, lacus arcu imperdiet nibh, et lobortis metus dolor et dui. Praesent viverra nibh vitae ligula viverra, et molestie erat ultricies. Aenean vel auctor ipsum. Nunc at lectus scelerisque, euismod turpis id, pretium erat. Aliquam eget sodales nisl, in suscipit purus. Vivamus lacinia placerat velit. Ut viverra vitae felis non aliquam. Quisque imperdiet tempus lorem, ac dignissim orci fermentum cursus. Sed facilisis gravida felis sed condimentum. Quisque sollicitudin arcu dui, in pellentesque quam consectetur ac. Etiam pretium sapien justo, non posuere mi lobortis ut." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end align-bottom laptop:items-end z-10", children: /* @__PURE__ */ jsx("img", { src: image0, alt: "image0", className: "w-full object-scale-down desktop:w-5/6 rounded-md" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `grid mx-auto pb-6 laptop:w-8/12 w-10/12 gap-4 laptop:grid-cols-2`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-start laptop:items-end z-10", children: /* @__PURE__ */ jsx("img", { src: image5, alt: "image5", className: "w-full object-scale-down desktop:w-5/6 rounded-md" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-content-end gap-4 z-10", children: [
        /* @__PURE__ */ jsx("p", { className: `${textStyle}`, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, quam et consectetur lacinia, lacus arcu imperdiet nibh, et lobortis metus dolor et dui. Praesent viverra nibh vitae ligula viverra, et molestie erat ultricies. Aenean vel auctor ipsum. Nunc at lectus scelerisque, euismod turpis id, pretium erat. Aliquam eget sodales nisl, in suscipit purus. Vivamus lacinia placerat velit. Ut viverra vitae felis non aliquam. Quisque imperdiet tempus lorem, ac dignissim orci fermentum cursus. Sed facilisis gravida felis sed condimentum. Quisque sollicitudin arcu dui, in pellentesque quam consectetur ac. Etiam pretium sapien justo, non posuere mi lobortis ut." }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center laptop:justify-end", children: /* @__PURE__ */ jsx("div", { className: `flex w-auto justify-center bg-blue-100 py-1 px-5 rounded-md`, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", className: `font-semibold`, children: "KIRJUTA MEILE" }) }) }) })
      ] })
    ] })
  ] });
};
const Tingimused = [
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum do lor sit amet, consectetur adipiscing elit."
];
const Hinnakiri = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-auto mb-20 pb-8 pt-24 laptop:w-8/12 w-10/12 gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "flex \n                items-center \n                justify-center \n                text-center \n                laptop:text-left \n                laptop:justify-start \n                text-4xl \n                tablet:text-5xl \n                desktop:text-5xl \n                font-semibold", children: "MEIE TEENUSED" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 pb-10 z-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl", children: "Tingimused:" }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col list-disc gap-2 pl-8 text-lg", children: Tingimused.map((item, index) => /* @__PURE__ */ jsx("li", { children: item }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 laptop:flex-row laptop:gap-4", children: [
      /* @__PURE__ */ jsx(
        PriceCard,
        {
          image: dayInfo.image,
          title: dayInfo.title,
          price: dayInfo.price,
          listItems: dayInfo.listItems
        }
      ),
      /* @__PURE__ */ jsx(
        PriceCard,
        {
          image: nightInfo.image,
          title: nightInfo.title,
          price: nightInfo.price,
          listItems: nightInfo.listItems
        }
      )
    ] })
  ] }) });
};
const ImageGallery = ({ images, onImageClick }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 py-4 z-10", children: images.map((src, index) => /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt: `Image ${index}`,
      onClick: () => onImageClick(index),
      className: "cursor-pointer object-cover w-full h-48 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
    },
    index
  )) });
};
const ImageModal = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    trackMouse: true
  });
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50", onClick: onClose, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative bg-white p-4 rounded-md shadow-lg",
      onClick: (e) => e.stopPropagation(),
      ...handlers,
      children: [
        /* @__PURE__ */ jsx(XMarkIcon, { className: "absolute top-5 right-5 h-6 w-6 bg-white rounded-full", onClick: onClose }),
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "absolute left-2 h-8 w-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 bg-opacity-75 rounded-full p-2", onClick: onPrev }),
        /* @__PURE__ */ jsx("img", { src: images[selectedIndex], alt: `Image ${selectedIndex}`, className: "max-w-full max-h-[80vh] rounded-md" }),
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "absolute right-2 h-8 w-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 bg-opacity-75 rounded-full p-2", onClick: onNext })
      ]
    }
  ) });
};
const image1 = "/assets/image1-ClPwGLC_.jpeg";
const image3 = "/assets/image3-BhpnJEs4.jpeg";
const image4 = "/assets/image4-DqVBZm0p.jpeg";
const image6 = "/assets/image6-65qU-6Jc.jpeg";
const image7 = "/assets/image7-DdPQzac2.jpeg";
const image8 = "/assets/image8-lpw4zKNR.jpeg";
const image9 = "/assets/image9-CVd6TUuZ.jpeg";
const image10 = "/assets/image10-BBJfnX9M.jpeg";
const image11 = "/assets/image11-2kCF7xNK.jpeg";
const image12 = "/assets/image12-BLFDHthC.jpeg";
const image13 = "/assets/image13-DgYHfne8.jpeg";
const image14 = "/assets/image14-BT218grO.jpeg";
const image15 = "/assets/image15-PsmQ-eCX.jpeg";
const image16 = "/assets/image16-DkeB2o1h.jpeg";
const image17 = "/assets/image17-CP92k4vi.jpeg";
const Gallery = () => {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };
  const closeModal = () => {
    setSelectedImageIndex(null);
  };
  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx(ImageGallery, { images, onImageClick: openModal }),
    selectedImageIndex !== null && /* @__PURE__ */ jsx(
      ImageModal,
      {
        images,
        selectedIndex: selectedImageIndex,
        onClose: closeModal,
        onNext: showNextImage,
        onPrev: showPrevImage
      }
    )
  ] });
};
const Galerii = () => {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100", children: [
    /* @__PURE__ */ jsx("h1", { className: "flex \n            items-center \n            justify-center \n            text-center \n            laptop:text-left \n            laptop:justify-start \n            text-4xl \n            tablet:text-5xl \n            desktop:text-5xl \n            font-semibold", children: "GALERII" }),
    /* @__PURE__ */ jsx(Gallery, {})
  ] });
};
const loadGoogleMapsScript = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === "object" && typeof window.google.maps === "object") {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.head.appendChild(script);
  });
};
const containerStyle = {
  width: "100%",
  // Set width to 100% to make it responsive
  height: "400px"
  // Fixed height
};
const center = {
  lat: 59.45856957805664,
  lng: 24.8616672746847
};
const MyGoogleMaps = ({ apiKey, mapId }) => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadGoogleMapsScript(apiKey).then(() => setMapLoaded(true)).catch((error2) => {
            console.error("Error loading Google Maps script:", error2);
            setError("Error loading Google Maps script.");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, [apiKey]);
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      const initializeMap = async () => {
        try {
          const { Map } = await google.maps.importLibrary("maps");
          const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
          if (mapRef.current) {
            const map = new Map(mapRef.current, {
              center,
              zoom: 16,
              mapId
              // Set the Map ID here
            });
            new AdvancedMarkerElement({
              position: center,
              map,
              title: "Porkuni KoerteHotell"
            });
          }
        } catch (err) {
          console.error("Error initializing Google Map:", err);
          setError("Error initializing Google Map.");
        }
      };
      initializeMap();
    }
  }, [mapLoaded, mapId]);
  return /* @__PURE__ */ jsx("div", { children: error ? /* @__PURE__ */ jsxs("div", { children: [
    "Error: ",
    error
  ] }) : /* @__PURE__ */ jsx("div", { ref: mapRef, className: "map-container", style: containerStyle }) });
};
const Kontakt = () => {
  const apiKey = "AIzaSyDTR55_DkO-huaSnRYp-a6LxohUI-rLcHw";
  const mapID = "a25f2d4538a892c";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100", children: [
    /* @__PURE__ */ jsx("h1", { className: "flex \n                items-center \n                justify-center \n                text-center \n                laptop:text-left \n                laptop:justify-start \n                text-4xl \n                tablet:text-5xl \n                desktop:text-5xl \n                font-semibold\n                z-10", children: "KONTAKT" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-evenly laptop:grid laptop:grid-cols-2 pt-4 gap-8 z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl", children: "Koertehotell" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "1, Kose — Ardu ",
          /* @__PURE__ */ jsx("br", {}),
          "75112, Harju maakond, Kose vald, Sõmeru ",
          /* @__PURE__ */ jsx("br", {}),
          "+372 5070 6082 ",
          /* @__PURE__ */ jsx("br", {}),
          "koertehotell@koertehotell.ee"
        ] }),
        /* @__PURE__ */ jsx(MyGoogleMaps, { apiKey, mapId: mapID })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl", children: "Kirjuta Meile" }),
        /* @__PURE__ */ jsxs("form", { action: "", className: "flex flex-col h-full gap-3", children: [
          /* @__PURE__ */ jsx("input", { type: "text", id: "nimi", placeholder: "Nimi...", className: "rounded-full px-3 h-10 w-1/2 shadow-lg" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "eMail", placeholder: "E-mail...", className: "rounded-full px-3 h-10 w-1/2 shadow-lg" }),
          /* @__PURE__ */ jsx("textarea", { id: "sisu", placeholder: "Kirja sisu...", className: "rounded-md px-3 pt-3 h-60 laptop:h-full shadow-lg" }),
          /* @__PURE__ */ jsx("button", { className: "h-10 rounded-full border-black border-solid border-2 bg-blue-100 shadow-lg", children: "Saada" })
        ] })
      ] })
    ] })
  ] });
};
const FooterBar = () => {
  const flexBetween = "flex items-center justify-center";
  return /* @__PURE__ */ jsx("div", { className: `${flexBetween} bg-blue-100 fixed bottom-0 z-30 w-full`, children: /* @__PURE__ */ jsx("p", { children: "© 2024 Porkuni Koertehotell" }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bottom-0 bg-blue-50 pt-8 pb-12 w-full", children: /* @__PURE__ */ jsxs("div", { className: "justify-between mx-auto laptop:w-8/12 w-10/12 tablet:flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 mt-16 basis-1/2 tablet:mt-0", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl z-10", children: "Koertehotell" }),
      /* @__PURE__ */ jsxs("p", { className: "z-10", children: [
        "1, Kose — Ardu ",
        /* @__PURE__ */ jsx("br", {}),
        "75112, Harju maakond, Kose vald, Sõmeru ",
        /* @__PURE__ */ jsx("br", {}),
        "+372 5070 6082 ",
        /* @__PURE__ */ jsx("br", {}),
        "koertehotell@koertehotell.ee"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6 mt-16 basis-1/8 phone:mt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "z-10", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold z-10", children: /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Kodu" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/blogi", children: "Blogi" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/meist", children: "Meist" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/hinnakiri", children: "Hinnakiri" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/galerii", children: "Galerii" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "z-10", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold", children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", children: "Kontakt" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", children: "Facebook" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", children: "Instagram" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/kontakt", children: "E-Mail" }) })
        ] })
      ] })
    ] })
  ] }) });
};
const dreamCatcher = "/assets/dreamcatcher-DarQS9GF.png";
const tribalPattern = "/assets/pattern-DETJTGaC.png";
const App = () => {
  return /* @__PURE__ */ jsxs("div", { className: "app bg-pink-100", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "flex fixed top-0 tablet:left-0 pl-4 z-0 opacity-60 laptop:opacity-75", children: /* @__PURE__ */ jsx("img", { src: dreamCatcher, alt: "left decoration" }) }),
    /* @__PURE__ */ jsx("div", { className: "tablet:flex fixed hidden top-0 right-0 pr-4 z-0 opacity-50", children: /* @__PURE__ */ jsx("img", { src: tribalPattern, alt: "right decoration" }) }),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Kodu, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/blogi", element: /* @__PURE__ */ jsx(Blogi, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/meist", element: /* @__PURE__ */ jsx(Meist, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/hinnakiri", element: /* @__PURE__ */ jsx(Hinnakiri, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/galerii", element: /* @__PURE__ */ jsx(Galerii, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/kontakt", element: /* @__PURE__ */ jsx(Kontakt, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FooterBar, {})
  ] });
};
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  return null;
}
const renderApp = () => /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsx(App, {})
] }) });
const render = async (url) => {
  return renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: renderApp() })
  );
};
export {
  render
};
