module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',
  '**/*.(ts|tsx|js)': (filenames) => {
    ;`pnpm eslint --fix ${filenames.join(
      ' '
    )}``pnpm prettier --write ${filenames.join(' ')}`
  },
}
