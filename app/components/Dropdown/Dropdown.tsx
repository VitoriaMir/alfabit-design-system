"use client";

import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { dropdownStyles } from "./Dropdown.style";

export type DropdownProps = {
  list: string[];
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown = ({ list, className, ...rest }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(list[0]);
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? list
      : list.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <Combobox value={selectedItem} onChange={setSelectedItem}>
      <div
        className={`${dropdownStyles.container} ${className || ""}`}
        {...rest}
      >
        <div className={dropdownStyles.containerMenu}>
          <Combobox.Input
            className={dropdownStyles.input}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className={dropdownStyles.button}>
            <ChevronDownIcon
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className={dropdownStyles.optionsContainer}>
            {filteredItem.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <Combobox.Option
                  className={({ active }) =>
                    `${dropdownStyles.option} ${active ? "bg-gray-100" : ""}`
                  }
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <div className="flex items-center justify-between">
                      <span
                        className={`truncate ${
                          selected
                            ? "font-medium text-primary"
                            : "font-normal text-gray-900"
                        }`}
                      >
                        {item}
                      </span>
                      {selected && (
                        <CheckIcon
                          className="h-5 w-5 text-primary flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Dropdown;
