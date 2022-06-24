import { Flex, HStack, Box, useColorModeValue } from '@chakra-ui/react';
import MenuIcon from './MenuIcon';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import SelectColorscheme from './SelectColorscheme';

const ResponsiveHeaderIcon = ({ children }: { children: any }) => {
  return <Box display={{ md: 'block', base: 'none' }}>{children}</Box>;
};

export default function Header() {
  return (
    <Box as="section" borderBottom="1px solid" borderColor={useColorModeValue('border.100', 'gray.700')}>
      <HStack as="header" align="center" mb="1rem" justifyContent="space-between" p="1rem">
        <Logo />
        <Flex justifyContent="space-between" alignItems="center" gridGap="1.5rem">
          <ResponsiveHeaderIcon>
            <SelectColorscheme />
          </ResponsiveHeaderIcon>
          <ResponsiveHeaderIcon>
            <DarkModeToggle />
          </ResponsiveHeaderIcon>
          <MenuIcon />
        </Flex>
      </HStack>
    </Box>
  );
}
