export const downLoadFileByUrl = (url: string) => {
    let eleLink = document.createElement('a')
    eleLink.download = '默认文件名'
    eleLink.style.display = 'none'
    eleLink.href = url
    // 受浏览器安全策略的因素，动态创建的元素必须添加到浏览器后才能实施点击
    document.body.appendChild(eleLink)
    // 触发点击
    eleLink.click()
    // 然后移除
    document.body.removeChild(eleLink)
}
