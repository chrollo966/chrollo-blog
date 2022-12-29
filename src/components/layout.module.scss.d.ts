export type Styles = {
  'container': string;
  'heading': string;
  'navLinkItem': string;
  'navLinks': string;
  'navLinkText': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
