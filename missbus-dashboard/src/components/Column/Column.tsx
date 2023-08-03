import {Layout, LayoutProps} from '@/components/Layout';
import React, {ReactNode} from 'react';
interface ColumnProps extends Omit<LayoutProps, 'row'> {
    children?: ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children, ...props }: ColumnProps) => {
    return (
        <Layout {...props}>
            {children}
        </Layout>
    )
}

export default Column;