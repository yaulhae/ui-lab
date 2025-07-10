"use client";
import AccordionDemo from "@/components/AccordionDemo";
import AlertDialogDemo from "@/components/AlertDialogDemo";
import AspectRatioDemo from "@/components/AspectRatioDemo";
import AvatarDemo from "@/components/AvatarDemo";
import CheckboxDemo from "@/components/CheckboxDemo";
import CollapsibleDemo from "@/components/CollapsibleDemo";
import ContextMenuDemo from "@/components/ContextMenu";
import DialogDemo from "@/components/DialogDemo";

export default function Home() {
  return (
    <div>
      {/* <AvatarDemo /> */}
      {/* <AccordionDemo /> */}
      {/* <AlertDialogDemo /> */}
      {/* <AspectRatioDemo /> */}
      {/* <CheckboxDemo /> */}
      {/* <CollapsibleDemo /> */}
      {/* <ContextMenuDemo />
      <button
        onClick={() => console.log("클릭")}
        className="ml-12 border px-3 py-1 rounded-full my-3"
      >
        모달 기능 확인용 클릭버튼
      </button> */}
      <DialogDemo />
    </div>
  );
}
