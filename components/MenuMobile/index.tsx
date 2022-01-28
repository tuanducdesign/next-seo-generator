import { Box, Slide, Flex, Heading } from '@chakra-ui/react'
import { MdOutlineClose } from 'react-icons/md'
import { useMobileMenuCtx } from 'hooks/useMobileMenuCtx'
import { gray, blue } from 'utils/chakraColors'
import HoverPopup from 'lib/HoverPopup'
import CommonBtn from 'lib/CommonBtn'
import { useDarkMode } from 'hooks/useDarkMode'

export default function MenuMobile() {
  const { isOpen, setIsOpen } = useMobileMenuCtx()

  const { isDarkMode } = useDarkMode()

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <Slide direction="right" in={isOpen}>
      <Box
        as="aside"
        bg={gray.$800}
        borderRadius={{ base: '0', md: '10px 0 0 10px' }}
        minH="100vh"
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
  )
}
