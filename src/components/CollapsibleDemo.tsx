"use client";

import * as React from "react";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible className="w-[300px]" open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <span className=" text-[15px] leading-[25px] text-black">
          @peduarte starred 3 repositories
        </span>
        <CollapsibleTrigger asChild>
          <button className="inline-flex size-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </CollapsibleTrigger>
      </div>

      <div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
        <span className="text-[15px] leading-[25px] text-violet11">
          @radix-ui/primitives
        </span>
      </div>

      <CollapsibleContent>
        <div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-[15px] leading-[25px] text-violet11">
            @radix-ui/colors
          </span>
        </div>
        <div className="my-2.5 rounded bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-[15px] leading-[25px] text-violet11">
            @radix-ui/themes
          </span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleDemo;
