import { Checkbox, IconButton } from "@/app/components";
import { TablePropTypes } from "./types";
import { TABLE_CONST } from "./const";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export const Table = ({ columns, children, tableName }: TablePropTypes) => {
  return (
    <>
      <div className="table-scroll col-span-full overflow-x-scroll rounded-xl border border-neutral-200 bg-neutral-50 shadow-md">
        <table>
          <thead>
            <tr className="h-15 border-b border-neutral-200">
              <th className="flex h-16 w-16 min-w-16 items-center justify-center border-r border-neutral-200">
                <Checkbox />
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`border-r border-neutral-200 px-4 py-2 text-left font-medium ${column.width}`}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      <div className="col-span-full flex flex-row items-center justify-between">
        <p className="!text-sm text-neutral-400">
          {TABLE_CONST.SHOWING} {columns.length} {tableName}
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
