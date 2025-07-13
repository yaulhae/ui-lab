import * as React from "react";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "@radix-ui/react-radio-group";

const RadioGroupDemo = () => (
  <form>
    <RadioGroup
      className="flex flex-col gap-2.5"
      defaultValue="default"
      aria-label="View density"
      dir="rtl"
    >
      <div className="flex items-center">
        <RadioGroupItem
          className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="default"
          id="r1"
        >
          <RadioGroupIndicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
        </RadioGroupItem>
        <label
          className="pr-[15px] text-[15px] leading-none text-black"
          htmlFor="r1"
        >
          Default
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem
          className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="comfortable"
          id="r2"
        >
          <RadioGroupIndicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
        </RadioGroupItem>
        <label
          className="pr-[15px] text-[15px] leading-none text-black"
          htmlFor="r2"
        >
          Comfortable
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem
          className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="compact"
          id="r3"
        >
          <RadioGroupIndicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
        </RadioGroupItem>
        <label
          className="pr-[15px] text-[15px] leading-none text-black"
          htmlFor="r3"
        >
          Compact
        </label>
      </div>
    </RadioGroup>
  </form>
);

export default RadioGroupDemo;
