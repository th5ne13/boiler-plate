// express 모듈을 가져온다
const express = require('express')
// 함수를 이용해 새로운 express 앱을 만든다
const app = express()
// 포트는 5000번으로 백서버를 둔다.
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://oliverkim:abcd1234@atlascluster.0fkrirr.mongodb.net/?retryWrites=true&w=majority', {

}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// 루트 디렉토리로 오면 Hello world를 출력하도록한다
app.get('/', (req, res) => {
    res.send('Hello World, Pallycon Team Oliver 입니다~')
})

// 포트 3000번에서 실행을 해라
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})