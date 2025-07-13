import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem as SelectPrimitiveItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const SelectDemo = () => (
  <Select>
    <SelectTrigger
      className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
      aria-label="Food"
    >
      <SelectValue placeholder="Select a fruit…" />
      <SelectIcon className="text-violet11">
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent
        position="popper"
        side="right"
        className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
      >
        <SelectScrollUpButton className="flex h-[10px] cursor-default items-center justify-center bg-blue-800 text-violet11">
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport className="">
          <SelectGroup>
            <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
              Fruits
            </SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>

          <SelectSeparator className="m-[5px] h-px bg-violet6" />

          <SelectGroup>
            <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
              Vegetables
            </SelectLabel>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </SelectGroup>

          <SelectSeparator className="m-[5px] h-px bg-violet6" />

          <SelectGroup>
            <SelectLabel className="px-[25px] text-xs leading-[25px] text-mauve11">
              Meat
            </SelectLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-blue-50 text-violet11">
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </Select>
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitiveItem>, // ref 타입 (HTMLDivElement)
  React.ComponentPropsWithoutRef<typeof SelectPrimitiveItem> // props 타입
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitiveItem
      className={classnames(
        "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </SelectItemIndicator>
    </SelectPrimitiveItem>
  );
});
export default SelectDemo;
