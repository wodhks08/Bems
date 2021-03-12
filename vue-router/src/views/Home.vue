<template>
<v-container>
  <v-btn @click="test">test</v-btn>
  <v-btn @click="test2">test2</v-btn>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      todoList: []
    }
  },
  methods:{
    test(){
      axios.get('/:id')
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
    },
    test2(){
      axios.post('https://reqres.in/api/register', {//body에 담겨지는 값임
        "email": "eve.holt@reqres.in",
        "password": "pistol1111"
      })
      .then((res) =>{//애로우를 써야 this 인자를 사용할 수 있다.
        console.log(res);
      })
      .catch((err)=> {
        console.log(err);
      });
    }
  }
}
</script>