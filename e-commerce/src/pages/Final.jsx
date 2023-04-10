

import React, {useRef} from "react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";

export default function Final() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
  
    const handleHome = () => {
      onClose();
    };
    return (
        <>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Order Placed</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Your order has been placed successfully. Do you want to continue
                        shopping or go to home page?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Link to={"/"}>
                            <Button ref={cancelRef} onClick={onClose}>
                                Continue Shopping
                            </Button>
                        </Link>
                        <Link to={"/"}>
                            <Button colorScheme="blue" ml={3} onClick={handleHome}>
                                Home
                            </Button>
                        </Link>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}