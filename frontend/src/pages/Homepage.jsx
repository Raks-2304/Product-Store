import React, { useEffect } from 'react';
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
	console.log("products", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="3xl" // Using Chakra's standard font size
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          📦Current Products📦
        </Text>


        {products && products.length > 0 ? (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,  // Changed from 'mdd' to 'md'
              lg: 3
            }}
            spacing={10}
            w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text fontSize='xl' textAlign="center" fontWeight='bold' color='gray.500'>
            No products found 😢{" "}
            <Link to="/create">
              <Text
                as="span"
                color="blue.500"
                textDecoration="underline"
                cursor="pointer"
                _hover={{ color: "blue.600" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Homepage;