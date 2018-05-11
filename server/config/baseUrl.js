const base = {

}

if (process.env.NODE_ENV === 'production') {
  base.reqUrl = "http://api.qiluyidian.mobi:8081"
} else {
  base.reqUrl = "http://222.175.121.249:8081"
}

module.exports = base
