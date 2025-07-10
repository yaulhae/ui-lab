"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu";
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  const itemClass =
    "group relative flex h-6 select-none items-center rounded px-1 pl-6 pr-2 text-sm leading-none text-violet-600 outline-none disabled:pointer-events-none hover:bg-violet-100 data-[highlighted]:bg-violet-200 disabled:text-gray-400 data-[highlighted]:text-violet-900";

  return (
    <ContextMenu modal={false} dir="rtl">
      <ContextMenuTrigger className="block w-[300px] select-none rounded border-2 border-dashed border-gray-400 py-10 text-center text-sm text-black">
        Right-click here.
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuContent
          className="min-w-[220px] overflow-hidden rounded-md bg-white p-1 shadow-lg"
          loop
          collisionPadding={20}
          // avoidCollisions={false}
          onCloseAutoFocus={() => {
            console.log("메뉴 닫힘");
          }}
          onEscapeKeyDown={() => {
            console.log("ESC");
          }}
          onPointerDownOutside={(event) => {
            console.log("외부 클릭 닫기 막음");
            event.preventDefault();
          }}
          onFocusOutside={() => {
            console.log("tab 포커스 아웃사이드 ");
          }}
          onInteractOutside={() => {
            console.log("바깥 인터랙션");
          }}
        >
          <ContextMenuItem className={itemClass}>
            Back
            <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
              ⌘+[
            </div>
          </ContextMenuItem>
          <ContextMenuItem className={itemClass} disabled>
            Forward
            <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
              ⌘+]
            </div>
          </ContextMenuItem>
          <ContextMenuItem className={itemClass}>
            Reload
            <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
              ⌘+R
            </div>
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger className={itemClass}>
              More Tools
              <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
                <ChevronRightIcon />
              </div>
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent className="min-w-[220px] overflow-hidden rounded-md bg-white p-1 shadow-lg">
                <ContextMenuItem className={itemClass}>
                  Save Page As…
                  <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
                    ⌘+S
                  </div>
                </ContextMenuItem>
                <ContextMenuItem className={itemClass}>
                  Create Shortcut…
                </ContextMenuItem>
                <ContextMenuItem className={itemClass}>
                  Name Window…
                </ContextMenuItem>
                <ContextMenuSeparator className="my-1 h-px bg-gray-200" />
                <ContextMenuItem className={itemClass}>
                  Developer Tools
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>

          <ContextMenuSeparator className="my-1 h-px bg-gray-200" />

          <ContextMenuCheckboxItem
            className={itemClass}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenuItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks
            <div className="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-black">
              ⌘+B
            </div>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            className={itemClass}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenuItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator className="my-1 h-px bg-gray-200" />

          <ContextMenuLabel className="pl-6 text-xs leading-6 text-gray-400">
            People
          </ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem className={itemClass} value="pedro">
              <ContextMenuItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem className={itemClass} value="colm">
              <ContextMenuItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenu>
  );
};

export default ContextMenuDemo;
