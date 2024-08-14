let sentences = [
  "你连世界都没观过，哪来的世界观？",
  "学习使人快乐，不学习使人，更快乐。",
  "好想把房子卖了，去环游世界，可惜房东不同意！",
  "厉害的不是你有多少后台，而是你能成为多少人的后台！",
  "你怎么长得跟个二维码似的，不扫一下，都不知道你是什么东西！",
  "不笑运气差，一笑脸就大！",
  "少年加油吧！只要你努力工作，你的老板一定会成功的。",
  "要相信自己，别人能做到的，你也做不到。",
  "你从来不孤独，因为，孤独都不想跟你交朋友。",
  "不要担心，一切都是最烂的安排。"
]

function getRandomIndex() {
  // 0 1 2 3 4 5 6 7 8 9
  // Math.random() 静态方法返回一个大于等于 0 且小于 1 的伪随机浮点数
  // 0 <= x < 1
  // 0 <= x < 10
  // 0.5 4.5 9.9
  // 0   4   9
  return Math.floor(Math.random() * sentences.length)
}


// 组件 对象 根组件选项
Vue.createApp({
  data() {
    return {
      sentence: sentences[getRandomIndex()]
    }
  },
  methods: {
    showAnotherSentence() {
      // 数据的访问和更新
      this.sentence = sentences[getRandomIndex()]
    }
  }
}).mount("#app")