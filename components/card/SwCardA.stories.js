import SwCardA from './SwCardA.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'components/card/SwCardA',
  component: SwCardA,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    emoji: '😄',
    title: 'Title',
    text: 'Hello World',
    width: '24rem',
  },
};
