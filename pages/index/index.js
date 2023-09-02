/*
 * @Author: SoChichung
 * @Date: 2023-09-02 03:32:43
 * @LastEditors: SoChichung
 * @LastEditTime: 2023-09-02 10:31:24
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    motto: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    canIUseGetUserProfile: false,
    canIUseOpenData:
      wx.canIUse("open-data.type.userAvatarUrl") &&
      wx.canIUse("open-data.type.userNickName"), // 如需尝试获取用户信息可改为false
    searchpannel: true,
    types: [{ name: "h2h" }, { name: "classic" }],
    league_type: null,
    lid: "",
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
  // 我的函数

  bindKeyInput(e) {
    this.setData({
      lid: e.detail.value,
    });
    console.log(this.data.lid);
    console.log();
  },
  radioChange(e) {
    this.setData({
      league_type: e.detail.value,
    });
    console.log("league_type为", this.data.league_type);
  },
  search() {
    if (this.data.lid == "") {
      wx.showToast({
        title: "联赛id不能为空！",
        duration: 2000,
      });
      return;
    }
    console.log("league_type为", this.data.league_type);
    switch (this.data.league_type) {
      case null: {
        wx.showToast({
          title: "请选择联赛类型！",
          duration: 2000,
        });
        break;
      }
      case "h2h": {
        wx.showToast({
          title: "h2h",
          duration: 2000,
        });
        break;
      }
      case "classic": {
        wx.showToast({
          title: "classic",
          duration: 2000,
        });
        break;
      }
      default:
        break;
    }
  },
});
