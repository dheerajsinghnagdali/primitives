import * as React from 'react';

type Direction = 'ltr' | 'rtl';
const DirectionContext = React.createContext<Direction | undefined>(undefined);

/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/

interface DirectionProviderProps {
  dir?: Direction;
}
const DirectionProvider: React.FC<DirectionProviderProps> = (props) => {
  const { dir, children } = props;
  return <DirectionContext.Provider value={dir}>{children}</DirectionContext.Provider>;
};

/* -----------------------------------------------------------------------------------------------*/

function useDirection(directionProp?: Direction) {
  const direction = React.useContext(DirectionContext);
  return directionProp || direction;
}

const Provider = DirectionProvider;

export {
  useDirection,
  //
  Provider,
  //
  DirectionProvider,
};