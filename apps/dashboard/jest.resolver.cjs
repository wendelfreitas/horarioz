module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: (pkg) => {
      const pkgNamesToTarget = new Set([]);

      if (pkgNamesToTarget.has(pkg.name)) {
        delete pkg['exports'];
        delete pkg['module'];
      }

      return pkg;
    },
  });
};
