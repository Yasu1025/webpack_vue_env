<template>
    <div>
        <h1>SAMPLE</h1>
        <vue-sample-comp></vue-sample-comp>
    </div>
</template>

<script>
import Sample from '../components/Sample';
export default {
    name: "sample-page",
    components: {
        "vue-sample-comp": Sample
    }
}
</script>