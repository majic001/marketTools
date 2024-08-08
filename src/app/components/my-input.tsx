import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';

export default function MyInput(props: any) {
  return (
    <Flex flexWrap="wrap" flex={1}>
      {props?.label ? (
        <Flex mb="5px">
          <Text fontSize="0.9em" fontWeight={600}>
            {props?.label}
          </Text>
        </Flex>
      ) : (
        ''
      )}
      <InputGroup
        alignItems="center"
        h="45px"
        bg="#222"
        borderRadius="12px"
        px={1}
      >
        {props?.addonBefore ? (
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            h="45px"
            w="25px"
            alignItems="center"
            justifyContent="center"
          >
            {props?.addonBefore}
          </InputLeftElement>
        ) : (
          ''
        )}
        <Input
          variant="unstyled"
          pl={props?.addonBefore ? '20px' : '10px'}
          pr={!props?.addonBefore ? '10px' : '0'}
          h="45px"
          placeholder={props?.placeholder}
        />
      </InputGroup>
    </Flex>
  );
}
