import { storiesOf } from '@storybook/vue';

storiesOf('Sample', module).add('Button Test', () => ({
    data() {
      return {
        item: { id: 10, text: 'This is a test' }
      };
    },
    template: `
      <div>
        <h2>SAMPLE BUTTON</h2>
        <vue-sample-button :item="item">TEST</vue-sample-button>
        <br><br>
        <vue-sample-button :item="item">LOOOOOOOOOOOOOOOOOOOONG TEXT</vue-sample-button>
      </div>
    `
  }));


  storiesOf('Sample', module).add('てすと', () => ({
    data() {
      return {
        item: { id: 10, text: 'This is a test' }
      };
    },
    template: `
      <div>
        <vue-sample :item="item">TEST</vue-sample>
      </div>
    `
  }));

  storiesOf('Sample2', module).add('てすと２', () => ({
    template: `
      <div>
        <h2>てすと２</h2>
      </div>
    `
  }));