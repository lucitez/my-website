import { configure } from '@storybook/react';

const req = require.context('../components', true, /.story\.jsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

const __svg__ = {
  path: '../src/**/*.svg',
  name: 'src/Icon/icons/icons-[hash].svg'
}

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)
