import { FormLabel, Flex, Button } from '@chakra-ui/react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { teal, gray } from 'lib/chakraColors'
import ClickPopup from 'components/common/ClickPopup'

export default function InputLabel({ children, isFocus, inputId, ...props }) {
  return (
    <Flex align="center" justify="space-between">
      <FormLabel
        _hover={{ color: teal.teal100 }}
        color={isFocus ? teal.teal200 : ''}
        display="inline-block"
        fontWeight="semibold"
        htmlFor={inputId}
        userSelect="none"
        {...props}
      >
        {children}
      </FormLabel>
      <ClickPopup text="Info">
        <Button
          _hover={{ background: gray.gray700 }}
          p="0rem"
          m="0.4rem"
          size="sm"
          title="Click to know what's this attribute"
          bg="transparent"
        >
          <IoMdInformationCircleOutline size="1.5em" />
        </Button>
      </ClickPopup>
    </Flex>
  )
}