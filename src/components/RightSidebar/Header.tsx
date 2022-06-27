import { Box, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { useState } from 'react';
import Portal from 'components/common/Portal';
import MetaTagsModal from 'components/MetaTagsModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerateTags = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h2" fontSize="1rem" m="0">
          Preview
        </Heading>
        <Button
          bg={useColorModeValue('white', 'fill.300')}
          color={useColorModeValue('fill.300', 'white')}
          border="1.5px solid"
          borderColor={useColorModeValue('border.100', 'fill.300')}
          fontWeight="normal"
          display="flex"
          gridGap="0.5rem"
          transition="0.2s ease"
          _hover={{
            background: 'fill.300',
            color: 'white',
            borderColor: 'fill.300',
            filter: useColorModeValue('', 'brightness(1.2)'),
          }}
          onClick={handleGenerateTags}
        >
          <RiCodeSSlashFill />
          Generate MetaTags
        </Button>
      </Box>
      <Portal id="metatags">
        <MetaTagsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </Portal>
    </>
  );
}
