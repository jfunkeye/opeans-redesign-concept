import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <ChevronDown
                size={18}
                className={`transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <div className="accordion-body">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}