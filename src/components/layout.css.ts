import { style } from '@vanilla-extract/css';

export const container = style({
    margin: 'auto',
    maxWidth: '500px',
    fontFamily: 'sans-serif'
});
  
export const heading = style({
    color: 'rebeccapurple'
});

export const navLinks = style({
    display: "flex",
    listStyle: "none",
    paddingLeft: 0
});

export const navLinkItem = style({
    paddingRight: '2rem'
});

export const navLinkText = style({
    color: 'black'
});

export const siteTitle = style({
    fontSize: '3rem',
    color: 'gray',
    fontWeight: 700,
    margin: '3rem 0',
})