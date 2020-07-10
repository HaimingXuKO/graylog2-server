// eslint-disable-next-line no-restricted-imports
import { Table as BootstrapTable } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const variantRowStyles = css(({ theme }) => {
  const { table } = theme.colors;
  let styles = '';

  const variants = {
    active: {
      background: table.variant.active,
      hover: table.variantHover.active,
    },
    success: {
      background: table.variant.success,
      hover: table.variantHover.success,
    },
    info: {
      background: table.variant.info,
      hover: table.variantHover.info,
    },
    warning: {
      background: table.variant.warning,
      hover: table.variantHover.warning,
    },
    danger: {
      background: table.variant.danger,
      hover: table.variantHover.danger,
    },
  };

  Object.keys(variants).forEach((variant) => {
    const { background, hover } = variants[variant];

    styles += `
      &.table > thead > tr,
      &.table > tfoot > tr,
      &.table > tbody > tr {
        > td.${variant},
        > th.${variant},
        &.${variant} > td,
        &.${variant} > th {
          background-color: ${background};
        }
      }

      &.table-hover > tbody > tr {
        > td.${variant}:hover,
        > th.${variant}:hover,
        &.${variant}:hover > td,
        &:hover > .${variant},
        &.${variant}:hover > th {
          background-color: ${hover};
        }
      }
    `;
  });

  return css`
    ${styles}
  `;
});

const tableCss = css(({ theme }) => css`
  &.table {
    > thead > tr,
    > tbody > tr,
    > tfoot > tr {
      > th,
      > td {
        border-top-color: ${theme.colors.table.backgroundAlt};
      }
    }

    > thead > tr > th {
      border-bottom-color: ${theme.colors.table.backgroundAlt};
    }

    > tbody > tr {
      background-color: ${theme.colors.table.background};
      transition: background-color 150ms ease-in-out;
    }

    > tbody + tbody {
      border-top-color: ${theme.colors.table.backgroundAlt};
    }

    .table {
      background-color: ${theme.colors.table.background};
    }
  }

  &.table-bordered {
    border-color: ${theme.colors.table.backgroundAlt};

    > thead > tr,
    > tfoot > tr,
    > tbody > tr {
      > td,
      > th {
        border-color: ${theme.colors.table.backgroundAlt};
      }
    }
  }

  &.table-striped > tbody > tr:nth-of-type(odd) {
    background-color: ${theme.colors.table.backgroundAlt};
  }

  &.table-hover > tbody > tr:hover {
    background-color: ${theme.colors.table.backgroundHover};
  }

  ${variantRowStyles};
`);

const Table = styled(BootstrapTable)`
  ${tableCss}
`;

/** @component */
export default Table;

export { tableCss };
