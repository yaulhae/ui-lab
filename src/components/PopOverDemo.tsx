import * as React from "react";
import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        className="inline-flex size-[35px] cursor-default items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        aria-label="Update dimensions"
      >
        <MixerHorizontalIcon />
      </button>
    </PopoverTrigger>
    <PopoverAnchor asChild>
      <button className="ml-10 mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Anchor Button
      </button>
    </PopoverAnchor>
    <PopoverPortal>
      <PopoverContent
        className="w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
        sideOffset={10}
      >
        <div className="flex flex-col gap-2.5">
          <p className="mb-2.5 text-[15px] font-medium leading-[19px] text-mauve12">
            Dimensions
          </p>
          <fieldset className="flex items-center gap-5">
            <label
              className="w-[75px] text-[13px] text-violet11"
              htmlFor="width"
            >
              Width
            </label>
            <input
              className="inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="width"
              defaultValue="100%"
            />
          </fieldset>
          <fieldset className="flex items-center gap-5">
            <label
              className="w-[75px] text-[13px] text-violet11"
              htmlFor="maxWidth"
            >
              Max. width
            </label>
            <input
              className="inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="maxWidth"
              defaultValue="300px"
            />
          </fieldset>
          <fieldset className="flex items-center gap-5">
            <label
              className="w-[75px] text-[13px] text-violet11"
              htmlFor="height"
            >
              Height
            </label>
            <input
              className="inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="height"
              defaultValue="25px"
            />
          </fieldset>
          <fieldset className="flex items-center gap-5">
            <label
              className="w-[75px] text-[13px] text-violet11"
              htmlFor="maxHeight"
            >
              Max. height
            </label>
            <input
              className="inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="maxHeight"
              defaultValue="none"
            />
          </fieldset>
        </div>
        <PopoverClose
          className="absolute right-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full text-violet11 outline-none hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          aria-label="Close"
        >
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow className="fill-white" />
      </PopoverContent>
    </PopoverPortal>
  </Popover>
);

export default PopoverDemo;
