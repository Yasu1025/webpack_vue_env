<template>
    <header>
        <div class="l-header">
            <ul>
                <li>
                    <router-link to="/" exact-active-class="active">HOME</router-link>
                </li>
                <li>
                    <router-link to="/sample" exact-active-class="active">SAMPLE</router-link>
                </li>
                <li>
                    <router-link to="/sample2" exact-active-class="active">SAMPLE2</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>


<style lang="css" scoped>
/* ALL STYLES here is SAMPLE. Just DELETE everything */
    .l-header {
        width: 100%;
        background-color: orangered;
    }

    a {
        color: white;
        display: block;
        padding: 10px;
        text-decoration: none;
    }
    .active,
    a:hover {
        background-color: blue;
    }

    ul {
        display: flex;
    }
    
</style>