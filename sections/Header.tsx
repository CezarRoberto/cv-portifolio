import { Flex, Link, Icon } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import MenuLanguages from "../components/MenuLanguages";

export default function Header() {
  return (
    <Flex
      w="full"
      justify="space-between"
      align="center"
      alignItems="center"
      py={3}
      fontSize={["14px", "16px"]}
    >
      <Link href="mailto:cezarrobertorodrigues50@gmail.com">
        <Icon as={HiOutlineMail} mr={3} />
        cezarrobertorodrigues50@gmail.com
      </Link>
        <MenuLanguages />
      <Link color="primary" href="https://drive.google.com/file/d/1T-kxwqnW0TBl6VROCDxhIuN3UoMgDiAg/view?usp=sharing" isExternal>
        Resumé
      </Link>
    </Flex>
  );
}