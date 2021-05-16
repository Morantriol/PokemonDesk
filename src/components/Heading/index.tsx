// // import React from 'react';

// // import s from '../../index.css';

// // interface IHeadingProps {
// //     tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
// // }

// // const Heading: React.FC<IHeadingProps> = ({ children, tag:Tag }) => <Tag className={s[Tag]}>{children}</Tag>;

// // export default Heading;

// import React, { useCallback } from 'react';

// // interface IHeadingProps {
// //   tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
// // }
// interface IHeadingProps {
//   headerRender: () => void;
// }

// const Heading: React.FC<IHeadingProps> = ({ children, headerRender }) => {
//   const headerRender = useCallback(() => {
//     switch (h) {
//       case 2:
//         return <h2>{children}</h2>;
//       case 3:
//         return <h3>{children}</h3>;
//       case 4:
//         return <h4>{children}</h4>;
//       case 5:
//         return <h5>{children}</h5>;
//       case 6:
//         return <h6>{children}</h6>;
//       default:
//         return <h1>{children}</h1>;
//     }
//   });
// };

// export default Heading;
