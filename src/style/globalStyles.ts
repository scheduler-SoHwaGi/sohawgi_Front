import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-ExtraLight.ttf') format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/assets/fonts/Pretendard-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }


    body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden; /* 수평 스크롤을 숨김 */
        background-color: #f8f8f8;
    }

    #root {
        width: 100%;
    }
`;

export default GlobalStyle;
