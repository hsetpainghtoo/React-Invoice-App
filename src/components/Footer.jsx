import React, { useContext } from 'react'
import { DrawerContext } from '../context/DrawerProvider'
import Container from './Container';
import { Button } from 'flowbite-react';

const Footer = () => {
  const {handleDrawer} = useContext(DrawerContext);
  const handlePrintBtn = () => {
    window.print();
  }
  return (
    <footer className='mt-auto mb-3'>
      <Container>
          <div className="flex gap-3 justify-end items-center">
            <Button
              onClick={handleDrawer}
              color="light"
              className="active:scale-95"
            >
              Manage Product
            </Button>
            <Button
              onClick={handlePrintBtn}
              outline
              gradientDuoTone="purpleToBlue"
              className="active:scale-95"
            >
              Print
            </Button>
          </div>
        </Container>
    </footer>
  )
}

export default Footer