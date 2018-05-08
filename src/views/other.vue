<template>
	<div>
		<p v-lang="bg">{{msg}}</p>
		<p>{{ msg | reverseStr}}</p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'this another page',
				bg:"yellow"
			}
		},
		directives:{
       lang:{
       	 inserted:function(el,binding){
       	 	el.style.color = binding.value;
       	 }
       }
	  },
	  filters:{
       reverseStr:function(val){
       	return val.split('').reverse().join('')
       }
	  }
	}
</script>