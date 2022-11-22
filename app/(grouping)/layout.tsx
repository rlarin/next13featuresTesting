import {ReactNode} from 'react';

const GroupingLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <small>
        🎯 This is a layout for a group. The parenthesis make that the folder
        name is ignored
      </small>
      {children}
    </>
  );
};

export default GroupingLayout;
