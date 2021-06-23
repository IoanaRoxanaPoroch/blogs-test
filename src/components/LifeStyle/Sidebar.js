import React from "react";
import { FcLinux, FcReading, FcBinoculars, FcLandscape } from "react-icons/fc";

export const Sidebar = [
  {
    title: "FUNNY",
    url: "/funny",
    icon: <FcLinux />,
    cName: "side-text",
  },
  {
    title: "BOOKS",
    url: "/books",
    icon: <FcReading />,
    cName: "side-text",
  },
  {
    title: "MOVIES",
    url: "/movies",
    icon: <FcBinoculars />,
    cName: "side-text",
  },
  {
    title: "TRAVEL",
    url: "/travel",
    icon: <FcLandscape />,
    cName: "side-text",
  },
];
