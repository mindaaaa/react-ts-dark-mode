import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const themeState = atom({
  key: 'themeState',
  default: 'light',
});

const DarkMode = () => {
  // 전역 상태
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='center'>
      <p className='cute'>
        나의 작고 귀여운 {theme === 'light' ? '라이트' : '다크'} 모드
      </p>
      <div className='emotion'>
        현재 기분은 {theme === 'light' ? '🌝' : '🌚'} 이다
      </div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        테마 변경
      </button>
    </div>
  );
};

export default DarkMode;
