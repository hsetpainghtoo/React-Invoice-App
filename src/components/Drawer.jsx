import React, { useContext, useRef } from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import { Button, FloatingLabel, Table } from "flowbite-react";
import { DrawerContext } from "../context/DrawerProvider";
import { ProductContext } from "../context/ProductProvider";
import Swal from "sweetalert2";


const Drawer = () => {
  const { products, addProduct } = useContext(ProductContext);

  const { openDrawer, handleDrawer } = useContext(DrawerContext);

  const formRef = useRef();
  const productRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();

  const DrawerHandle = (event) => {
    event.preventDefault();
    
    if (priceRef.current.value , productRef.current.value , stockRef.current.value !== "") {
      const id = products.length + 1;
      const product = productRef.current.value;
      // console.log(product);
      const price = priceRef.current.value;
      const stock = stockRef.current.value;

      const newProduct = {
        id,
        title: product,
        price,
        stock,
      };

      addProduct(newProduct);
      formRef.current.reset();
    }else{
      Swal.fire({
        title: "Please Fill The Input Areas First!",
        icon: "error"
      });
    }
    // console.log(newProduct);
    // console.log(newProduct.product);
    // console.log(addProduct(newProduct));
    // console.log(addProduct(newProduct.product));
    // console.log("I am work!");
  };

  return (
    <div
      className={`flex flex-col overflow-scroll z-10 duration-300 fixed bg-white shadow-lg p-3 top-0 right-0 w-[350px] h-screen ${
        openDrawer && "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <MainHeading>Your Products</MainHeading>
          <SubHeading>Manage Product</SubHeading>
        </div>

        <Button
          onClick={handleDrawer}
          size="xs"
          outline
          pill
          gradientDuoTone="purpleToBlue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>

      <div>
        {/* {products.map(({ id, title, price, stock }) => (
          <div
            key={id}
            className="flex justify-between items-center p-3 mb-3 border border-gray-300 rounded-md"
          >
            <p>
              {title} <span className="font-mono text-lg">({stock})</span>
            </p>
            <p className="font-mono text-lg">{price}$</p>
          </div>
        ))}; */}

        <div className="overflow-y-auto  max-h-[300px]">
          <Table striped>
            <Table.Head className="sticky top-0">
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell className="text-end">Price</Table.HeadCell>
              <Table.HeadCell className="text-end">Stock</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              {products.map(({ id, title, price, stock }) => (
                <Table.Row
                  key={id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="text-sm text-gray-900 dark:text-white">
                    {title}
                  </Table.Cell>
                  <Table.Cell className="text-end">$ {price}</Table.Cell>
                  <Table.Cell id="drawerStock" className="text-end">{stock}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      <SubHeading className="mt-auto pt-3">Add a product</SubHeading>
      <form action="" ref={formRef}>
        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="col-span-2">
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                ref={productRef}
                type="text"
                variant="outlined"
                label="Product name"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                ref={priceRef}
                type="number"
                variant="outlined"
                label="Price"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                ref={stockRef}
                type="number"
                variant="outlined"
                label="Stock"
              />
            </div>
          </div>

          <div className="col-span-2 ">
            <Button
              onClick={DrawerHandle}
              type="submit"
              gradientDuoTone="purpleToBlue"
              className=" w-full py-1"
              outline
              pill
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Drawer;
