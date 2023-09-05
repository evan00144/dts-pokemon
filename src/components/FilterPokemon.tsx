/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface iFilterPokemon {
  setFilterType: any;
  filterType:string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterPokemon({ setFilterType,filterType }: iFilterPokemon) {
  const [types, setTypes] = useState<any>([]);
  const fetchType = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      const data = await res.json();

      setTypes(data?.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectFilter = (string: string) => {
    setFilterType(string);
  };

  useEffect(() => {
    fetchType();
  }, []);
  return (
    <>
      <div className="flex items-center text-white gap-2 mb-5">
        Type:
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex capitalize w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {filterType==="" ? "All" : filterType}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 h-48 overflow-auto">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => handleSelectFilter("")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      All
                    </div>
                  )}
                </Menu.Item>
                {types?.map((e: any, index: number) => (
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => handleSelectFilter(e?.name)}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {e?.name.charAt(0).toUpperCase() + e?.name.slice(1)}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* <select name="type" defaultValue={""} onChange={handleSelectFilter}>
          <option value="">All</option>
          {types?.map((e: any, index: number) => (
            <option value={e?.name} key={index}>
              {e?.name.charAt(0).toUpperCase() + e?.name.slice(1)}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
}
