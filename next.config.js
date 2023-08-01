/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },

    images: {
        // 기기의 너비 중단점 목록
        deviceSizes: [
            640, 750, 828, 1080, 1200, 1920, 2048, 3840,
        ],

        // 이미지 너비 목록,
        // deviceSizes 배열과 연결되어 이미지 srcset 생성하는데 사용
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

module.exports = nextConfig;
