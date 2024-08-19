import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MyImportButton from '../../components/my-import-button';
import { SetPrivateKeysContext } from '../../chainContext';
export default function ImportWallet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const textRef = React.useRef<HTMLTextAreaElement>(null);
  const setPrivateKeysContext = useContext(SetPrivateKeysContext)
  const handleSubmit = useCallback(() => {
    if (textRef.current) {
      setPrivateKeysContext(textRef.current.value.replace(/\s+/g, ''))
    }
  }, [textRef])
  return (
    <>
      <MyImportButton onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('import.wallet.title')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{t('import.wallet.des')}</FormLabel>
              <Textarea ref={textRef} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={() => { handleSubmit(); onClose() }}>{t('submit.btn')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
