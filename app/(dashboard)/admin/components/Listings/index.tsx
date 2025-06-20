"use client";
import { DotsThreeIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, Checkbox, Input, IconButton } from "@/app/components";
import { Table } from "../Table";
import { LISTINGS_CONST, LISTINGS_TABLE_MOCK } from "./const";

export const Listings = () => {
  return (
    <>
      <h1 className="col-span-full !text-3xl font-medium tracking-tighter text-neutral-950 md:!text-4xl lg:!text-6xl">
        {LISTINGS_CONST.HEADING}
      </h1>
      <div className="col-span-full flex flex-row items-end justify-between">
        <Input type="search" placeholder={LISTINGS_CONST.INPUTS.SEARCH} />
        <Button
          additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
          href="/admin/listings/create"
        >
          <PlusIcon size={20} weight="bold" />
          {LISTINGS_CONST.BUTTONS.CREATE}
        </Button>
      </div>
      <Table
        columns={[
          ...LISTINGS_CONST.TABLE.COLUMNS.TITLES.map((title, index) => ({
            title: [title],
            width: [LISTINGS_CONST.TABLE.COLUMNS.WIDTHS[index]],
          })),
        ]}
        tableName={LISTINGS_CONST.TABLE.NAME}
      >
        {LISTINGS_TABLE_MOCK.COLUMNS.map((listing, index) => (
          <tr
            key={index}
            className="h-15 border-b border-neutral-200 text-neutral-600 last:border-b-0"
          >
            <td className="flex h-16 w-16 min-w-16 items-center justify-center border-r border-neutral-200">
              <Checkbox />
            </td>
            <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
              {listing.LISTING_ADDRESS}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2">
              {listing.CITY}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2">
              <span
                className={`rounded-full border px-3 py-1 ${listing.ACTIVE ? "border-sky-950/10 bg-sky-50 text-sky-700" : "border-red-950/10 bg-red-50 text-red-700"}`}
              >
                {listing.ACTIVE ? "Active" : "Deactivated"}
              </span>
            </td>
            <td className="px-4 py-2">
              <span className="flex flex-row items-center justify-between">
                {listing.DATE_CREATED}
                <IconButton
                  onClick={() => {}}
                  name={LISTINGS_CONST.BUTTONS.EDIT}
                  additionalClasses="!rounded-xl !border-0 !shadow-none"
                >
                  <DotsThreeIcon size={24} weight="bold" />
                </IconButton>
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};
