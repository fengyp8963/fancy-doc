import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import { wrapperEnv } from "./build/utils";
import { createVitePlugins } from "./build/vite/plugin";

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT } = viteEnv;

  const isBuild = command === 'build';

  return {
    plugins: [ createVitePlugins(viteEnv, isBuild) ],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      https: false,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
    },
  };
};
