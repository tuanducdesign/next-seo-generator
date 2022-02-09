import { VStack } from '@chakra-ui/react'
import { gray } from 'utils/chakraColors'
import DropDownItem from './DropDownItem'
import { ImGithub } from 'react-icons/im'
import { TiSocialTwitter } from 'react-icons/ti'
import { BsLinkedin } from 'react-icons/bs'
import { useDarkMode } from 'hooks/useDarkMode'

export default function DropDownMenu() {
  const { isDarkMode } = useDarkMode()

  const commonBorderRadius: string = '10px'

  return (
    <VStack
      bg={isDarkMode ? gray.$700 : gray.$200}
      borderRadius={commonBorderRadius}
      marginTop="0.5rem"
      p="0"
      position="absolute"
      spacing="0"
      zIndex="10"
    >
      <DropDownItem text="GitHub" borderRadius={`${commonBorderRadius} ${commonBorderRadius} 0 0`}>
        <ImGithub />
      </DropDownItem>
      <DropDownItem text="LinkedIn" hoverIconColor="#0077b5">
        <BsLinkedin />
      </DropDownItem>
      <DropDownItem
        text="Twitter"
        borderRadius={`0 0 ${commonBorderRadius} ${commonBorderRadius}`}
        hoverIconColor="#00acee"
      >
        <TiSocialTwitter size="1.5rem" />
      </DropDownItem>
    </VStack>
  )
}
