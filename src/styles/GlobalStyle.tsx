import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Theme } from '../models/theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
  }

  ul {
    list-style: none;
  }

  .wrapper {
    padding-top: 50px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 80%;
    margin: 0 auto;
  }

  .not-found {
    width: 100%;
    min-height: 100vh;
    background: url(http://www.reactiongifs.us/wp-content/uploads/2015/04/nothing_to_see_here_naked_gun.gif)
      no-repeat center center fixed;
    background-size: cover;
    background-color: #000;

    h1 {
      color: #fff;
    }

    .link {
      color: #fff;
      font-weight: 700;
    }
  }
`;
