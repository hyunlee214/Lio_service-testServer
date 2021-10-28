'use strict';

const express = require('express');
const router  = express.Router();

// const getUsersCollection = require('')      // DB파일로

function redirectWithMsg({ res, dest, error, info }) {
  res.redirect(`${dest}?${makeQueryString({ info, error })}`);
}

// 192.168.0.56:3000/user/signup
router.get('/signUp', (req, res) => {
  res.render('user/signup');
});

router.post('/signIn', async (req, res) => {
  if (!req.body) {
    redirectWithMsg({
      res,
      dest: '/',
      error: '잘못된 요청입니다',
    })
    return;
  }

  // DB users
  const users = await getUsersCollection();
  const { email, password } = req.body;
  
  if (!email || !password) {
    redirectWithMsg({
      res,
      dest: '/',
      error: '이메일과 비밀번호를 모두 입력해 주세요'
    })
  }
})




module.exports = router;