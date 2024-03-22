import { Flex } from '@chakra-ui/react';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <Flex w={'full'} direction={'column'}> 
            {children}
        </Flex>
    );
}

export default AuthLayout;
