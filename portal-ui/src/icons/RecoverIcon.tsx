// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const RecoverIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <g data-name="RecoverIcon">
        <path d="M216.783 256a16.655 16.655 0 0 1-4.354-.6l-57.238-15.5a14.778 14.778 0 0 1-10.492-18.271l15.535-57.135c5.1-18.748 33.652-11.014 28.557 7.734l-5.8 21.333-1.033 3.5c.176-.094.342-.2.525-.288a84.861 84.861 0 0 0 39.223-113.4 85.2 85.2 0 0 0-62.492-46.565 12.846 12.846 0 0 1-10.568-14.789 12.864 12.864 0 0 1 14.811-10.552 110.978 110.978 0 0 1 81.389 60.667 109.742 109.742 0 0 1 11.158 47.846v.683a110.648 110.648 0 0 1-62.258 99.21c-.059.032-.121.049-.18.077l9.572 2.328 17.045 4.615c17.252 4.673 12.115 29.111-3.393 29.111ZM94.678 244.716a13.242 13.242 0 0 1-2.135-.175 110.98 110.98 0 0 1-81.387-60.667A109.694 109.694 0 0 1 .002 135.786v-.229a110.629 110.629 0 0 1 62.252-99.421c.064-.032.123-.05.186-.081l-9.576-2.323-17.041-4.615C18.589 24.448 23.694.064 39.157.002h.131a16.69 16.69 0 0 1 4.283.606l57.242 15.5a14.775 14.775 0 0 1 10.488 18.272L95.77 91.514c-5.1 18.749-33.658 11.015-28.562-7.734l5.8-21.336 1.039-3.5c-.176.094-.346.2-.531.288a84.855 84.855 0 0 0-39.217 113.4 85.188 85.188 0 0 0 62.486 46.569 12.845 12.845 0 0 1 10.57 14.785 12.866 12.866 0 0 1-12.674 10.731ZM107 128a21 21 0 0 1 21-21 21 21 0 0 1 21 21 21 21 0 0 1-21 21 21 21 0 0 1-21-21Z" />
        <path data-name="Rect\xE1ngulo 845" fill="none" d="M0 0h256v256H0z" />
      </g>
    </g>
  </svg>
);

export default RecoverIcon;
