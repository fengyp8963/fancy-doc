import { PluginOption } from 'vite';
import VitePluginCertificate from 'vite-plugin-mkcert';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    VitePluginCertificate({
      source: 'coding',
    }),
  ];

  return vitePlugins;
}
