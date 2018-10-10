<template>
  <div class="consume-evidence">
    <mt-header title="上传消费凭证">
      <mt-button icon="back" slot="left" @click="$router.goBack('')"></mt-button>
    </mt-header>
    <div class="header-wrap">
      <input @change="upload" v-if="currentImageCount >= 4 ? false : true" accept="image/png,image/jpg,image/jpeg,image/gif" capture="camera"
        name="file" class="chose-image" type="file" multiple>
      <div class="chose-ui">
        <img @click="canNotAddImage" class="add-img-button" src="../assets/img/consumeEvidence/add_btn@2x.png">
      </div>
      <p class="upload-tip">图片小于2M，最多可传4张</p>
    </div>
    <div class="images-wrap">
      <div class="img-item" v-for="item in evidenceUrls" :key="item.id">
        <i @click="deleteEvidence(item)"></i>
        <img :src="item.dfsFileName">
        <!-- <img v-else src="../assets/img/consumeEvidence/default_evidence@2x.png"> -->
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Indicator,
    Toast
  } from 'mint-ui';
  export default {
    name: "consumeevidence",
    data() {
      return {
        currentImageCount: 0,
        evidenceImages: [],
        evidenceUrls: [], //查询获取到的图片
        orderCode: "" //LLBB20180727656351
      }
    },
    created() {
      this.orderCode = this.$route.params.orderCode;
      this.searchEvidence();
    },
    methods: {
      canNotAddImage() {
        if (this.currentImageCount >= 4)
          Toast("最多可以上传4张图片，更换图片先删除");
      },
      upload(e) {
        let picLen = this.evidenceImages.length;
        let files = e.target.files || e.dataTransfer.files;
        console.log(`getimage: ${files[0].name}`);
        // 上传之前清空之前的照片
        if (picLen <= 4 && files.length <= 4 - picLen) {
          for (var i = 0; i < files.length; i++) {
            let file = files[i];
            if (!files.length) return;
            this.imgPreview(file);
          }
          // 表单提交上传图片
          let postData = {
            orderCode: this.orderCode,
            orderVouchers: this.evidenceImages
          }
          Indicator.open({
            text: "正在上传...",
            spinnerType: "fading-circle"
          });
          this.$api.uploadConsumeEvidence(postData).then(res => {
            Indicator.close();
            console.log(res);
            if (res.status === "0000") {
              this.searchEvidence();
              // 上传成功清空图片
              this.evidenceImages = [];
            } else {
              Toast(res.msg);
            }
          }, err => {
            Indicator.close();
          })
        }
      },
      searchEvidence() {
        // 查询用户凭证
        let params = {
          orderCode: this.orderCode,
        }
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        this.$api.searchConsumEvidence(params).then(res => {
          Indicator.close();
          console.log(`查询结果：${res}`);
          if (res.status === "0000") {
            this.evidenceUrls = res.data;
            this.currentImageCount = this.evidenceUrls.length;
          } else {
            Toast(res.data.msg);
          }
        }, err => {
          Indicator.close();
        })
      },
      deleteEvidence(item) {
        // 删除用户消费凭证
        let requestData = {
          id: item.id
        }
        Indicator.open({
          spinnerType: "fading-circle"
        });
        this.$api.deleteConsumEvidence(requestData).then(res => {
          Indicator.close();
          if (res.status === "0000") {
            this.searchEvidence();
          } else {
            Toast(res.msg);
          }
        }, err => {
          Indicator.close();
        })
      },
      imgPreview(file) {
        let self = this;
        let Orientation;
        let currentUploadFile = {
          File: file,
          img: ""
        };
        // 是否支持FileReader
        if (!file || !window.FileReader) return;
        // 创建reader
        let reader = new FileReader();
        // 转换base64
        reader.readAsDataURL(file);
        // 转换完成回调
        reader.onloadend = function () {
          let result = this.result;
          let img = new Image();
          img.src = result;
          // 判断图片是否大于2M
          if (this.result.length <= 2 * 1024 * 1024) {
            //  小于直接上传
            currentUploadFile.img = this.result;
          } else {
            // 大于2M压缩上传
            img.onload = function () {
              let data = self.compress(img, Orientation);
              currentUploadFile.img = data;
            }
          }
        }
        self.evidenceImages.push(currentUploadFile);
      },
      rotateImg(img, direction, canvas) {
        //最小与最大旋转方向，图片旋转4次后回到原方向
        const minstep = 0;
        const maxstep = 3;
        if (img === null) return;
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错
        let height = img.height;
        let width = img.width;
        let step = 2;
        if (step === null) {
          step = minstep;
        }
        if (direction == "right") {
          step++;
          //旋转到原位置，即超过最大值
          step > maxstep && (step = minstep);
        } else {
          step--;
          step < minstep && (step = maxstep);
        }
        //旋转角度以弧度值为参数
        let degree = step * 90 * Math.PI / 180;
        let ctx = canvas.getContext("2d");
        switch (step) {
          case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
          case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
          case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
          case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
        }
      },
      compress(img, Orientation) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至200万以下
        let ratio;
        if ((ratio = width * height / 2000000) > 1) {
          console.log("大于200万像素");
          ratio = Math.sqrt(ratio);
          width /= ratio;
          height /= ratio;
        } else {
          ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        let count;
        if ((count = width * height / 1000000) > 1) {
          console.log("超过100W像素");
          count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
          //            计算每块瓦片的宽和高
          let nw = ~~(width / count);
          let nh = ~~(height / count);
          tCanvas.width = nw;
          tCanvas.height = nh;
          for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
              tctx.drawImage(
                img,
                i * nw * ratio,
                j * nh * ratio,
                nw * ratio,
                nh * ratio,
                0,
                0,
                nw,
                nh
              );
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height);
        }
        //修复ios上传图片的时候 被旋转的问题
        if (Orientation != "" && Orientation != 1) {
          switch (Orientation) {
            case 6: //需要顺时针（向左）90度旋转
              this.rotateImg(img, "left", canvas);
              break;
            case 8: //需要逆时针（向右）90度旋转
              this.rotateImg(img, "right", canvas);
              break;
            case 3: //需要180度旋转
              this.rotateImg(img, "right", canvas); //转两次
              this.rotateImg(img, "right", canvas);
              break;
          }
        }
        //进行最小压缩
        let ndata = canvas.toDataURL("image/jpeg", 0.1);
        console.log("压缩前：" + initSize);
        console.log("压缩后：" + ndata.length);
        console.log(
          "压缩率：" + ~~(100 * (initSize - ndata.length) / initSize) + "%"
        );
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
      }
    }
  }

</script>

<style lang="less" scoped>
  @w: 75rem;
  .consume-evidence {
    .header-wrap {
      position: relative;
      margin-top: 48px;
      input {
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        height: 168/@w;
        display: inline-block;
        opacity: 0;
      }
      .chose-ui {
        height: 168/@w;
        line-height: 168/@w;
        background-color: white;
        text-align: center;
        .add-img-button {
          width: 80/@w;
          height: 80/@w;
          vertical-align: middle;
        }
        .upload-tip {
          font-size: 22/@w;
          color: #333;
        }
      }
      .upload-tip {
        text-align: right;
        margin: 10/@w 30/@w 0 0;
        height: 60/@w;
        font-size: 28/@w;
        color: #b0b0b0;
      }
    }

    .images-wrap {
      display: flex;
      flex-direction: row;
      justify-content: left;
      flex-wrap: wrap;
      .img-item {
        width: 45%;
        height: 202/@w;
        margin: 10/@w;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        i {
          width: 37/@w;
          height: 37/@w;
          display: inline-block;
          background-image: url("../assets/img/consumeEvidence/remove_bt@2x.png");
          background-position: center center;
          background-size: 37/@w 37/@w;
          position: absolute;
          right: -13/@w;
          top: -13/@w;
          border-radius: 20/@w;
        }
      }
    }
  }

</style>
