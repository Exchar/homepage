import axios from "axios";

/**
 * @name 文件压缩
 * @description
 *  1、将文件转img对象
 *  2、获取文件宽高比例
 *  3、自定义等比例缩放宽高属性，这里我用的是固定800宽度，高度是等比例缩放
 *  4、canvas重新绘制图片
 *  5、canvas转二进制对象转文件对象，返回
 * @returns { File } 文件
 */
export const imgCompress = async (primaryFile,width = 800) => {
    // 将文件转img对象
    const file = (await axios.get(primaryFile,{
        responseType:'blob'
    })).data;
    const img = await fileToImg(file);
    console.log(img)
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        // 获取文件宽高比例
        const { width: originWidth, height: originHeight } = img
        // 自定义等比例缩放宽高属性，这里我用的是固定800宽度，高度是等比例缩放
        const scale = +(originWidth / originHeight).toFixed(2) // 比例取小数点后两位)
        const targetWidth = width // 固定宽
        const targetHeight = Math.round(800 / scale) // 等比例缩放高

        canvas.width = targetWidth
        canvas.height = targetHeight
        context.clearRect(0, 0, targetWidth, targetHeight)
        // canvas重新绘制图片
        context.drawImage(img, 0, 0, targetWidth, targetHeight)
        // canvas转二进制对象转文件对象，返回
        const type = 'image/png';
        const resUrl = canvas.toDataURL(type,2);
        console.log(resUrl)
        resolve(resUrl);
        // canvas.toBlob(function (blob) {
        //     const f = new File([blob], file.name, {
        //         type,
        //         lastModified: file.lastModified
        //     })
        //     console.log(f,fileToImg(f))
        //     resolve(f)
        // }, type)
    })
}

// file转换成img对象
function fileToImg (file) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        const reader = new FileReader()
        reader.onload = function (e) {
            img.src = e.target.result
        }
        reader.onerror = function (e) {
            reject(e)
        }
        console.log(file,typeof file)
        reader.readAsDataURL(file)
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function (e) {
            reject(e)
        }
    })
}