"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PopoverButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to toggle popover */}
      <Button variant="outline" onClick={togglePopover}>
        View Details
      </Button>

      {/* Render the popover using a portal */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-muted/50"
            onClick={closePopover} // Close popover when clicking outside
          >
            <div
              className="bg-background text-foreground rounded-lg shadow-lg p-6 w-[90%] max-w-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="flex flex-col items-center">
                {/* Space for two app screenshots */}
                <Image
                  src="/screenshot1.png"
                  alt="Screenshot 1"
                  width={300}
                  height={150}
                  className="mb-4"
                />
                <Image
                  src="/screenshot2.png"
                  alt="Screenshot 2"
                  width={300}
                  height={150}
                  className="mb-4"
                />
                {/* Small text */}
                <p className="text-sm text-muted-foreground">
                  Explore the app's features in detail.
                </p>
                {/* Close button */}
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={closePopover}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>,
          document.body // Render the popover at the root of the DOM
        )}
    </>
  );
}
