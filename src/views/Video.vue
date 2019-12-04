<template>
  <section class="video-wrap">
    <ul class="form-box">
      <li class="g-cen-y g-border">
        <span>线路</span>
        <p :class="{'on':obj.value}" @click="lbNewIosSelect">{{obj.value || '请选择'}}</p>
      </li>
      <li class="g-cen-y g-border">
        <span>地址：</span>
        <input type="text" placeholder="请输入" v-model="url">
      </li>
    </ul>
    <div class="btn-box">
      <button @click="ajaxFn">开始解析</button>
    </div>
    <section id="container" class="iosselect-box"></section>
  </section>
</template>

<script>
import IosSelect from '$iosSelect';
export default {
  data (){
    return {
      obj:{},
      url:'https://www.iqiyi.com/v_19rsho7kz8.html?src=focustext_1_20130410_1',
      arr : [
        {'id': '1' , 'value': '线路1',api:'http://www.vipjiexi.com/yun.php?url='},
        {'id': '2' , 'value': '线路2',api:'http://vip.jlsprh.com/index.php?url='},
        {'id':'3','value':'线路3',api:'http://jiexi.071811.cc/jx.php?url='},
        {'id':'4','value':'线路4',api:'http://www.82190555.com/index/qqvod.php?url='},
        {'id':'5','value':'线路5',api:'http://jx.api.163ren.com/vod.php?url='}
      ]
    }
  },
  methods:{
    lbNewIosSelect () {
      new IosSelect(1,[this.arr],{
        container: '#container',
        title: '选择线路',
        itemHeight: 50,
        headerHeight:44,
        itemShowCount: 3,
        showAnimate: true,  
        oneLevelId: this.obj.id,
        callback:  (res) =>{
          this.obj = res;
        }
      });
    },
    //解析
    ajaxFn (){
      location.href = `${this.obj.api}${this.url}`
    }
  },
  mounted (){
    this.obj = {...this.arr[0]}
  }
}
</script>
<style lang="scss" scoped>
.video-wrap{
  .form-box{
    li{
      height: 46px;
      padding-left: 15px;
      padding-right: 15px;
      span{
        width: 100px;
      }
      p,input{
        width: 0;
        flex: 1;
        height: 100%;
        text-align: right;
        line-height: 46px;
        font-size: 12px;
      }
      p{
        color: $col-9;
        &.on{
          color: $col-3;
        }
      }
    }
  }
  .btn-box{
    padding-top: 40px;
    text-align: center;
    button{
      height: 46px;
      width: 300px;
      color: $col-f;
      background-color: $col-blue;
      border-radius: 4px;
      font-size: 16px;
    }
  }
}
</style>
