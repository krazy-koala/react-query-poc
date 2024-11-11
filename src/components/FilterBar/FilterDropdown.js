import React from "react";
import { Button, Dropdown } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useSetAtom } from "jotai";

import { filtersAtom } from "../../store/filtersAtom";

const FILTER_MENU_ITEMS = [
  {
    key: "saved",
    label: "Saved",
  },
  {
    key: "unsaved",
    label: "Unsaved",
  },
];

const FilterDropdown = () => {
  const setSelectedFilters = useSetAtom(filtersAtom);

  const handleSelect = (item) => {
    setSelectedFilters((prevItems) => [...prevItems, item.key]);
  };

  const handleDeselect = (item) => {
    setSelectedFilters((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item.key)
    );
  };

  return (
    <Dropdown
      menu={{
        items: FILTER_MENU_ITEMS,
        selectable: true,
        multiple: true,
        onSelect: handleSelect,
        onDeselect: handleDeselect,
      }}
    >
      <Button icon={<FilterOutlined />} />
    </Dropdown>
  );
};

export default FilterDropdown;
