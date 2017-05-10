<template>
  <div content="container">
    <header-com></header-com>
    <div content="content">
      <ul class="cont-ul">
        <list-com v-for="item in items" :good="item"></list-com>
      </ul>
    </div>
    <footer-com></footer-com>
  </div>
</template>


<script>
  import HeaderCom from '../components/header.vue';
  import FooterCom from '../components/footer.vue';
  import ListCom from '../components/list.vue';

  export default {
    name: 'Home',
    data() {
      return {
        items: []
      }
    },
    components: {HeaderCom, FooterCom, ListCom},
    created(){
      this.$http.get('/api/goods').then(function (resp) {
        this.items = resp.data.data;
      }, function (err) {
        console.log(err);
      });
    }
  }
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .content {
    margin-bottom: 1.8rem;
  }

  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
    list-style: none;
  }

  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
