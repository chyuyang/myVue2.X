<template>
	<div>
		<p>this is home page</p>
		<p>{{getmockData}}</p>
		<button @click="getMock()">Getmock数据</button>
		<p>{{postmockData}}</p>
		<button @click="postMock()">Postmock数据</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				getmockData:'',
				postmockData:''
			}
		},
		methods:{
			getMock(){
				this.$axios.get('/getMock')
				.then(res=>{
					this.getmockData = res.data
				})
			},
			postMock(){
				this.$axios.post('/postMock')
				.then(res=>{
					this.postmockData = res.data
				})
			}
		}
	}
</script>