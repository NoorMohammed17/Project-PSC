import { AspectRatio, Box, Button, Text ,Image} from "@chakra-ui/react";

import React from "react";



const ProductDetails = () => {

    const { singleProduct } = useSelector(store => store.productsReducer);
    console.log(singleProduct)
  return (
    <Box
      w="calc(11/12)%"
      maxW="5xl"
      mx="auto"
      mt={8}
      display={{
        base: "block",
        lg: "grid",
      }}
      gridTemplateColumns="1fr 1fr"
      gridGap="16"
    >
      <Box display="flex" flexDir="column" justifyContent="space-between">
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="full"
            gap={4}
          >
            <Box>
              <Text
                as="h2"
                fontSize={{ base: "xl", bg: "2xl" }}
                fontWeight="bold"
                textColor="gray.800"
              >
                {singleProduct.title}
              </Text>
              <Text
                as="h3"
                fontSize="md"
                lineHeight="1.25"
                textColor="gray.500"
              >
                {/* {product.productType} */}
                {singleProduct.category}
              </Text>
            </Box>
            <Box
              bgColor="#E8E7E5"
              borderRadius="full"
              px="6"
              py="2"
              fontSize="lg"
              textColor="gray.900"
              fontWeight="bold"
            >
              {singleProduct.price}
            </Box>
          </Box>

          <Box
            as="section"
            aria-labelledby="information-heading"
            mt="12"
            pt="6"
            borderTop="1"
            borderColor="gray.200"
          >
            <h2 id="information-heading">Product information</h2>

            

            <Box mt="4">
              <Text fontSize="md" textColor="gray.600">
                {singleProduct.description}
              </Text>
            </Box>
          </Box>
        </Box>
        <Button w="full" colorScheme="blackAlpha">
          Add to Cart
        </Button>
      </Box>

      {/* Product image */}
      <AspectRatio
        ratio={1}
        bgColor="white"
        borderRadius="xl"
        overflow="hidden"
        borderWidth="2px"
        borderColor="gray.200"
        position="relative"
        transition="all"
        transitionDuration="500s"
      >
        <>
          {product.featuredImage && (
            <Image
              src={singleProduct.image}
              alt={singleProduct.title}
              width="400"
              height="400"
            />
          )}
        </>
      </AspectRatio>
    </Box>
  );
};

export default ProductDetails;