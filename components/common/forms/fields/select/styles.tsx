import { theme } from "@styles/stitches";

const customStyles = {
  ///where value stored
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
  //wrapper around input
  container: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  //input controller, essentially the select input box
  control: (provided, state) => ({
    ...provided,
    borderRadius: 2,
    background: `${theme.colors.white}`,
    borderColor: state.isFocused
      ? `${theme.colors.navy}`
      : state.isDisabled
      ? `${theme.colors.darkBlue200}`
      : `${theme.colors.navy400}`,
    "&:hover": {
      borderColor: state.isFocused
        ? `${theme.colors.navy}`
        : `${theme.colors.navy400}`,
    },

    padding: "10px 16px",
    boxShadow: "none",
  }),

  //container around chevron
  dropdownIndicator: (provided, state) => ({
    ...provided,
  }),
  //wraps separator and indicator
  indicatorsContainer: (provided, state) => ({
    ...provided,
  }),
  //Separator line between indicator and value container
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  //typable input area
  singleValue: (provided, state) => ({
    ...provided,
    margin: 0,
    color: `${theme.colors.navy}`,
    fontSize: `${theme.fontSizes.bodySmall}`,
    fontFamily: `${theme.fonts.poppins}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights.large}`,
    letterSpacing: `${theme.letterSpacings.regular}`,
  }),
  //typable input area
  input: (provided, state) => ({
    ...provided,
    padding: 0,
    margin: 0,
    color: `${theme.colors.navy}`,
    fontSize: `${theme.fontSizes.bodySmall}`,
    fontFamily: `${theme.fonts.poppins}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights.large}`,
    letterSpacing: `${theme.letterSpacings.regular}`,
  }),
  //styling around loading Indicator
  loadingIndicator: (provided, state) => ({
    ...provided,
  }),
  //styling around loading message
  loadingMessage: (provided, state) => ({
    ...provided,
  }),
  //menu wrapper styles e.g. everything around dropdown items
  menu: (provided, state) => ({
    ...provided,
    borderRadius: 2,
    padding: "8px",
    border: `1px solid ${theme.colors.darkBlue200}`,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  }),
  //Houses the list of items inside dropdown
  menuList: (provided, state) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
  }),
  //options in drop down styling
  option: (provided, state) => ({
    ...provided,
    transition: "background ease-in-out 200ms",
    borderRadius: 2,
    padding: 8,
    color: `${theme.colors.navy}`,
    fontSize: `${theme.fontSizes.bodySmall}`,
    fontFamily: `${theme.fonts.poppins}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights.large}`,
    letterSpacing: `${theme.letterSpacings.regular}`,
    background:
      (state.isSelected && `${theme.colors.crestBlue200}`) ||
      (state.isFocused && `${theme.colors.crestBlue100}`),
  }),
  //Placeholder styling
  placeholder: (provided, state) => ({
    ...provided,
    color: `${theme.colors.navy300}`,
    fontSize: `${theme.fontSizes.bodySmall}`,
    fontFamily: `${theme.fonts.poppins}`,
    fontWeight: `${theme.fontWeights.regular}`,
    lineHeight: `${theme.lineHeights.large}`,
    letterSpacing: `${theme.letterSpacings.regular}`,
  }),
};

export default customStyles;
