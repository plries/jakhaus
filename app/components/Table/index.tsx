"use client";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { IconButton } from "@/app/components";
import { TablePropTypes } from "./types";
import { TABLE_CONST } from "./const";

export const Table = ({
  columns,
  children,
  tableName,
  tableCount,
  showingAmountFrom,
  showingAmountTo,
  setShowingAmount,
}: TablePropTypes) => {
  return (
    <>
      <div className="table-scroll col-span-full mx-5 overflow-hidden overflow-x-scroll rounded-xl border border-neutral-200 bg-neutral-50 shadow-md">
        <table className="w-full">
          <thead>
            <tr className="h-15 border-b border-neutral-200">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`border-r border-neutral-200 px-4 py-2 text-left font-medium last:border-r-0 ${column.width}`}
                >
                  <span className="flex flex-row items-center gap-2">
                    {column.title}
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
          {TABLE_CONST.SHOWING} {showingAmountFrom + 1}–
          {Math.min(showingAmountTo, tableCount)} {TABLE_CONST.OF} {tableCount}{" "}
          {tableName}
        </p>
        <div className="flex flex-row gap-2">
          <IconButton
            additionalClasses="!rounded-xl"
            onClick={() => {
              setShowingAmount({
                from: showingAmountFrom - 10,
                to: showingAmountTo - 10,
              });
            }}
            name={TABLE_CONST.BUTTONS.PREVIOUS}
            disabled={showingAmountFrom <= 0}
          >
            <CaretLeftIcon />
          </IconButton>
          <IconButton
            additionalClasses="!rounded-xl"
            onClick={() => {
              setShowingAmount({
                from: showingAmountFrom + 10,
                to: showingAmountTo + 10,
              });
            }}
            name={TABLE_CONST.BUTTONS.NEXT}
            disabled={showingAmountTo >= tableCount}
          >
            <CaretRightIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
