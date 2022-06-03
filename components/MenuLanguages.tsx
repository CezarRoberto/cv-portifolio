import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function MenuLanguages() {
    return (
        <Menu>
            <MenuButton
                _hover={{ bg: 'gray.400' }}
                _focus={{ boxShadow: 'outline' }}
                display={["nome", "inline"]}
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                transition='all 0.2s'
            />
            <MenuList bgColor="bg">
                <MenuItem color="primary" icon={<AddIcon />}>
                    English
                </MenuItem>
                <MenuItem color="primary" icon={<AddIcon />}>
                    Portuguese
                </MenuItem>
            </MenuList>
        </Menu>
    )
}