<template>
  <iframe src="https://player.vimeo.com/video/80742403?h=e75ed7a6eb" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</template>



<style>
.container{
  background-color: black;
}
</style>
<script>
import { useNt2Store } from "../store";
export default {
setup() {
  //vamos a dejar disponible el state
  const store = useNt2Store();
  return { store };
},


data(){return {user:this.store.user.name,username:"",password:""}}
,
methods: {
  async login(){
  let a=await this.store.devolverUser(this.username,this.password)
  this.user=a.name
  console.log(a.name)
}
  }

};
</script>
