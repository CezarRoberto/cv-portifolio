import { Flex, Link, Icon } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { BiFlag } from "react-icons/bi";

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
      <Link>
        <Icon as={ BiFlag } mr={1} />
        Languages
      </Link>
      <Link color="primary" href="https://www.shorturl.at/xAHQ2" isExternal>
        Resumé
      </Link>
    </Flex>
  );
}