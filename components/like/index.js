// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  like:{
    type:Boolean
  },
  count:{
    type:Number
  }

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'../like/like/like.png',
    noSrc:'../like/like/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event){
      console.log("234",event)
      let like = this.properties.like
      let count =this.properties.count
      count=like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
      let behavior = this.properties.like?'like':'cancel'
      //激活事件
      this.triggerEvent('like',{
        behavior:behavior
      },{
        
      })
      // this.setData({
      //   like:!this.data.like,
      // })
      // if(this.data.like==true){
      //   this.setData({
      //     count:this.data.count+1
      //   })
      // }else{
      //   this.setData({
      //     count:this.data.count-1
      //   })
      // }
    },
  }
})
