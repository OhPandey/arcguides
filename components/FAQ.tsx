"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-zinc-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-zinc-600 transition"
      >
        FAQ
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-4">
          FAQ
        </h2>
      </Modal>
    </>
  );
}