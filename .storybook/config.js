import { configure } from '@storybook/vue';

console.log(111);

const req = require.context('./../src/components', true, /\.stories\.ts$/);
console.log(req.keys());
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
