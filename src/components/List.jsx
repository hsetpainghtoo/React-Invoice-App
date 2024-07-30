import { Button, Table } from "flowbite-react";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiMiniMinus } from "react-icons/hi2";
import { HiMiniPlus } from "react-icons/hi2";
import Swal from "sweetalert2";
// import { DrawerContext } from "../context/DrawerProvider";
import { ItemContext } from "../context/ItemProvider";
// import { ProductContext } from "../context/ProductProvider";

const List = ({ item }) => {  
  // console.log(item.product.id);
  const {removeItem, updateItemQuantity} = useContext(ItemContext);

  const handleDelBtn = () => {
    // if (confirm("Are You Sure want to delete?")) {
    //   removeItem(item.id);
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id);
        toast.success("Item Deleted Successfully!",{
          duration:1500,
          position:"bottom-left"
        })
      }
    });
  };

  const handleQuantityAdd = () => {
    // updateItemQuantity(item.id, 1);
    if(item.quantity < item.product.stock){
      updateItemQuantity(item.id,1);           
    }else{
      toast.error("Out Of Stock",{
        position: "top-center"
      });
    }
  };

  const handleQuantitySub = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, -1);
    } else {
      toast.error("Quantity must greater than 1", {
        duration: 1000,
        position: "bottom-left",
      });
    }
  };

    
   return (
    <>
      <Table.Row className="group bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.title}
      </Table.Cell>
      <Table.Cell className="text-end">$ {item.product.price}</Table.Cell>
      <Table.Cell className="text-end">
        <div className="flex gap-2 justify-end items-center">
          <div className="-translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto active:scale-75 duration-300 ">
            {/* <Button size="xs" pill outline gradientDuoTone="purpleToBlue">
              <HiMiniMinus />
            </Button> */}
            <svg
              onClick={handleQuantitySub}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          {item.quantity}

          <div className="translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto active:scale-75 duration-300 ">
            {/* <Button>
              <HiMiniPlus />              
            </Button> */}
            <svg
              onClick={handleQuantityAdd}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell className="text-end">$ {item.cost}</Table.Cell>
      <Table.Cell>
        <svg
          onClick={handleDelBtn}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 active:scale-75 translate-x-10 opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>

        {/* <HiMiniTrash /> */}
      </Table.Cell>
      </Table.Row>
    </>
  );
};

export default List;
