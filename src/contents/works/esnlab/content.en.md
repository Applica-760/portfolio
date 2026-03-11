# Overview

I have developed an experimental platform for an Echo State Network (ESN)—a neural network used for time-series analysis—used in my research from technical college through university, and I have published it as a package on PyPI.<br>
To reach its current form, I spent several years repeatedly revisiting the design and rebuilding it from scratch multiple times.<br>

# Design

```
.
├── data/                   # Stores raw data
├── dataset/                # Stores datasets
├── docs/                   # Documentation
├── outputs/                # Output destination for results
├── projects                # Domain-specific implementation
│   ├── tasks
│   │   ├── cli.py
│   │   ├── eval
│   │   ├── pred
│   │   └── train
│   ├── tests
│   ├── tools               # Data preparation and analysis tools
│   └── utils               # Project-wide utilities
├── pyproject.toml
└── src                     # Package core
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

Domain knowledge from my research is implemented in `projects`, while the package core under `src` is designed to handle only pure ESN computation. This makes `esn_lab` a reusable component, with `projects` serving as usage examples.

`esn_lab` returns results using the `pipeline` by passing models and data to the `runner`, which manages execution.

In `projects`, each task such as train, pred, and eval is defined as a pair of app and config. The config specifies experimental conditions and parameters, while the app processes tasks using `esn_lab`. Each config logs the settings per experiment to ensure reproducibility.



<linkcard-container>

<linkcard url="https://github.com/Applica-760/esn-lab"
title="esn_lab GitHub Repository"
description=""
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

<linkcard url="https://pypi.org/project/esn-lab/"
title="esn_lab PyPI Page"
description=""
image="https://i.gzn.jp/img/2023/05/25/pypi-was-subpoenaed/00.jpg"
imageFit="height"></linkcard>

</linkcard-container>
