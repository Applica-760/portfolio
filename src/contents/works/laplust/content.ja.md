# 概要
私と同じ佐世保高専出身の先輩が起業された[株式会社LAplust↗︎](https://laplust.com)様において、縁あって長期インターンという形で先端AIモデルの調査、実装検証に携わっています。

<br>

# プロジェクト例

### ① 微小物体検出AIの技術検証

**背景**：研究目的で微小な虫の卵の数を正確にカウントしたい <br>
**課題**：YOLOなど従来の物体検出モデルは微小物体の検出が困難 <br>
　　　畳み込み層は隣接ピクセル間の関係から特徴量を計算するため、対象が小さすぎると特徴を十分に計算できない <br>
　　　YOLOの入力サイズは640×640に固定されており、高解像度画像を入力しても自動リサイズにより微小物体の情報が消失する<br>
**手法**：高解像度で撮像した画像をSAHIで重なりを持たせながら複数のパッチに分割し、各パッチに対してYOLOで推論<br>
　　　各パッチの推論結果をNMSで統合することで入力サイズの制約を回避しつつ微小物体の特徴量を保持<br>
　　　スライスサイズ・オーバーラップ率・信頼度閾値などのパラメータを調整し精度を最適化<br>
　　　詳細は下記の技術ブログを参照<br>
**技術**：[SAHI↗︎](https://github.com/obss/sahi) [YOLO↗︎](https://github.com/ultralytics/ultralytics)


<br>

### ② 製造ライン組み込み文字認識

**背景**：工場の製造ラインにおいて、表面に印字された文字に応じてベルトコンベア上で仕分けをしたい<br>
**課題**：コンベアを流れる製品であるため処理速度が要求される / 文字認識で100%の精度が要求されハードルが高い<br>
　　　高い信頼度が得られるケースがある一方、ノイズや類似文字列への誤認識が散見され信頼度のみでの判定では不十分だった<br>
　　　製品が上下逆向きでコンベアに流れることがあり、向きに依存しない認識が必要だった<br>
**手法**：YOLOで文字領域を物体検出してクロップし、その領域のみをOCRに入力することで認識精度を向上<br>
　　　0度・180度の両方向で文字認識を実行し、両結果を統合して判定することで向き不変な認識を実現<br>
　　　EasyOCRの複数の予測候補と確信度スコアを組み合わせ、多角的な情報から判定を決定<br>
　　　donutは比較目的で検証したが今回の用途に対してオーバースペックと判断しEasyOCRを採用<br>
**技術**：[EasyOCR↗︎](https://github.com/JaidedAI/EasyOCR) [donut↗︎](https://github.com/clovaai/donut) [YOLO↗︎](https://github.com/ultralytics/ultralytics)


<br>

### ③ 品質検査用few-shot異常検知

**背景**：自動車部品の製造ラインにおいて、少ない学習画像で微細な傷などの異常検出を実現したい<br>
**課題**：大量の部品を高速に検査する必要がある / 傷が微小で目視では見落としやすい<br>
　　　ピクセルレベルの完全一致で判定すると撮像条件の微差でほぼ全件エラーとなるため、ある程度の曖昧さを許容した判定が必要<br>
　　　高解像度（4K）画像をそのまま処理するとトークン数が41倍に増大し、メモリ・実行時間が現実的でなくなる<br>
　　　マスクアノテーションが存在しないデータでは評価パイプライン自体が停止し、評価方法の整備も課題だった<br>
**手法**：正常品の画像データを特徴量空間にマッピングし、距離に応じて異常を判断<br>
　　　撮像条件の揺らぎには頑健でありながら、微細な欠陥の特徴変化は見落とさない判定を実現<br>
　　　MVTec AD・MVTecAD2・独自データで解像度とショット数（1〜32-shot）を系統的に評価<br>
　　　1-shot で97.0%、2-shot で97.5%の精度（AU-PRO：領域レベルの異常検知精度）を確認<br>
　　　距離情報の上位1%を抽出して平均化する mean_top1p スコアリングをカスタム実装し、微細な異常への感度を向上<br>
**技術**：[AnomalyDINO↗︎](https://github.com/dammsi/AnomalyDINO) [PatchCore↗︎](https://github.com/amazon-science/patchcore-inspection)



<br>

### ④ 物体追跡による正確な欠損の計測

**背景**：建設現場の排水路の欠損をドローン映像で把握したいが、目視確認による計測が人的コストの課題<br>
**課題**：フレームごとの物体検出では同じ欠損を複数回カウントしてしまう<br>
　　　フレームアウト後に再びフレームインした際も同一物体と認識できる能力が必要<br>
　　　bboxベースの評価指標はポイントトラッキング方式に適用できず、評価方法の選定自体も課題だった<br>
**手法**：YOLOv8sで各フレームの欠損を検出し、bboxの中心点をCo-Trackerへ渡してポイントトラッキング<br>
　　　追跡軌道をDBSCANで時空間クラスタリングし、欠陥種別と出現時間帯をJSON形式で出力<br>
　　　DAVIS val setで公式スコア（AJ:64.4%, OA:91.2%）に近い値（AJ:63.9%, OA:90.9%）を再現し実装を検証<br>
　　　（AJ：追跡精度 / OA：遮蔽・フレームアウト耐性）<br>
**技術**：[Co-Tracker↗︎](https://github.com/facebookresearch/co-tracker)（Transformerベース点追跡）<br>
　　　[YOLOv8↗︎](https://github.com/ultralytics/ultralytics)（欠陥検出）/ DBSCAN（時空間クラスタリング）


<br>

### ⑤ 野菜自動収穫のための強化学習

**背景**：農業のオートメーション観点から、野菜を自動収穫するロボットを構築したい<br>
**課題**：個体差が大きい野菜の把持位置選定・障害物環境での位置合わせ・繊細な把持の実現など難易度が高い<br>
**手法**：SACによるモデルフリーRLをベースラインとし、世界モデル（TD-MPC2）・報酬設計・特異点罰則など<br>
　　　多角的な観点からシミュレーション検証を実施<br>
　　　その後、模倣学習（robomimic / LeRobot）へ移行し、実機（SO-ARM100）での動作まで検証<br>
　　　詳細は下記の技術ブログを参照<br>
**技術**：[MuJoCo↗︎](https://github.com/google-deepmind/mujoco) [Gymnasium↗︎](https://github.com/Farama-Foundation/Gymnasium-Robotics) [SB3↗︎](https://github.com/DLR-RM/stable-baselines3)  [TD-MPC2↗︎](https://github.com/nicklashansen/tdmpc2) [robosuite↗︎](https://robosuite.ai) [robomimic↗︎](https://robomimic.github.io) [LeRobot↗︎](https://github.com/huggingface/lerobot) [SO-ARM100↗︎](https://github.com/TheRobotStudio/SO-ARM100) 


<br>

# 技術ブログ一覧

共同で取り組んだプロジェクトのうち、技術ブログ化したものを以下に掲載します。

<linkcard-container>


<linkcard url="https://note.com/laplust/n/nc8e94a667f79" 
title="独自データを用いた模倣学習の実装 -LeRobot / SO101-" 
description="2026年3月10日" 
image="https://assets.st-note.com/production/uploads/images/257977534/rectangle_large_type_2_b04b6f93038f246b278afadaea8c7944.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n98504f902d68" 
title="模倣学習を用いたPick and Placeタスク -robomimic-" 
description="2026年3月8日" 
image="https://assets.st-note.com/production/uploads/images/257427519/rectangle_large_type_2_d564e5754b4dbf3c27f01b9f1c14434a.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n53b590f453af" 
title="Pick and Placeタスクにおける特異点罰則の検討 -robosuite / TD-MPC2-" 
description="2026年2月17日" 
image="https://assets.st-note.com/production/uploads/images/252391813/rectangle_large_type_2_520e14f0d4d2204a30c0c4c78245b1eb.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n43c9c0df7e4d" 
title="Pick and Place タスクにおける密な報酬・疎な報酬の比較 -robosuite / TD-MPC2-" 
description="2026年2月17日" 
image="https://assets.st-note.com/production/uploads/images/252388794/rectangle_large_type_2_dce1cd832080ee7fce88e8ba038ae21d.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n23f47ef71370" 
title="Pick and Placeタスクへの世界モデルによるアプローチ - robosuite/TD-MPC2 -" 
description="2025年12月29日" 
image="https://assets.st-note.com/production/uploads/images/239762927/rectangle_large_type_2_01492f5b11f7166fc27b20538138ffff.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n35b7987e61c6" 
title="Pick and Placeタスクの困難さに関する分析と考察 - robosuite / SAC -" 
description="2025年12月29日" 
image="https://assets.st-note.com/production/uploads/images/239755547/rectangle_large_type_2_fda7130e674151ac2d1933f5937e9d71.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n81fb7399ab62" 
title="robosuiteにおけるSACを用いた強化学習" 
description="2025年12月3日" 
image="https://assets.st-note.com/production/uploads/images/233722908/rectangle_large_type_2_707b866dea87db631a9f81a3780731c2.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n10dc6fbcd657" 
title="SAHIを用いた微小物体検出" 
description="2025年11月18日" 
image="https://assets.st-note.com/production/uploads/images/229601215/rectangle_large_type_2_3584472641e773415d5fd23a465fc720.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/ncef6c01d154c" 
title="Ultralytics YOLOにおける訓練重みロード時のキャッシュに関するTips" 
description="2025年11月18日" 
image="https://assets.st-note.com/production/uploads/images/229601107/rectangle_large_type_2_9221211f6cfda19d8c835a7aaf55256a.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n616fe113ac0d" 
title="開発プロセスに関するTips" 
description="2025年11月18日" 
image="https://assets.st-note.com/production/uploads/images/229600803/rectangle_large_type_2_7ad1b9771dda0279a17606f6d5e6a3d7.png?width=1280"></linkcard>


</linkcard-container>

<br>


# インターン参加ブログ

上記連携の契機となった学部3年次の短期インターンのブログ。

<linkcard-container>

<linkcard url="https://laplust.com/news_contents/euDlXpBw" 
title="LAplustインターンシップに参加して" 
description="2024年10月11日" 
image="https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1280x720_v-fms_webp_62f7221d-271d-49fb-9ac8-4902e84e544b_middle.webp"></linkcard>

</linkcard-container>