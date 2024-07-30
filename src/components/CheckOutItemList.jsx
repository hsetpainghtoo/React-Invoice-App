import React, { useContext } from "react";
// import { IconName } from "react-icons/hi2";
// import { HiMiniTrash } from "react-icons/hi2";
import { Button, Table } from "flowbite-react";
import List from "./List";
// import { GeneralContext } from "../context/DrawerProvider";
import { ItemContext } from "../context/ItemProvider";

const CheckOutItemList = () => {

  const { items } = useContext(ItemContext);

  const total = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className="text-end">Price</Table.HeadCell>
          <Table.HeadCell className="text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List             
              key={item.id}
              item={item}
            />
          ))}

          {items.length === 0 && (
            <Table.Row>
              <Table.Cell
                colSpan={5}
                className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"
              >
                There is no record...
              </Table.Cell>
            </Table.Row>
          )}

          <Table.Row>
            <Table.Cell className="text-end" colSpan={3}>
              Total
            </Table.Cell>
            <Table.Cell className="text-end">$ {total.toFixed(2)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckOutItemList;
