import {Layout, LayoutProps} from '@/components/Layout';
import React, {ReactNode} from 'react';
interface RowProps extends Omit<LayoutProps, 'row'> {
    children?: ReactNode;
}

const Row: React.FC<RowProps> = ({ children, ...props }: RowProps) => {
    return (
        <Layout {...props} row>
            {children}
        </Layout>
    )
}

export default Row;