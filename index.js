// 서버를 껐다 킬 필요없이 refresh를 해주기위해 nodemon 설치
// express 모듈을 가져온다
const express = require('express')
// 함수를 이용해 새로운 express 앱을 만든다
const app = express()
// 포트는 5000번으로 서버를 둔다
const port = 5000
// request json body를 변환해주는 객체 가져오기
const bodyParser = require('body-parser');
// User를 가져온다.
const { User } = require("./model/User");
const config = require("./config/key");

// application/x-www-form-urlencoded 로 보낸 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// application/json으로 보낸 데이터를 분석해서 가져옴 
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {

}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// 루트 디렉토리로 오면 Hello world를 출력하도록한다
app.get('/', (req, res) => {
    res.send('Hello World, Pallycon Team Oliver 입니다~ 정규직전환으로 더열심히하겠습니다!!')
})

app.post("/register", (req, res) => {

    // 회원가입때 필요한 정보들을 클라이언트에서 가져오면 db에 넣어 준다 

    const user = new User(req.body)
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

// 포트 3000번에서 실행을 해라
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
