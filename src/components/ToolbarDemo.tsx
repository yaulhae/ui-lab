import * as React from "react";
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "@radix-ui/react-toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";

const ToolbarDemo = () => (
  <Toolbar
    className="flex w-full min-w-max rounded-md bg-white p-2.5 shadow-[0_2px_10px] shadow-blackA4"
    aria-label="Formatting options"
  >
    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="bold"
        aria-label="Bold"
      >
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="italic"
        aria-label="Italic"
      >
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="strikethrough"
        aria-label="Strike through"
      >
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator className="mx-2.5 w-px bg-mauve6" />
    <ToolbarToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="left"
        aria-label="Left aligned"
      >
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="center"
        aria-label="Center aligned"
      >
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        className="ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
        value="right"
        aria-label="Right aligned"
      >
        <TextAlignRightIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator className="mx-2.5 w-px bg-mauve6" />
    <ToolbarLink
      className="ml-0.5 hidden h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-transparent bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:cursor-pointer hover:bg-transparent hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11 sm:inline-flex"
      href="#"
      target="_blank"
      style={{ marginRight: 10 }}
    >
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton
      className="inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-violet9 px-2.5 text-[13px] leading-none text-white outline-none hover:bg-violet10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
      style={{ marginLeft: "auto" }}
    >
      Share
    </ToolbarButton>
  </Toolbar>
);

export default ToolbarDemo;
