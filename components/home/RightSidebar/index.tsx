import { Box } from '@chakra-ui/react'
import { gray } from 'lib/chakraColors'
import type { IAllInputTypes } from '../homeTypes'
import HidesidebarBtn from './HidesidebarBtn'
import MetaTags from './MetaTags'

export default function RightSidebar({
  optionalInputValues,
  requiredInputValues,
  setOptionalInputValues,
  setRequiredInputValues,
}: IAllInputTypes) {
  console.log(optionalInputValues, setOptionalInputValues, setRequiredInputValues)

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
      <MetaTags
        requiredInputValues={requiredInputValues}
        optionalInputValues={optionalInputValues}
      />
    </Box>
  )
}
