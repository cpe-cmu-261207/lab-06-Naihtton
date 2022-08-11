import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(props) {
  return (
    <div className="border-bottom">
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        <IconChevronDown />
      </div>
      {/* UserCardDetail is hidden */}
    </div>
  );
}
