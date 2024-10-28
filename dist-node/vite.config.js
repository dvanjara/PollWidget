import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.tsx'),
            name: 'PollWidget',
            fileName: function (format) { return "poll-widget.".concat(format, ".js"); },
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
