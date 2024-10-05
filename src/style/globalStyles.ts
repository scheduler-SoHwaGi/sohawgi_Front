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
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0 16px;
        display: flex;
        justify-content: center; /* 가로 방향 정렬
    
        overflow-x: hidden; /* 수평 스크롤을 숨김 */
    }

    #root {
        max-width: 375px; /* 모바일 뷰의 최대 너비를 고정 */
        width: 100%;
        margin: 0 auto; /* 가운데 정렬 */
    }
`;

export default GlobalStyle;
