<template>
  <div class="container">
  <a href="#/hello">Hello</a>
    <div class="row" v-for="l in list">
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3>This a a title for my demo, the train ticket home is very ... {{l}}}</h3>
            </div>
          </div>
          <div class="row">
            <p>被曝光的只是冰山一角，大多数受害者并没有得到很好的维权，你或许是下一个被坑的，而我可能又会是被坑第二次。这是一个很严肃的话题，希望被坑过的程序猿可以一起来建设该平台，还抱着侥幸心理的程序猿可以继续打酱油看热闹。不管该平台有没有成功，但至少我们反抗过。
              目前大家可以帮忙一起列出该平台会遇到的问题，然后一起提出解决方案，如果，一起顺利的话，希望有大牛带领大家完成该平台。晚些时候会对列出的问题，作出一些小结。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.$http.get('/public/demo/list').then((res) => {
        this.list = res.data
      }, (error) => {});
    }
  }
</script>
