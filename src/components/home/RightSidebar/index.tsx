import { createRef, RefObject } from 'react'
import { Box, Fade } from '@chakra-ui/react'
import { gray } from 'utils/chakraColors'
import { useSidebarCtx } from 'hooks/useSidebarCtx'
import SidebarTitlesCtxProvider from 'context/SidebarTitlesCtx'
import { useDarkMode } from 'hooks/useDarkMode'
import MetaTags from './MetaTagsSection/MetaTags'
import HeaderSidebar from './MetaTagsSection/HeaderSidebar'
import ResourcesSection from './ResourcesSection'
import FadeIn from 'components/common/Transitions/FadeIn'

export default function RightSidebar() {
  const { hideSidebar } = useSidebarCtx()
  const { isDarkMode } = useDarkMode()

  const copyBtnRef: RefObject<HTMLElement> = createRef<HTMLElement>()

  const handleCopyText = () => {
    const nodeValue: string = copyBtnRef.current.innerText
    navigator.clipboard.writeText(nodeValue)
  }

  const commonRadiusAndPadding: string = '1.5rem'

  return (
    <SidebarTitlesCtxProvider>
      <Box as="section" gridColumn="span 2" display="flex" gridGap="1rem" flexDirection="column">
        <Box
          bg={gray.$700}
          w="100%"
          h="max-content"
          borderRadius={commonRadiusAndPadding}
          p={commonRadiusAndPadding}
          boxShadow={isDarkMode ? 'md' : 'xl'}
          position="relative"
        >
          <FadeIn>
            <Fade in={!hideSidebar}>
              <HeaderSidebar copyFunc={handleCopyText} />
              <MetaTags ref={copyBtnRef} />
            </Fade>
          </FadeIn>
        </Box>
        <ResourcesSection />
      </Box>
    </SidebarTitlesCtxProvider>
  )
}