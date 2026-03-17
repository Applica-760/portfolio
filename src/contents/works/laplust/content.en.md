# Overview
At LAplust Inc., which was founded by a senior alumnus from Sasebo National College of Technology, the same institution I graduated from, I am fortunately involved in the investigation and implementation verification of cutting-edge AI models in the form of a long-term internship.

<br>

# Project Examples

### ① Technical Validation of Small Object Detection AI

**Background**: Accurately count the number of tiny insect eggs for research purposes<br>
**Challenges**: Conventional object detection models such as YOLO struggle to detect small objects<br>
　　　Convolutional layers compute features from relationships between adjacent pixels, making it difficult to extract sufficient features when the target is too small<br>
　　　YOLO's input size is fixed at 640×640, so high-resolution images are automatically resized and information about small objects is lost<br>
**Approach**: Used SAHI to slice high-resolution images into overlapping patches, then ran YOLO inference on each patch<br>
　　　Merged results from all patches using NMS to preserve small-object features while bypassing the input size constraint<br>
　　　Optimized accuracy by tuning parameters such as slice size, overlap ratio, and confidence threshold<br>
　　　See the technical blog below for details<br>
**Technologies**: [SAHI↗︎](https://github.com/obss/sahi) [YOLO↗︎](https://github.com/ultralytics/ultralytics)


<br>

### ② OCR Integration for Manufacturing Lines

**Background**: Sort products on a conveyor belt in a factory based on text printed on their surfaces<br>
**Challenges**: High processing speed is required as products flow continuously on the conveyor / 100% recognition accuracy is demanded, making this a high bar to clear<br>
　　　While high confidence scores were obtained in some cases, misrecognitions due to noise and similar-looking characters were observed, making confidence-only judgment insufficient<br>
　　　Products sometimes travel upside-down on the conveyor, requiring orientation-invariant recognition<br>
**Approach**: Used YOLO to detect and crop text regions, then fed only those regions into the OCR model to improve recognition accuracy<br>
　　　Ran text recognition at both 0° and 180°, then combined both results to achieve orientation-invariant recognition<br>
　　　Combined multiple prediction candidates and confidence scores from EasyOCR to make robust final decisions<br>
　　　Evaluated donut for comparison but determined it was overspecified for this use case and adopted EasyOCR<br>
**Technologies**: [EasyOCR↗︎](https://github.com/JaidedAI/EasyOCR) [donut↗︎](https://github.com/clovaai/donut) [YOLO↗︎](https://github.com/ultralytics/ultralytics)


<br>

### ③ Few-Shot Anomaly Detection for Quality Inspection

**Background**: Detect subtle defects such as scratches on automotive parts in a manufacturing line using only a small number of training images<br>
**Challenges**: A large volume of parts must be inspected at high speed / Scratches are minute and easily missed by visual inspection<br>
　　　Pixel-level exact matching causes almost all samples to be flagged as anomalies due to minor variations in imaging conditions, requiring a tolerance for ambiguity<br>
　　　Processing 4K images directly causes a 41× increase in feature map size, making memory usage and runtime impractical<br>
　　　On datasets without mask annotations, the evaluation pipeline halted entirely, and establishing a valid evaluation method was itself a challenge<br>
**Approach**: Mapped normal product images into a feature space and detected anomalies based on distance<br>
　　　Achieved a judgment that is robust to imaging condition variation while remaining sensitive to subtle defect features<br>
　　　Systematically evaluated across MVTec AD, MVTecAD2, and proprietary data with varying resolutions and shot counts (1–32-shot)<br>
　　　Confirmed 97.0% accuracy at 1-shot and 97.5% at 2-shot (AU-PRO: region-level anomaly detection accuracy)<br>
　　　Custom-implemented mean_top1p scoring — averaging the top 1% of distance values — to improve sensitivity to fine-grained anomalies<br>
**Technologies**: [AnomalyDINO↗︎](https://github.com/dammsi/AnomalyDINO) [PatchCore↗︎](https://github.com/amazon-science/patchcore-inspection)


<br>

### ④ Accurate Defect Measurement via Object Tracking

**Background**: Identify defects in drainage channels at construction sites from drone footage, reducing the human cost of manual inspection<br>
**Challenges**: Per-frame object detection counts the same defect multiple times<br>
　　　The system must recognize a defect as the same object even after it temporarily leaves the frame and re-enters<br>
　　　Bbox-based evaluation metrics cannot be applied to Co-Tracker's point tracking approach, making metric selection itself a challenge<br>
**Approach**: Detected defects in each frame with YOLOv8s, then passed bbox center points to Co-Tracker for point tracking<br>
　　　Applied DBSCAN spatio-temporal clustering to tracking trajectories and output defect types and appearance timestamps in JSON format<br>
　　　Reproduced scores close to the official DAVIS val set benchmark (AJ:63.9%, OA:90.9% vs. official AJ:64.4%, OA:91.2%) to validate the implementation<br>
　　　(AJ: tracking accuracy / OA: robustness to occlusion and frame-out)<br>
**Technologies**: [Co-Tracker↗︎](https://github.com/facebookresearch/co-tracker) (Transformer-based point tracking)<br>
　　　[YOLOv8↗︎](https://github.com/ultralytics/ultralytics) (defect detection) / DBSCAN (spatio-temporal clustering)


<br>

### ⑤ Reinforcement Learning for Automated Vegetable Harvesting

**Background**: Build a robot that automatically harvests vegetables from an agricultural automation perspective<br>
**Challenges**: High difficulty due to selecting grasp points on highly variable produce, alignment in cluttered environments, and achieving delicate grasping<br>
**Approach**: Used SAC (model-free RL) as a baseline, then conducted simulation experiments from multiple angles including world models (TD-MPC2), reward shaping, and singularity penalties<br>
　　　Subsequently moved to imitation learning (robomimic / LeRobot) and validated operation on a physical robot (SO-ARM100)<br>
　　　See the technical blogs below for details<br>
**Technologies**: [MuJoCo↗︎](https://github.com/google-deepmind/mujoco) [Gymnasium↗︎](https://github.com/Farama-Foundation/Gymnasium-Robotics) [SB3↗︎](https://github.com/DLR-RM/stable-baselines3) [TD-MPC2↗︎](https://github.com/nicklashansen/tdmpc2) [robosuite↗︎](https://robosuite.ai) [robomimic↗︎](https://robomimic.github.io) [LeRobot↗︎](https://github.com/huggingface/lerobot) [SO-ARM100↗︎](https://github.com/TheRobotStudio/SO-ARM100)


<br>

# List of Technical Blogs

Among the projects we worked on collaboratively, the ones that have been published as technical blogs are listed below.

<linkcard-container>

<linkcard url="https://note.com/laplust/n/nc8e94a667f79"
title="独自データを用いた模倣学習の実装 -LeRobot / SO101-"
description="2026.3.10"
image="https://assets.st-note.com/production/uploads/images/257977534/rectangle_large_type_2_b04b6f93038f246b278afadaea8c7944.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n98504f902d68"
title="模倣学習を用いたPick and Placeタスク -robomimic-"
description="2026.3.8"
image="https://assets.st-note.com/production/uploads/images/257427519/rectangle_large_type_2_d564e5754b4dbf3c27f01b9f1c14434a.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n53b590f453af"
title="Pick and Placeタスクにおける特異点罰則の検討 -robosuite / TD-MPC2-"
description="2026.2.17"
image="https://assets.st-note.com/production/uploads/images/252391813/rectangle_large_type_2_520e14f0d4d2204a30c0c4c78245b1eb.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n43c9c0df7e4d"
title="Pick and Place タスクにおける密な報酬・疎な報酬の比較 -robosuite / TD-MPC2-"
description="2026.2.17"
image="https://assets.st-note.com/production/uploads/images/252388794/rectangle_large_type_2_dce1cd832080ee7fce88e8ba038ae21d.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n23f47ef71370"
title="Pick and Placeタスクへの世界モデルによるアプローチ - robosuite/TD-MPC2 -"
description="2025.12.29"
image="https://assets.st-note.com/production/uploads/images/239762927/rectangle_large_type_2_01492f5b11f7166fc27b20538138ffff.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n35b7987e61c6" 
title="Pick and Placeタスクの困難さに関する分析と考察 - robosuite / SAC -" 
description="2025.12.29" 
image="https://assets.st-note.com/production/uploads/images/239755547/rectangle_large_type_2_fda7130e674151ac2d1933f5937e9d71.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n81fb7399ab62" 
title="robosuiteにおけるSACを用いた強化学習" 
description="2025.12.3" 
image="https://assets.st-note.com/production/uploads/images/233722908/rectangle_large_type_2_707b866dea87db631a9f81a3780731c2.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n10dc6fbcd657" 
title="SAHIを用いた微小物体検出" 
description="2025.11.18" 
image="https://assets.st-note.com/production/uploads/images/229601215/rectangle_large_type_2_3584472641e773415d5fd23a465fc720.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/ncef6c01d154c" 
title="Ultralytics YOLOにおける訓練重みロード時のキャッシュに関するTips" 
description="2025.11.18" 
image="https://assets.st-note.com/production/uploads/images/229601107/rectangle_large_type_2_9221211f6cfda19d8c835a7aaf55256a.png?width=1280"></linkcard>

<linkcard url="https://note.com/laplust/n/n616fe113ac0d" 
title="開発プロセスに関するTips" 
description="2025.11.18" 
image="https://assets.st-note.com/production/uploads/images/229600803/rectangle_large_type_2_7ad1b9771dda0279a17606f6d5e6a3d7.png?width=1280"></linkcard>


</linkcard-container>

<br>


# Internship Participation Blog

A blog post about the short-term internship during my third year of undergraduate studies, which served as the catalyst for the collaboration mentioned above.

<linkcard-container>

<linkcard url="https://laplust.com/news_contents/euDlXpBw" 
title="LAplustインターンシップに参加して" 
description="2024.10.11" 
image="https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1280x720_v-fms_webp_62f7221d-271d-49fb-9ac8-4902e84e544b_middle.webp"></linkcard>

</linkcard-container>

