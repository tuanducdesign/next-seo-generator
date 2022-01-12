import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import type { IAllInputTypes } from '../homeTypes'
import HidesidebarBtn from './HidesidebarBtn'
import TitleTag from './MetaTags/TitleTag'
import DescriptionTag from './MetaTags/DescriptionTag'
import KeywordsTag from './MetaTags/KeywordsTag'

export default function RightSidebar({
  optionalInputValues,
  requiredInputValues,
  setOptionalInputValues,
  setRequiredInputValues,
}: IAllInputTypes) {
  console.log(
    optionalInputValues,
    requiredInputValues,
    setOptionalInputValues,
    setRequiredInputValues
  )

  return (
    <Box
      as="section"
      bg={gray.$700}
      w="100%"
      h="100%"
      gridColumn="span 2"
      borderRadius="15px"
      p="1.5rem"
      boxShadow="md"
    >
      <HidesidebarBtn />
      <TitleTag tagValue={requiredInputValues.titleInput} />
      <DescriptionTag tagValue={requiredInputValues.descriptionTextarea} />
      <KeywordsTag tagValue={requiredInputValues.keywordsInput} />
    </Box>
  )
}
