module.exports = {
  plugins: [
    require('postcss-import')({
      // Resolve imports from node_modules (handles ~ alias)
      resolve(id, basedir) {
        // Strip ~ alias if present (common webpack syntax)
        if (id.startsWith('~')) {
          id = id.slice(1);
        }

        // Try to resolve as an npm package
        if (!id.startsWith('.') && !id.startsWith('/')) {
          try {
            return require.resolve(id);
          } catch (e) {
            // If require.resolve fails, try relative to basedir
            const path = require('path');
            const fs = require('fs');
            const possiblePaths = [
              path.resolve(basedir || __dirname, 'node_modules', id),
              path.resolve(basedir || __dirname, '..', 'node_modules', id),
            ];
            for (const p of possiblePaths) {
              if (fs.existsSync(p)) return p;
            }
          }
        }

        // Fall back to default resolver for relative paths
        // Return id to let webpack resolve it (webpack handles node_modules better)
        return id;
      }
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
