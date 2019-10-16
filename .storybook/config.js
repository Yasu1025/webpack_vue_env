import Vue from 'vue';
import { configure } from '@storybook/vue';

// Import Custom Components here
import Sample from '../src/components/Sample2';
import SampleButton from '../src/components/SampleButton';

Vue.component('vue-sample', Sample);
Vue.component('vue-sample-button', SampleButton);


function loadStories() {
    require('../src/stories');
}

configure(loadStories, module)