# Overview

<img src="/portfolio/clustime/concept.png" alt="Concept screen" width="70%" />

This section introduces Clustime, a community-based social networking service (SNS) that I developed by forming a team with friends from university.<br>
Here, I describe the app’s target users and its purpose; technical elements such as software design are documented in the [GitHub repository↗︎](https://github.com/Applica-760/clustime).

The app is now available on each store.<br>
[App Store↗︎](https://apps.apple.com/jp/app/clustime/id6749456160)<br>
[Google Play↗︎](https://play.google.com/store/apps/details?id=com.clustime.clustime.beta&hl=ja)

<br>

# Problems to Solve
- As hobbies and interests become increasingly fragmented, it is difficult in real life to find others to connect with around the same topic (especially niche hobbies and “oshi” fandom activities).
- Existing SNS platforms tend to mix a wide variety of people, which can lead to conflicts, unpleasant posts, and irrelevant information flowing in—making the information users truly want to see easily get buried.
- Harassment and unpleasant posts are likely to occur, making it hard to communicate with peace of mind (insufficient safety and order).

<br>

# Approach
- Split timelines by “cluster (scene/community)” units, and design the system so users can view only posts within the clusters they belong to—reducing irrelevant information and preventing posts from being buried.
- Maintain order in each cluster through a combination of rule proposals (admins) × voting (participants) × AI review (AI moderation), enabling rule enforcement that feels acceptable on a per-cluster basis.
- Require identity verification to deter alternate accounts and ensure the reliability of voting and community governance.
- Provide per-cluster schedules, news recommendations, surveys, and profiles that show cluster membership to strengthen information access and interaction within the community.

<br>

# Design Background and Technology Choices
With a limited team (effectively two people) and a tight schedule, we prioritized development speed, operational ease, and multi-platform support.<br>
Therefore, instead of separate native implementations, we adopted Firebase × Flutter. Authentication, real-time data, server-side logic, and notifications are centralized in Firebase (Auth / Firestore / Functions / FCM), allowing the client to focus on user experience.

<br>

# Key Features
- User authentication: Provides secure sign-up and login via email address, Google, and Apple accounts.
- Clusters (communities):
  - Users can freely create and join clusters.
  - Public/private (approval-based) settings are available.
  - Cluster profiles (banner, icon, description, rules) can be customized for each cluster.
- Posts:
  - Supports text and multi-image posts.
  - Covers core SNS features such as likes, replies, reposts, and quote reposts.
  - Users can view post engagement (users who liked or reposted).
- Notifications:
  - Notifies users in real time about actions such as likes, replies, and reposts.
  - Uses Firebase Cloud Messaging (FCM), allowing notifications even when the app is in the background or terminated.
- Admin features:
  - Includes a function to report inappropriate posts or users.
  - An admin review panel enables checking reports and taking actions (approval, deletion, etc.).
<img src="/portfolio/clustime/moderate.png" alt="Moderation screen" width="40%" />

<br>

# Actual Screens

<image-row>
<img src="/portfolio/clustime/screenshot1.png" alt="App screen 1" width="20%" />
<img src="/portfolio/clustime/screenshot2.png" alt="App screen 2" width="20%" />
<img src="/portfolio/clustime/screenshot3.png" alt="App screen 3" width="20%" />
<img src="/portfolio/clustime/screenshot4.png" alt="App screen 4" width="20%" />
<img src="/portfolio/clustime/screenshot5.png" alt="App screen 5" width="20%" />
</image-row>

<br>

# Areas of Responsibility
This project was developed by a team of 2 engineers + 1 designer.<br>
As an engineer, I was responsible for overall frontend development and the iOS implementation, leading everything from Dart code design through implementation.<br>
The other engineer primarily handled Firebase Cloud Functions, including server-side processing such as fetching posts and managing profiles.<br>
We strictly followed Feature-Driven Design and a layered architecture, improving maintainability by separating concerns by feature and clarifying responsibilities.

<br>
