import React from 'react';
import { Link } from 'react-router';

// const Link = ({
//   active,
//   children,
//   onClick
// }) => {
//   if (active) {
//     return <span>{children}</span>
//   }
//   return (
//     <a href="#"
//        onClick={e => {
//          e.preventDefault();
//          onClick()
//        }}>{children}</a>
//   );
// };
//
// const mapStateToLinkProps = (
//   state,
//   ownProps
// ) => {
//   return {
//     active:
//     ownProps.filter === state.visibilityFilter
//   }
// };
// const mapDispatchToLinkProps = (
//   dispatch,
//   ownProps
// ) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     }
//   }
// };
// const FilterLink = connect(
//   mapStateToLinkProps,
//   mapDispatchToLinkProps
// )(Link);

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >{children}</Link>
);

const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='all'
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter='active'
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter='completed'
      >
        Completed
      </FilterLink>
    </p>
  );
};

export default Footer;
