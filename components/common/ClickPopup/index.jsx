import { useState, useRef, useEffect } from 'react'
import { Box, Text, ScaleFade, useColorModeValue } from '@chakra-ui/react'
import { gray, white } from 'lib/chakraColors'

export default function ClickPopup({
  text = '',
  children,
  bgColor = '',
  textColor = white,
  width,
  height,
}) {
  const [showPopup, setShowPopup] = useState(false)
  const popUpBgHookValue = useColorModeValue(gray.$800, gray.$600)
  const popUpBgColor = bgColor.length < 1 ? popUpBgHookValue : bgColor

  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowPopup(false)
    }
    return
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  })

  return (
    <Box onClick={() => setShowPopup(true)} position="relative">
      {children}
      {showPopup && (
        <Box
          position="absolute"
          bg={popUpBgColor}
          color={textColor}
          p="0.5rem"
          borderRadius="10px"
          mt="0.5rem"
          zIndex="10"
          w={width}
          h={height}
          ref={ref}
          userSelect="none"
        >
          <ScaleFade initialScale={0.85} in={showPopup}>
            <Box>
              <Text fontSize="xs" textAlign="center">
                {text}
              </Text>
            </Box>
          </ScaleFade>
        </Box>
      )}
    </Box>
  )
}
