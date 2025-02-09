# Chamaquest

Financial institutions are powerful tools to help people save, invest, and build for their future, but for many people experiencing extreme poverty, formal banking is out of reach. It is too far, too alien, and above all, too expensive. For many of the 734 million people worldwide earning less than $2 a day, the overdraft fees and account creation fees place traditional banking squarely out of reach.

Many of the global poor have adapted by creating rotating savings and credit institutions (ROSCAs), groups in Kenya dubbed Chamas. In these groups, participants are required by social expectation to save money, depositing it into a physical pot at regular meetings where savings are discussed. Participants then withdraw value from the pot at a regular interval, describing to the group how they'll use it to help themselves. Widely used in parts of the world, ROSCAs are an incredibly helpful solution, but which can't offer interest, or even assure that nobody will run away with the money. Chama aims to help Chamas fix these problems.

Chamaquest works to bridge the accessibility-stability gap by empowering accessible, accountable ROSCAs with the expertise, backing, and interest capacity of local banks. Working with microfinance institutions with experience in lending to those experiencing extreme poverty, we'll provide institutional connections to ROSCAs. Because their assets are pooled, low-wealth investors will be able to finally _receive more than they put in._ Even better, extending deposit insurance to previously informal groups will prevent the devastation of a single individual running away with, or losing, the money. We also envision local banks providing advice to savings groups, offering products to help people save, and gaining a better understanding of how to bank their neighbors.

We aim to start with a small group of ROSCAs in a small region and build trust one community at a time. We hope to spread primarily by word-of-mouth, so that many existing groups can decide to seek the improvements that we hope to offer. Trusting new institutions is difficult, so we've aimed to smooth the transition by staying as close to existing positive ideas as possible. Chamaquest combines a powerful financial system with the poor's own genius response to poverty. We don't think for a moment that we've solved every problem, and we aim to work in perpetuity with ROSCAs and banks in areas of service to determine how our product can evolve to serve their needs. By working with communities, identifying what works, and establishing trust, Chamaquest can help those with the least see a bit more tomorrow.

## Technical description

Chamaquest is a web app built using Next.JS, React, Tailwind, TypeScript, and Postgres.

### Database fields

User:

- id (int)
- email (string)
- name (string)
- password (string)
- chamas (array of IDs)
- depositHistory (array of deposits)
- withdrawlHistory (array of withdrawals)

Deposit:

- depositor (id)
- chama (id)
- paidAmount (number)
- requiredAmount (number)
- dueDate (time)

Withdrawal:

- recipient (id)
- chama (id)
- amount (float)
- time (time)

Meetings:

- start-time (time)
- end-time (time)

Chama:

- id (number)
- balance (number)
- depositRequirement (number)
- members (array of IDs)
- meetings (array of meetings)
- depositHistory
- withdrawalHistory (array of withdrawals)

## Copyright Information

Created by Vikram Krishnakumar, May Yamanaka, Colin Volpe, and Anna Lynch in Raleigh, North Carolina on 8 February 2025.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
