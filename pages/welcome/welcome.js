var app = getApp();

Page({
  onTap: function (event) {
    // wx.navigateTo({
    //     url:"../posts/post"
    // });


    //swichTab定义到的下一页是有tab的
    wx.switchTab({
      url: "../posts/post"
    });

  }
})