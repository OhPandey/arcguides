"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function Changelog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-28 bg-zinc-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-zinc-600 transition"
      >
        Changelog
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-6">
          Changelog
        </h2>

        <div className="space-y-6 text-sm">

          <div>
            <p className="font-semibold text-white">v0.1.1 BETA (25/03/2025)</p>
            <ul className="text-zinc-400 mt-2 space-y-1">
              <li>• Beta started</li>
            </ul>
          </div>

        </div>
      </Modal>
    </>
  );
}