# Overview
I launched a project to **visualize and streamline** the impact of **severe marine debris (washed-up trash)** on the fisheries and tourism industries in remote island regions using **IoT and AI**.:contentReference[oaicite:0]{index=0}<br>
To address issues such as the **high cost** of manual monitoring, an **insufficient number of survey points and frequency**, and **variability in visual measurements**, we developed a solution combining sensors and communications, machine learning, and a web system.

<br>

# 🏆 Awards / Selections / Grants
- FY2021 (Reiwa 3) Municipal Forum / **Technical Award**
- FY2021 (Reiwa 3) Municipal Research Incentive Grant **Selected** (grant amount: approx. **¥360,000**)
- FY2023 (Reiwa 5) Municipal Research Incentive Grant **Selected** (grant amount: approx. **¥190,000**)
- FY2022 (Reiwa 4) Student Contest Budget **Selected** (research funding acquired: approx. **¥1,600,000**)
- FY2023 (Reiwa 5) Student Contest Budget **Selected** (research funding acquired: approx. **¥1,500,000**)

<br>

# Problems to Solve
- High burden of labor and travel costs for monitoring work
- Insufficient survey locations and frequency, leading to biased data
- Subjectivity and variability caused by visual measurement
- Cleanup activity planning depends on individual experience

<br>

# Approach
1. **Automate monitoring / reduce cost:** Use a camera installed on the beach to capture images, and have edge-side AI detect washed-up items.<br>Transmit only the results via **LPWA Private LoRa** to reduce communication volume.
2. **Support optimization of cleanup activities:** Accumulate and visualize data in the cloud. Based on the estimated volume, propose cleanup locations, required number of people, number of trash bags, etc., via the web.
3. **Future drift prediction and commercialization:** Combine weather data and measured data to build a prediction model for drift volume, aiming to reduce municipal costs and scale the solution.

<br>

# Design Background and Technology Choices
## Constraints in the communication environment
- The client devices (equipment installed on beaches) are often located outside LTE coverage, making constant internet connectivity difficult.
- A method enabling low-power, long-range communication and an independently deployable local network is required → adopted **LPWA (Private LoRa)**.
## Data volume constraints and countermeasures
- **LoRa** has low throughput and small payload size, so transmitting image data as-is is unrealistic.
- Perform object detection (**YOLOv5**) on the edge and transmit only detection-result metadata (class, coordinates, confidence, count, etc.).
- With this design, MB-scale images are replaced with text information on the order of a few hundred bytes, significantly reducing communication volume and power consumption.
## End-to-end flow
1. The beach-side client (**Raspberry Pi + camera**) periodically captures images and runs inference.
2. Only detection results are sent to the gateway via **Private LoRa**.
3. The gateway relays them to the cloud and reflects them in the visualization web (dashboard).

<img src="/portfolio/contest/assets/system-dark.png" alt="System diagram" width="70%" />

<br>

# Implementation
## Organization and collaboration
Developed across four teams: communications, imaging, enclosure/hardware, and web.<br>
We coordinated with local government and community organizations, confirming requirements through on-site interviews, joint cleanup activities, and online meetings.
## Computer vision / AI
Adopted **YOLOv5**. We annotated **592** real-world images and trained with a focus on “**blue plastic jerrycans**” as a key class because they may contain hazardous materials.<br>
We verified that a **2.01MB** image can be compressed into a detection-result text payload (**488B**) for transmission.
## Hardware and communications
A two-layer architecture: the beach-side client performs capture/inference, and the gateway receives and forwards to the cloud.<br>
Using **Private LoRa**, we also considered enclosure design and wind-load calculations to meet outdoor requirements such as solar power, wind resistance, and tetrapod anchoring.

<br>

# Areas of Responsibility
- Building the object detection model (training/evaluation of YOLOv5 and establishing the inference pipeline)
- Designing and building the cloud infrastructure (data collection, storage, APIs, integration with the visualization platform)
- Implementing the final visualization web page (dashboard / viewing UI)

<br>

# Skills Gained / Tech Stack
- Embedded / microcontroller programming using Raspberry Pi
- Edge AI inference (model optimization and implementation under resource constraints)
- Practical cloud architecture (data pipelines, observability, security design)
- Understanding of communications technologies (LPWA/LoRa, gateway design and operations)

<br>

# Links

<linkcard-container>

<linkcard url="https://wicon.jp/2023/final" 
title="WiCON2023 Final Round Results Announcement" 
description="March 5, 2024" 
image="https://storage.googleapis.com/studio-design-asset-files/projects/v7qGwxbMqL/s-2400x1601_v-frms_webp_737747cb-01b5-4646-825e-33d71185b90f_small.webp"></linkcard>

<linkcard url="https://wicon.jp/2022/result" 
title="WiCON2022 Awards / Review Results" 
description="March 6, 2023" 
image=""></linkcard>

</linkcard-container>
