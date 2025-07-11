import * as React from "react";
import { Label } from "@radix-ui/react-label";

const LabelDemo = () => (
  <div className="flex flex-wrap items-center gap-[15px] px-5">
    <Label
      className="text-[15px] font-medium leading-[35px] text-black"
      htmlFor="firstName"
    >
      First name
    </Label>
    <input
      className="inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-black focus:shadow-[0_0_0_2px_black]"
      type="text"
      id="firstName"
      defaultValue="Pedro Duarte"
    />
  </div>
);

export default LabelDemo;
