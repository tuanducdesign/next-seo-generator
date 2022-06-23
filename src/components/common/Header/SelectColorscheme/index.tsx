import { useRef } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useColorschemeCtx } from 'context/HighlightColorschemeCtx'
import { AiOutlineBgColors } from 'react-icons/ai'
import Select from 'react-select'
import themes from './themes'
import { useDarkMode } from 'hooks/useDarkMode'
import HoverPopup from 'lib/HoverPopup'

export default function SelectColorscheme() {
  const { setColorscheme } = useColorschemeCtx()
  const { isDarkMode } = useDarkMode()
  const selectRef = useRef(null)

  const bg = !isDarkMode ? '#F7FAFC' : '#1A202C'
  const txtColor = isDarkMode ? '#ffffff' : '#000000'
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      color: '#000',
    }),
    control: (provided: any) => ({
      ...provided,
      background: bg,
      color: txtColor,
      width: '150px',
    }),
    container: (provided: any) => ({
      ...provided,
      background: bg,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: txtColor,
    }),
  }

  return (
    <Flex alignItems="center" gridGap="1rem">
      <label
        htmlFor="select-theme"
        onClick={() => {
          selectRef.current.focus()
        }}
      >
        <HoverPopup text="Select Syntax Theme" width="100px" top="20px">
          <Text color={isDarkMode ? 'cyan.400' : 'fill.300'} cursor="pointer">
            <AiOutlineBgColors size="1.5rem" />
          </Text>
        </HoverPopup>
      </label>
      <Select
        ref={selectRef}
        name="select-theme"
        styles={customStyles}
        id="select-theme"
        options={themes}
        onChange={(e) => setColorscheme(e)}
      />
    </Flex>
  )
}
