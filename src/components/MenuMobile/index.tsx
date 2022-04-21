import { Dispatch, SetStateAction } from 'react'
import { Box, Slide, Flex, Heading } from '@chakra-ui/react'
import { MdOutlineClose } from 'react-icons/md'
import { gray, blue } from 'utils/chakraColors'
import HoverPopup from 'lib/HoverPopup'
import CommonBtn from 'lib/CommonBtn'
import { useDarkMode } from 'hooks/useDarkMode'

interface MenuMobileProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function MenuMobile({ isOpen, setIsOpen }: MenuMobileProps) {
  const { isDarkMode } = useDarkMode()

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <Box position="absolute" right={0} top={0} zIndex="15">
      <Slide direction="right" in={isOpen}>
        <Box
          as="aside"
          bg={gray.$800}
          borderRadius={{ base: '0', md: '10px 0 0 10px' }}
          minH="100vh"
          zIndex="20"
          p="1rem"
          position="fixed"
          right="0"
          shadow="-3px 1px 9px rgba(0,0,0,0.3)"
          top="0"
          w={{ base: '100%', md: '20rem' }}
        >
          <Flex align="center" justify="space-between">
            <Heading as="h2" fontSize="md" color={gray.$100}>
              Menu
            </Heading>
            <HoverPopup text="Close" bgColor={isDarkMode ? gray.$200 : gray.$700}>
              <CommonBtn hoverProps={{ color: blue.$600 }} onClick={handleCloseMenu}>
                <MdOutlineClose size="1.8rem" />
              </CommonBtn>
            </HoverPopup>
          </Flex>
        </Box>
      </Slide>
    </Box>
  )
}