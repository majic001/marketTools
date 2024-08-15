import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import MyTopBottomValue from '../../components/my-top-bottom-value';
import styles from './selectbi.module.css';
export default function SelectBi(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <MyTopBottomValue mt={props?.mt || 0} onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>选择代币</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input type="tel" placeholder="搜索代币名称或合约地址" />
              </InputGroup>
            </Flex>
            <Flex pt={4}>
              <Text fontSize="1em" color="#999">
                选择币种：
              </Text>
            </Flex>
            <Flex wrap="wrap" direction="column">
              {[1, 2, 3, 4]?.map((res) => {
                return (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                    key={res}
                    w="full"
                    className={styles?.item}
                  >
                    <Flex flex={1} alignItems="center">
                      <Avatar
                        size="md"
                        name="Dan Abrahmov"
                        w="40px"
                        h="40px"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Flex wrap="wrap" direction="column" px={5} flex={1}>
                        <Text fontWeight="500">COOL</Text>
                        <Flex fontSize="0.8em">3213212...321321</Flex>
                      </Flex>
                    </Flex>
                    <Flex wrap="wrap" direction="column" textAlign="right">
                      <Text fontWeight="500">0</Text>
                      <Flex fontSize="0.8em">$0.00</Flex>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
