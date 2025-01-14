/** @format */

import { Icon } from "@iconify/react";
import PropType from "prop-types";
import { ICON } from "../../../constants/icon";
import Link from "next/link";

const SidebarLink = ({ name, icon, path, active }) => {
  return (
    <Link href={path}>
      <div className="btn btn-ghost w-full">
        <div className="flex items-center w-full">
          <Icon
            icon={active ? ICON[icon] : ICON[`${icon}-outline`]}
            width={36}
            height={36}
          />
          <div className={`text-md ${active ? "font-bold" : ""}`}>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarLink;

SidebarLink.propTypes = {
  name: PropType.string,
  icon: PropType.string,
  path: PropType.string,
  active: PropType.bool,
};
