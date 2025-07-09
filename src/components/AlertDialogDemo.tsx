"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import * as React from "react";

const AlertDialogDemo = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
        Delete account
      </button>
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
      <AlertDialogContent
        className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow"
        onOpenAutoFocus={() => console.log("켜짐제어")}
        onCloseAutoFocus={() => console.log("꺼짐제어")}
        onEscapeKeyDown={() => console.log("ESC제어")}
      >
        <AlertDialogTitle className="m-0 text-[17px] font-medium text-mauve12">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <div className="flex justify-end gap-[25px]">
          <AlertDialogCancel asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-mauve5 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
              Cancel
            </button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded bg-red4 px-[15px] font-medium leading-none text-red11 outline-none outline-offset-1 hover:bg-red5 focus-visible:outline-2 focus-visible:outline-red7 select-none">
              Yes, delete account
            </button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialog>
);

export default AlertDialogDemo;
