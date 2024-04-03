const express = require('express');
const app = express();
// listenメソッドを用意してapp.jsファイル実行
app.listen(3000);

app.use(express.static('public'));

app.get( '/top', (req, res) => {
    res.render('hello.ejs')
});