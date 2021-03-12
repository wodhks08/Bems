<template>
<v-container>
  <v-btn @click="test">test</v-btn>
</v-container>
</template>

<script>
import axios from "axios"


export default {
  data() {
    return {
      todoList: []
    }
  },
  methods:{
    test(){
      axios.get('https://regress.in/api/users?page=2')
        .then((res) => {//가르켜줘야해서?
          // handle success
          console.log(res);
        })
        .catch((err)=> {
          // handle error
          console.log(err);
        })
        .then( ()=> {
          // always executed
        });
    }
  }
}
</script>