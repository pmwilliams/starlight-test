(function (global) {
  System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: 'es2020',
        jsx: 'react'
    },
    paths: {
      'npm:': 'https://cdn.jsdelivr.net/npm/'
  },
    map: {
        react: 'npm:react@18.2.0',
        'react-dom': 'npm:react-dom@18.2.0',
        'react-dom/client': 'npm:react-dom@18.2.0',
        ts: 'npm:plugin-typescript@8.0.0/lib/plugin.js',
        typescript: 'npm:typescript@5.4.5/lib/typescript.min.js'
    },
    packages: {
      react: {
          main: './umd/react.production.min.js',
      },
      'react-dom': {
          main: './umd/react-dom.production.min.js',
      }
    },
    meta: {
        typescript: {
            exports: "ts"
        },
        '*.css': { loader: 'css' }
    }
  });
})(this);