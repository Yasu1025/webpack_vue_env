<template>
    <div>
        <p>{{ testMsg }}</p>
        <hr>
        <br>
        <vue-sample-button>Sample Buttom Component</vue-sample-button>
        <br>
        <br>
        <button @click="handleDispatchSample" style="border: 1px solid black">DISPATCH ACTION</button>
        <p>{{ message2 }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SampleButton from './SampleButton';

export default {
    name: "sample-compoent",
    components: {
        'vue-sample-button': SampleButton
    },
    data() {
        return {
            message: "",
            message2: ""
        }
    },
    computed: {
        ...mapGetters(['testMsg', 'mutateSampleMsg'])
    },
    methods: {
        handleDispatchSample() {
            this.$store.dispatch("setSample", "Hi, Your Actions and Mutation are working perfectlly");
            this.message2 = this.mutateSampleMsg
        }
    },
    created() {
        this.message = this.testMsg;
        this.message2 = this.mutateSampleMsg
    },
}
</script>