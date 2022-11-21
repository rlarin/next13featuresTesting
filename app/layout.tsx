import React, {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({children, ...props}) => {
  return <>{children}</>;
};

export default Layout;
