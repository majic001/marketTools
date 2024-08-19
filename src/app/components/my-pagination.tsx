import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

export default function MyPagination() {
  return (
    <Flex w="full" gap={4} justifyContent="center">
      <Button leftIcon={<ArrowBackIcon />} bg="#FFB119">
        上一页
      </Button>
      <Button rightIcon={<ArrowForwardIcon />} bg="#FFB119">
        下一页
      </Button>
    </Flex>
  );
}
