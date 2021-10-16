# CherryChart <a href="https://cherrychart.com/">![](https://img.shields.io/badge/WEBSITE-CherryChart-red??style=social&logo=google-chrome&color=violet)</a>

![last commit](https://img.shields.io/github/last-commit/jihunhong/CherryChart-Client?logo=github)

## 🖋 개요
회사를 다니며 진행할 프로젝트를 뭘할까 생각하다

[이전에 진행했던 프로젝트(revised 브랜치)](https://github.com/jihunhong/VanillaChart)를 다시 만들어봤다.

백엔드쪽과 프론트를 새로 만들어 봤는데 1년간 새롭게 배운것들이나, 이번 프로젝트를 해보며 새로운 것들도 배울 수 있었다.


## 📦 배포환경
CI-CD는 github-action과 s3 환경에서 이루어지도록 했으며

사이트내에서 사용되는 이미지의 캐싱 정책에서 light-house 점수가 낮게 나와서

cloud-front도 적용해 불러 올 수 있도록했다.



## 사용한것들
- next.js
- redux-toolkit
- redux-saga
- styled-component
- antd
