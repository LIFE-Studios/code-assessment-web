const breakpoint = {  
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px'
};
export const breakpoints = {
  mobile: `(min-width: ${breakpoint.mobile})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
};