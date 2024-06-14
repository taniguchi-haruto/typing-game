# name typingGame

## 目次

1.  [はじめに](#introduction)
2.  [ファイル構成](#ファイル構成)
3.  [開発環境](#開発環境)
4.  [使用言語](#使用言語)
5.  [テーブル一覧](#テーブル一覧)
6.  [開発者](#開発者)





<a id="introduction"></a>
## はじめに
国名(英語)のタイピングゲームです

<a id="ファイル構成"></a>
## ファイル構成

```
├── front
│   ├── img
│   ├── src
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Country.jsx
│   │   ├── heder.css
│   │   ├── Heder.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── Start.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── src
│   ├── main
│   │   ├── kotlin
│   │   │   └── com
│   │   │       └── example
│   │   │           └── tagengo
│   │   │               ├── country.kt
│   │   │               ├── CountryController.kt
│   │   │               ├── countryRepository.kt
│   │   │               ├── countryRequest.kt
│   │   │               ├── deleteRequest.kt
│   │   │               ├── listRequest.kt
│   │   │               ├── TagengoApplication.kt
│   │   │               └── userRequest.kt
│   │   └── resources
│   │       ├── db
│   │       │   └── migration
│   │       │       ├── V1__create_CountryName_table.sql
│   │       │       ├── V2__create_score_table.sql
│   │       │       └── V3__create_user_table.sql
│   │       ├── static
│   │       │   ├── assets
│   │       │   │   ├── index-BquBGOsm.css
│   │       │   │   └── index-SxqPjbFy.js
│   │       │   ├── img
│   │       │   ├── index.html
│   │       │   └── vite.svg
│   │       └── application.properties
│   └── test
│       ├── kotlin
│       │   └── com
│       │       └── example
│       │           └── tagengo
│       │               └── TagengoApplicationTests.kt
│       └── resources
│           ├── insert_country_data.sql
│           ├── insert_test_score.sql
│           └── insert_user_data.sql
├── .gitignore
├── .gitignore.swp
├── build.gradle.kts
├── gradlew
├── gradlew.bat
└── settings.gradle.kts
```

<a id="開発環境"></a>

## 開発環境

```
フロントエンド：VSCode
バックエンド：IntelliJ IDEA CE
```

<a id="使用言語">

##　使用言語

|環境|使用言語|バージョン|
|----|----|----|
|フロントエンド|React|18.2.0
|データベース|PostgresSQL|14.20
|バックエンド|Kotlin|17.0.11+1-b1207.24 aarch64


<a id="テーブル一覧"></a>

## テーブル一覧

###　country
|id|name|score|
|----|----|----|
|PK|国名|スコア|


### score
|id|name|score|
|----|----|----|
|PK|ユーザー名|スコア|

### users
|id|name|
|----|----|
|PK|ユーザー名|


<a id="開発者"></a>

## 開発者
GUCHHI

