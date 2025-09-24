import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

// ✅ put cn helper here, before usage
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = DialogPrimitive.Overlay;
const DialogContentPrimitive = DialogPrimitive.Content;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;

const DialogContent = ({ className, children, ...props }) => (
  <DialogPortal>
    <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
    <DialogContentPrimitive
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
        <X className="h-4 w-4" />
      </DialogClose>
    </DialogContentPrimitive>
  </DialogPortal>
);

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
