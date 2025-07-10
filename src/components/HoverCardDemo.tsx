import * as React from "react";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

const HoverCardDemo = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a
        className="inline-block cursor-pointer rounded-full shadow-black/35 shadow-lg outline-none focus:ring-2 focus:ring-white"
        href="https://twitter.com/radix_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="block size-[45px] rounded-full"
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </a>
    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        className="w-[300px] rounded-md bg-white p-5 shadow-black/35 shadow-lg data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2">
          <img
            className="block size-[60px] rounded-full"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <div className="flex flex-col gap-4">
            <div>
              <div className="m-0 text-[15px] font-medium text-gray-800">
                Radix
              </div>
              <div className="m-0 text-[15px] text-gray-600">@radix_ui</div>
            </div>
            <div className="m-0 text-[15px] text-gray-800">
              Components, icons, colors, and templates for building
              high-quality, accessible UI. Free and open-source.
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <div className="m-0 text-[15px] font-medium text-gray-800">
                  0
                </div>
                <div className="m-0 text-[15px] text-gray-600">Following</div>
              </div>
              <div className="flex gap-1">
                <div className="m-0 text-[15px] font-medium text-gray-800">
                  2,900
                </div>
                <div className="m-0 text-[15px] text-gray-600">Followers</div>
              </div>
            </div>
          </div>
        </div>

        <HoverCardArrow className="fill-white" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCard>
);

export default HoverCardDemo;
