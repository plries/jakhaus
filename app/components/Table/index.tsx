"use client";
import { Checkbox, Dropdown, IconButton } from "@/app/components";
import { TablePropTypes } from "./types";
import { TABLE_CONST } from "./const";
import {
  ArrowsDownUpIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

export const Table = ({
  columns,
  children,
  tableName,
  tableCount,
}: TablePropTypes) => {
  return (
    <>
      <div className="table-scroll col-span-full mx-5 overflow-hidden overflow-x-scroll rounded-xl border border-neutral-200 bg-neutral-50 shadow-md">
        <table className="w-full">
          <thead>
            <tr className="h-15 border-b border-neutral-200">
              <th className="flex h-16 w-16 min-w-16 items-center justify-center border-r border-neutral-200">
                <Checkbox />
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`border-r border-neutral-200 px-4 py-2 text-left font-medium last:border-r-0 ${column.width}`}
                >
                  <span className="flex flex-row items-center gap-2">
                    {column.title}
                    <Dropdown
                      options={[
                        {
                          label: TABLE_CONST.DROPDOWNS.SORT.ASC,
                          onClick: () => {},
                        },
                        {
                          label: TABLE_CONST.DROPDOWNS.SORT.DESC,
                          onClick: () => {},
                        },
                      ]}
                      button={{
                        name: TABLE_CONST.BUTTONS.SORT,
                        icon: <ArrowsDownUpIcon />,
                        additionalClasses:
                          "bg-transparent hover:!bg-neutral-950/5 !rounded-xl !border-0 !shadow-none",
                      }}
                    />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      <div className="col-span-full mx-5 flex flex-row items-center justify-between">
        <p className="!text-sm text-neutral-400">
          {TABLE_CONST.SHOWING} {tableCount < 10 ? tableCount : 10}{" "}
          {TABLE_CONST.OF} {tableCount} {tableName}
        </p>
        <div className="flex flex-row gap-2">
          <IconButton
            additionalClasses="!rounded-xl"
            onClick={() => {}}
            name={TABLE_CONST.BUTTONS.PREVIOUS}
          >
            <CaretLeftIcon />
          </IconButton>
          <IconButton
            additionalClasses="!rounded-xl"
            onClick={() => {}}
            name={TABLE_CONST.BUTTONS.NEXT}
          >
            <CaretRightIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
