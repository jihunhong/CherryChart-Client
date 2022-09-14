export const regex = {
  email: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  // 영문, 숫자 혼합하여 6~20자리 이내
  password: /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
  nickname: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
};

export const validator = (e, form) => {
  if (e.target.name === 'email') {
    return regex.email.test(e.target.value);
  }
  if (e.target.name === 'password') {
    return regex.password.test(e.target.value);
  }
  if (e.target.name === '_password') {
    return form.password.value === e.target.value;
  }
  if (e.target.name === 'nickname') {
    return regex.nickname.test(e.target.value);
  }
};
