/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // Tailwind가 HTML 파일을 스캔하도록 설정
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"], // 기본 폰트로 Pretendard 설정
      },
    },
  },
  plugins: [],
};
