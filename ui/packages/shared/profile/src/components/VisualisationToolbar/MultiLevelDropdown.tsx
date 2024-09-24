// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {useCallback} from 'react';

import {Menu} from '@headlessui/react';
import {Icon} from '@iconify/react';

import {useURLState} from '@parca/components';
import {USER_PREFERENCES, useUserPreference} from '@parca/hooks';
import {ProfileType} from '@parca/parser';

import {
  FIELD_CUMULATIVE,
  FIELD_DIFF,
  FIELD_FUNCTION_NAME,
} from '../../ProfileIcicleGraph/IcicleGraphArrow';
import {useProfileViewContext} from '../../ProfileView/ProfileViewContext';

interface MenuItemType {
  label: string;
  items?: MenuItemType[];
  onclick?: () => void;
  hide?: boolean;
  id?: string;
  disabled?: boolean;
  active?: boolean;
  value?: string;
  icon?: string;
}

type MenuItemProps = MenuItemType & {
  onSelect: (path: string[]) => void;
  path?: string[];
  closeDropdown: () => void;
  isNested?: boolean;
  activeValueForSortBy?: string;
  activeValueForColorBy?: string;
  icon?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  items,
  onclick,
  onSelect,
  path = [],
  id,
  closeDropdown,
  isNested = false,
  activeValueForSortBy,
  activeValueForColorBy,
  value,
  disabled = false,
  icon,
}) => {
  let isActive = false;
  if (isNested) {
    if (activeValueForSortBy !== undefined && value === activeValueForSortBy) {
      isActive = true;
    }
    if (activeValueForColorBy !== undefined && value === activeValueForColorBy) {
      isActive = true;
    }
  }

  const handleSelect = (): void => {
    if (items === undefined) {
      if (onclick !== undefined) {
        onclick();
        closeDropdown();
      } else {
        onSelect([...path, label]);
        closeDropdown();
      }
    }
  };

  return (
    <div className="relative">
      <Menu>
        {({close}) => (
          <>
            <Menu.Button
              className={`w-full text-left px-4 py-2 text-sm ${
                disabled
                  ? 'text-gray-400'
                  : isActive
                  ? 'text-white bg-indigo-400 hover:text-white'
                  : 'text-white-600 hover:bg-indigo-600 hover:text-white'
              } flex justify-between items-center`}
              onClick={handleSelect}
              id={id}
              disabled={disabled}
            >
              <span className="flex items-center">
                <div className="flex items-center">
                  <span>{label}</span>
                  {icon !== undefined && <Icon icon={icon} className="ml-2 h-4 w-4" />}
                </div>
                {isActive && <Icon icon="heroicons-solid:check" className="ml-2 h-4 w-4" />}
              </span>
              {items !== undefined && (
                <Icon icon="flowbite:caret-right-solid" className="h-[14px] w-[14px]" />
              )}
            </Menu.Button>
            {items !== undefined && (
              <Menu.Items className="absolute left-full top-0 w-56 mt-0 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 ml-1 dark:border-gray-600">
                {items?.map((item, index) => (
                  <MenuItem
                    key={index}
                    {...item}
                    onSelect={selectedPath => {
                      onSelect([...path, ...selectedPath]);
                      close();
                      closeDropdown();
                    }}
                    path={[...path, label]}
                    closeDropdown={closeDropdown}
                    isNested={true}
                    activeValueForSortBy={activeValueForSortBy}
                    activeValueForColorBy={activeValueForColorBy}
                  />
                ))}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

interface MultiLevelDropdownProps {
  onSelect: (path: string[]) => void;
  profileType?: ProfileType;
}

const MultiLevelDropdown: React.FC<MultiLevelDropdownProps> = ({onSelect, profileType}) => {
  const [storeSortBy, setStoreSortBy] = useURLState('sort_by', {
    defaultValue: FIELD_FUNCTION_NAME,
  });
  const [colorStackLegend, setStoreColorStackLegend] = useURLState('color_stack_legend');
  const [binaryFrameFilter, setBinaryFrameFilter] = useURLState('binary_frame_filter');
  const [colorBy, setColorBy] = useURLState('color_by');
  const {compareMode} = useProfileViewContext();
  const [colorProfileName] = useUserPreference<string>(
    USER_PREFERENCES.FLAMEGRAPH_COLOR_PROFILE.key
  );
  const [invertStack = '', setInvertStack] = useURLState('invert_call_stack');
  const isInvert = invertStack === 'true';
  const isColorStackLegendEnabled = colorStackLegend === 'true';

  // By default, we want delta profiles (CPU) to be relatively compared.
  // For non-delta profiles, like goroutines or memory, we want the profiles to be compared absolutely.
  const compareAbsoluteDefault = profileType?.delta === false ? 'true' : 'false';

  const [compareAbsolute = compareAbsoluteDefault, setCompareAbsolute] =
    useURLState('compare_absolute');
  const isCompareAbsolute = compareAbsolute === 'true';

  const setColorStackLegend = useCallback(
    (value: string): void => {
      setStoreColorStackLegend(value);
    },
    [setStoreColorStackLegend]
  );

  const resetLegend = (): void => {
    setBinaryFrameFilter([]);
  };

  const menuItems: MenuItemType[] = [
    {
      label: 'Sort by',
      id: 'h-sort-by-filter',
      items: [
        {
          label: 'Function',
          onclick: () => setStoreSortBy(FIELD_FUNCTION_NAME),
          value: FIELD_FUNCTION_NAME,
        },
        {
          label: 'Cumulative',
          onclick: () => setStoreSortBy(FIELD_CUMULATIVE),
          value: FIELD_CUMULATIVE,
        },
        {
          label: 'Diff',
          onclick: () => setStoreSortBy(FIELD_DIFF),
          value: FIELD_DIFF,
          disabled: !compareMode,
        },
      ],
      hide: false,
      icon: 'material-symbols:sort',
    },
    {
      label: 'Color by',
      id: 'h-solor-by-filter',
      items: [
        {
          label: 'Binary',
          onclick: () => setColorBy('binary'),
          value: 'binary',
        },
        {
          label: 'Filename',
          onclick: () => setColorBy('filename'),
          value: 'filename',
        },
      ],
      hide: false,
      icon: 'carbon:color-palette',
    },
    {
      label: isColorStackLegendEnabled ? 'Hide legend' : 'Show legend',
      onclick: () => setColorStackLegend(isColorStackLegendEnabled ? 'false' : 'true'),
      hide: compareMode || colorProfileName === 'default',
      id: 'h-show-legend-button',
      icon: isColorStackLegendEnabled ? 'ph:eye-closed' : 'ph:eye',
    },
    {
      label: isInvert ? 'Original Call Stack' : 'Invert Call Stack',
      onclick: () => setInvertStack(isInvert ? '' : 'true'),
      hide: false,
      icon: isInvert ? 'ph:sort-ascending' : 'ph:sort-descending',
    },
    {
      label: isCompareAbsolute ? 'Compare Relative' : 'Compare Absolute',
      onclick: () => setCompareAbsolute(isCompareAbsolute ? 'false' : 'true'),
      hide: !compareMode,
      icon: isCompareAbsolute ? 'fluent-mdl2:compare' : 'fluent-mdl2:compare-uneven',
    },
    {
      label: 'Reset Legend',
      hide: binaryFrameFilter === undefined || binaryFrameFilter.length === 0,
      onclick: () => resetLegend(),
      id: 'h-reset-legend-button',
      icon: 'system-uicons:reset',
    },
  ];

  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({open, close}) => (
          <>
            <Menu.Button className="inline-flex dark:bg-gray-900 dark:border-gray-600 justify-center w-full px-4 py-2 text-sm font-medium text-white bg-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border border-gray-200">
              <Icon
                icon="pepicons-pencil:dots-x"
                className="h-5 w-5 text-gray-800 dark:text-gray-200"
              />
            </Menu.Button>
            {open && (
              <Menu.Items className="absolute z-30 left-0 w-56 mt-2 py-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border dark:bg-gray-900 dark:border-gray-600">
                <span className="text-xs text-gray-400 capitalize px-4 py-3">actions</span>
                {menuItems
                  .filter(item => item.hide !== undefined && !item.hide)
                  .map((item, index) => (
                    <MenuItem
                      key={index}
                      {...item}
                      onSelect={onSelect}
                      closeDropdown={close}
                      activeValueForSortBy={storeSortBy as string}
                      activeValueForColorBy={
                        colorBy === undefined || colorBy === '' ? 'binary' : (colorBy as string)
                      }
                    />
                  ))}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

export default MultiLevelDropdown;
