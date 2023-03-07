import {defineConfig, type PluginOption, UserConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import babel from '@rollup/plugin-babel';
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig(({mode}) => {
    const isDev = mode === 'development';
    return {
        plugins: [
            babel({
                include: ['./src/**'],
                extensions: ['.js', '.ts', '.tsx'],
                babelHelpers: 'bundled',
                parserOpts: {
                    sourceType: "module"
                }
            }),
            react(isDev ? {
                babel: {
                    plugins: ['effector-logger/babel-plugin'],
                },
            } : {}),
            visualizer() as unknown as PluginOption,
            svgr(),
        ],
        build: {
            manifest: true,
            target: 'esnext',
            outDir: 'build',
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        let info = assetInfo.name.split('.');
                        let extType = info[info.length - 1];
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                            extType = 'img';
                        } else if (/woff|woff2/.test(extType)) {
                            extType = 'css';
                        }
                        return `static/${extType}/[name]-[hash][extname]`;
                    },
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                },
            },
        },
        resolve: {
            alias: [
                {find: '@', replacement: '/src'}
            ]
        },
        css: {
            modules: {
                generateScopedName: '[local]_[hash:base64:4]',
            },
        },
    } as UserConfig;
});
