import * as React from "react";
import { ComponentPropsWithoutRef } from "react";

export type BrokenLinkIconProps = ComponentPropsWithoutRef<"svg"> & { size?: number };

export const BrokenLinkIcon = ({ size = 32, ...props }: BrokenLinkIconProps) => {
  return (
    <svg height={size} version="1.1" viewBox="0 0 512 512" width={size} x="0" xmlns="http://www.w3.org/2000/svg" y="0" {...props}>
      <g>
        <path
          d="M224.18 287.82c-40.942-40.941-107.551-40.941-148.493 0l-44.98 44.98c-40.941 40.942-40.941 107.552 0 148.493 40.941 40.941 107.55 40.941 148.492 0l44.98-44.98c40.942-40.942 40.942-107.551 0-148.493zm-87.407 151.047c-17.609 17.606-46.035 17.61-63.64 0-17.61-17.605-17.606-46.035 0-63.64l44.98-44.98c17.61-17.606 46.032-17.606 63.64 0 17.61 17.605 17.606 46.03 0 63.64zm0 0"
          data-original="#6e6e6e"
          fill="#6E6E6E"
          opacity="1"
        ></path>
        <path
          d="m224.18 436.313-44.98 44.98c-40.942 40.941-107.552 40.941-148.493 0l42.426-42.426c17.605 17.61 46.031 17.606 63.64 0l44.98-44.98c17.606-17.61 17.606-46.032 0-63.64l42.427-42.427c40.941 40.942 40.941 107.551 0 148.492zm0 0"
          data-original="#5a5a5a"
          fill="#5A5A5A"
          opacity="1"
        ></path>
        <path
          d="M481.293 30.707c-40.941-40.941-107.55-40.941-148.492 0l-44.98 44.98c-40.942 40.942-40.942 107.551 0 148.493 40.94 40.941 107.55 40.941 148.492 0l44.98-44.98c40.941-40.942 40.941-107.552 0-148.493zm-87.406 151.047c-17.606 17.605-46.032 17.605-63.64 0-17.61-17.606-17.606-46.035 0-63.64l44.98-44.981c17.609-17.61 46.03-17.61 63.64 0 17.61 17.605 17.61 46.031 0 63.64zm0 0"
          data-original="#6e6e6e"
          fill="#6E6E6E"
          opacity="1"
        ></path>
        <g fill="#FFD400">
          <path
            d="m409.242 305.422-9.488 28.465-63.64-21.215 9.488-28.461zM312.645 336.102l21.21 63.64-28.464 9.488-21.211-63.64zM206.586 102.762l21.21 63.64-28.464 9.489-21.21-63.641zM175.89 199.348l-9.484 28.464-63.64-21.21 9.484-28.465zm0 0"
            data-original="#ffd400"
            fill="#FFD400"
            opacity="1"
          ></path>
        </g>
        <path
          d="m481.293 179.2-44.98 44.98c-40.942 40.941-107.551 40.941-148.493 0l42.426-42.426c17.606 17.605 46.035 17.605 63.64 0l44.981-44.98c17.61-17.61 17.61-46.036 0-63.641l42.426-42.426c40.941 40.941 40.941 107.55 0 148.492zm0 0"
          data-original="#5a5a5a"
          fill="#5A5A5A"
          opacity="1"
        ></path>
        <path
          d="M372.672 139.328c-17.606-17.61-46.031-17.61-63.64 0l-74.247 74.246 63.64 63.637 74.247-74.246c17.61-17.606 17.61-46.031 0-63.637zm0 0"
          data-original="#ffd400"
          fill="#FFD400"
          opacity="1"
        ></path>
        <path
          d="m372.672 202.965-74.246 74.246-31.82-31.816 106.066-106.067c17.61 17.606 17.61 46.031 0 63.637zm0 0"
          data-original="#ff9f00"
          fill="#FF9F00"
          opacity="1"
        ></path>
        <path
          d="m213.574 234.785-74.246 74.246c-17.605 17.61-17.605 46.035 0 63.64 17.606 17.61 46.035 17.606 63.64 0l74.247-74.245zm0 0"
          data-original="#ffd400"
          fill="#FFD400"
          opacity="1"
        ></path>
        <path
          d="m245.395 266.605 31.816 31.82-74.246 74.247c-17.606 17.605-46.031 17.61-63.637 0zm0 0"
          data-original="#ff9f00"
          fill="#FF9F00"
          opacity="1"
        ></path>
      </g>
    </svg>
  );
};
