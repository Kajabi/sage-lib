//
// This code is adapted from this helpful article:
// https://betterprogramming.pub/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
//

import React, {
  useState,
  useEffect,
  createContext,
  useContext
} from 'react';
import PropTypes from 'prop-types';

const defaultValue = {};

const SageBreakpointContext = createContext(defaultValue);

export const SageBreakpointProvider = ({
  children,
  queries,
}) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return (
    <SageBreakpointContext.Provider value={queryMatch}>
      {children}
    </SageBreakpointContext.Provider>
  );
};

SageBreakpointProvider.defaultProps = {
  children: null,
};

SageBreakpointProvider.propTypes = {
  children: PropTypes.node,
  queries: PropTypes.shape({}).isRequired,
};

export const useSageBreakpoint = () => {
  const context = useContext(SageBreakpointContext);
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
};
