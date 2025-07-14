import * as React from "react";
import { Separator } from "@radix-ui/react-separator";

const SeparatorDemo = () => (
  <div className="mx-[15px] w-full max-w-[500px]">
    <div className="text-[15px] font-medium leading-5 text-black">
      Radix Primitives
    </div>
    <div className="text-[15px] leading-5 text-black">
      An open-source UI component library.
    </div>
    <Separator className="my-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
    <div className="flex h-5 items-center">
      <div className="text-[15px] leading-5 text-black">Blog</div>
      <Separator
        className="mx-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
        decorative
        orientation="vertical"
      />
      <div className="text-[15px] leading-5 text-black">Docs</div>
      <Separator
        className="mx-[15px] bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px"
        decorative
        orientation="vertical"
      />
      <div className="text-[15px] leading-5 text-black">Source</div>
    </div>
  </div>
);

export default SeparatorDemo;
