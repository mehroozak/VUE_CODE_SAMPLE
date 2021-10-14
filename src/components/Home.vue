<template>
    <div class="justify-center w-full max-w-xs">
        <form class="bg-white   rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstValue">
                    firstValue
                </label>
                <input :value="firstVal" @input="($event) => setFirstVal(parseInt($event.target.value))" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstValue" type="number" placeholder="firstValue">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="secondValue">
                    secondValue
                </label>
                <input :value="secondVal" @input="($event) => setSecondVal(parseInt($event.target.value))"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="secondValue" type="number" placeholder="secondValue">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="sum">
                    sum
                </label>
                <input :value="sum" disabled class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sum" type="number" placeholder="sum">
            </div>
            <div class="flex items-center justify-between">
                <button @click="setSum()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sum
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapGetters(['firstVal', 'sum', 'secondVal'])
        },
        methods: {
            ...mapMutations(['setFirstVal', 'setSecondVal', 'setSum'])
        }
    }
</script>