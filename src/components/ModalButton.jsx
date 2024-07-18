import {Modal, ModalContent, ModalHeader, ModalBody, Button,useDisclosure} from "@nextui-org/react";

function ModalButton() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
    <Button onPress={onOpen} color="danger">Click me to show hidden element</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Hello!!!!</ModalHeader>
          <ModalBody>
            <p> I am a hidden Element </p>
          </ModalBody>
      </ModalContent>
    </Modal>
  </div>
  )
}

export default ModalButton