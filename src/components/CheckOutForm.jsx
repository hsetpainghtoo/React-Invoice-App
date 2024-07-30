import {
  Button,
  FloatingLabel,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { DrawerContext } from "../context/DrawerProvider";
import { ProductContext } from "../context/ProductProvider";
import { ItemContext } from "../context/ItemProvider";

const CheckOutForm = () => {
  const { products } = useContext(ProductContext);
  const { items, addItem, updateItemQuantity } = useContext(ItemContext);
  // console.log(items)

  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    const id = Date.now();

    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value) //selectRef.current.value နဲ့ products ထဲက id နဲ့ တိုက်စစ်ပြီးတူတဲ့ product ကို console ထူတ်ပေးလိုက်တာ
    );
    // console.log(currentProduct.id);

    const quantity = parseInt(quantityRef.current.value);

    const cost = (quantity * currentProduct.price).toFixed(2);

    const isExistedItem = items.find(
      (item) => item.product.id === currentProduct.id
    );

    const newUpdateQuantity = items.map((item) => {
      item.product.id === currentProduct.id &&
        updateItemQuantity(item.id, quantity);
    });
    // console.log(newUpdateQuantity);
    // console.log(items);
    
    // const newStock = products.map ((product)=> product.stock - quantity);
    // console.log(newStock);



    if (isExistedItem) {
      // console.log("Your item is already existed");
      newUpdateQuantity;
      formRef.current.reset();
    } else {
      const newItem = {
        id,
        product: currentProduct,
        quantity,
        cost,
      };

      addItem(newItem);

      formRef.current.reset(); //same function with the lower one but shorter
    }
    // selectRef.current.value = 1;
    // quantityRef.current.value = null;

    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleForm} className="mt-5 mb-5">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select a Product" />
            </div>
            <Select ref={selectRef} id="countries" required>
              {products.map(({ id, title }) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </Select>
          </div>

          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Input Quantity" />
            </div>
            <TextInput
              required
              ref={quantityRef}
              id="base"
              type="number"
              sizing="md"
            />
          </div>

          <div className="col-span-1">
            <Button
              type="submit"
              pill
              outline
              gradientDuoTone="purpleToBlue"
              className="active:scale-95 w-full mt-6 flex justify-center items-center"
            >
              <span className="text-lg">Buy</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
