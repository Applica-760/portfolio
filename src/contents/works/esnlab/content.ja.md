# 概要

高専-大学の研究において利用している Echo State Network (ESN)という時系列解析を行うニューラルネットワークの実験基盤を開発し、PyPIにパッケージを公開しています。<br>
今の形に至るまで、数年をかけながら何度も設計を見直し、0から作り直してきました。<br>

# 設計

```
.
├── data/                   # 生データを格納
├── dataset/                # データセットを格納
├── docs/                   # ドキュメント
├── outputs/                # 結果の出力先
├── projects                # 固有ドメイン
│   ├── tasks
│   │   ├── cli.py
│   │   ├── eval
│   │   ├── pred
│   │   └── train
│   ├── tests
│   ├── tools               # データ準備・分析ツール
│   └── utils               # プロジェクト共通ユーティリティ
├── pyproject.toml
└── src                     # パッケージ本体
    └── esn_lab
        ├── __init__.py
        ├── model
        ├── optim
        ├── pipeline
        │   ├── pred
        │   └── train
        ├── runner
        │   ├── pred
        │   └── train
        ├── tests
        └── utils
```

`projects` に私の研究のドメイン知識が関与する実装を行い、`src` 以下のパッケージ本体は純粋なESN計算機能のみを担うように設計しました。
これにより`esn_lab` が再利用可能な部品となり、`projects` がユースケース例になります。

`esn_lab` は実行管理を行う`runner` にモデルとデータを渡すことで、`pipeline` を使って結果を返します。

`projects` ではtrain, pred, evalなどの各タスクごとにappとconfigをセットで定義しており、configで実験条件やパラメタを指定し、appが`esn_lab`を用いて処理を行います。configは実験ごとにログを取り、実験の再現性を保ちます。



<linkcard-container>

<linkcard url="https://github.com/Applica-760/esn-lab" 
title="esn_lab GitHubリポジトリ" 
description="" 
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

<linkcard url="https://pypi.org/project/esn-lab/" 
title="esn_lab PyPIページ" 
description="" 
image="https://i.gzn.jp/img/2023/05/25/pypi-was-subpoenaed/00.jpg" 
imageFit="height"></linkcard>

</linkcard-container>