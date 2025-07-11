import * as React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar
      className="flex rounded-md bg-white p-[3px] shadow-[0_2px_10px] shadow-blackA4"
      defaultValue="edit"
      onValueChange={(value) => {
        console.log(`${value} 값으로 변경`);
      }}
    >
      <MenubarMenu value="file">
        <MenubarTrigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet11 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
          File
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <MenubarItem
              className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11"
              textValue="뉴탭"
              onSelect={(event) => {
                event.preventDefault(); // 메뉴 닫히는 것 방지
                console.log("메뉴 닫지 않고 실행!");
              }}
            >
              New Tab{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘ T
              </div>
            </MenubarItem>
            <MenubarItem className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              New Window{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘ N
              </div>
            </MenubarItem>
            <MenubarItem
              className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11"
              disabled
            >
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarSub>
              <MenubarSubTrigger className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                Share
                <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </MenubarSubTrigger>
              <MenubarPortal>
                <MenubarSubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  alignOffset={-5}
                >
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Email Link
                  </MenubarItem>
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Messages
                  </MenubarItem>
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Notes
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarItem className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
              Print…{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘ P
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="edit">
        <MenubarTrigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet11 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
          Edit
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <MenubarItem className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Undo{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘ Z
              </div>
            </MenubarItem>
            <MenubarItem className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Redo{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⇧ ⌘ Z
              </div>
            </MenubarItem>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarSub>
              <MenubarSubTrigger className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                Find
                <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </MenubarSubTrigger>

              <MenubarPortal>
                <MenubarSubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                  alignOffset={-5}
                >
                  <MenubarItem className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Search the web…
                  </MenubarItem>
                  <MenubarSeparator className="m-[5px] h-px bg-violet6" />
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Find…
                  </MenubarItem>
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Find Next
                  </MenubarItem>
                  <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                    Find Previous
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Cut
            </MenubarItem>
            <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Copy
            </MenubarItem>
            <MenubarItem className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Paste
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="view">
        <MenubarTrigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet11 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
          View
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {CHECK_ITEMS.map((item) => (
              <MenubarCheckboxItem
                className="relative flex h-[25px] select-none items-center rounded px-2.5 pl-5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <MenubarItemIndicator className="absolute left-0 inline-flex w-5 items-center justify-center">
                  <CheckIcon />
                </MenubarItemIndicator>
                {item}
              </MenubarCheckboxItem>
            ))}
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarItem className="group relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Reload{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘ R
              </div>
            </MenubarItem>
            <MenubarItem
              className="group relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11"
              disabled
            >
              Force Reload{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⇧ ⌘ R
              </div>
            </MenubarItem>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarItem className="relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Toggle Fullscreen
            </MenubarItem>
            <MenubarSeparator className="m-[5px] h-px bg-violet6" />
            <MenubarItem className="relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
              Hide Sidebar
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="profiles">
        <MenubarTrigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet11 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
          Profiles
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <MenubarRadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <MenubarRadioItem
                  className="relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                  key={item}
                  value={item}
                >
                  <MenubarItemIndicator className="absolute left-0 inline-flex w-5 items-center justify-center">
                    <DotFilledIcon />
                  </MenubarItemIndicator>
                  {item}
                </MenubarRadioItem>
              ))}
              <MenubarSeparator className="m-[5px] h-px bg-violet6" />
              <MenubarItem className="relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                Edit…
              </MenubarItem>
              <MenubarSeparator className="m-[5px] h-px bg-violet6" />
              <MenubarItem className="relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                Add Profile…
              </MenubarItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarDemo;
