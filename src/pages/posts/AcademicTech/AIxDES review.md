---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'AI × DES Review'
pubDate: 2026-11-16
updatedDate: 2026-11-16
description: '从监督控制理论与离散事件系统建模出发，梳理 AI 与 DES 研究的基础概念。'
author: '秋木'
image:
    url: '/Crimson Rosella.png'
    alt: ''
tags: [AI, DES, review]
---

## SCT

### History

SCT(Supervisory Control Theory) is proposed by Ramadge and Wonham in 1987.

在 20 世纪，传统控制理论主要研究连续动态系统，比如微分方程。但是计算机系统、制造系统以及通信协议等具有不同的特点：

- 系统由离散事件驱动；
- 事件发生时间可能不规则；
- 多个事件可能异步发生；
- 系统行为可能具有非确定性；

传统连续控制理论并不适合描述这些逻辑行为。

### Main Goal

Its main goal is design a **supervisory** that restrict the system's behavior to satisfy specifications, while keeping as much of the system's **flexibility** as possible.

### Model

To model the **DES** and **specifications**, the most common models are **automata** and **Petri nets**.

## DES Modeling Formalisms

- Automata is usually used for event-driven state transitions.
- Petri nets is usually used for **concurrency** and **resource-sharing behaviors**.

### Automata

**Automata Theory** is an important part of **Theory of Computation**. 

In 1930s, **Alan Turing** proposed **Turing Machine** to model the ability of computation. In 1940s-1950s, FSA is gradually used in **formal language**, **nueral network** and the **curcuit of computer**. In 1956, **Kleene** studied the relationship between FSA and **regular language**. In 1959, **Michael Rabin** and **Dana Scott** proposed the automata theory.

The definition of automata:

$$\
A = (Q, \Sigma, \delta, q_0, F)\
$$

Where:

- $Q$ is a finite set of states.
- $\Sigma$ is a finite input alphabet.
- $\delta$ is the transition function.
- $q_0$ is the initial state.
- $F$ is a set of accepting (final) states.

### Petri nets

Petri net is proposed by Carl Adam Petri in 1962.

The system state is described by a marking vector, where each components assigned a nonnegative integer number of tokens to a corresponding place.

$$
PN = (P, T, A, W, M_0)
$$

Where:

- $P$ is a finite set of places.
- $T$ is a finite set of transitions, where $P \cap T = \varnothing$.
- $A \subseteq (P \times T) \cup (T \times P)$ is a set of directed arcs.
- $W: A \rightarrow \mathbb{N}^+$ is the arc weight function.
- $M_0: P \rightarrow \mathbb{N}$ is the initial marking function, assigning a nonnegative integer number of tokens to each place.

Also, there are some extensions of classical Petri nets.

However, as the increasing of system complexity, the computation cost is demanding. Therefore new approaches are needed.

## AI Basic

### History

**早期理论基础**(1940s-1950s)：1943年：McCulloch 和 Pitts 提出人工神经元的数学模型。1950年：Alan Turing 发表《Computing Machinery and Intelligence》，提出著名的图灵测试（Turing Test）。1956年：Dartmouth Conference 举行，John McCarthy 正式提出 Artificial Intelligence 这一术语。

**符号主义**(1950s-1970s)：采用符号和逻辑规则模拟人类推理。

**第一次AI寒冬**(1970s-1980)

**专家系统**(1980s)：专家系统将人类专家的知识编码为规则，让计算机根据规则进行判断。

**机器学习时代**(1990s-2000s)：研究逐渐从人工编写规则转向让机器从数据中学习。

**深度学习革命**(2010s)：利用多层神经网络，从大量数据中自动提取复杂特征和规律。

**基础模型与生成式 AI**(2020s-至今)：通过大规模数据预训练，使一个模型能够适应多种不同任务。

### Main Goal

The main goal of Artificial Intelligence (AI) is to **develop machines capable of performing tasks that typically require human intelligence**, such as learning, reasoning, problem-solving, perception, and decision-making.

- Learning: 从数据和经验中学习；
- Reasoning：进行逻辑推理；
- Problem-solving：解决复杂问题
- Perception：感知和理解环境
- Decision-making：根据目标选择行动

### Model

AI provides a **learning-based framework** for modeling and decision-making in complex systems.

Modern AI methods rely on **data-driven approaches** to construct **parametric models** and **optimize system behaviors**.

There are four major area in AI:

- ML: learn patterns from data.
- DL: use ANNs(artifical neural networks) to solve complex tasks.
- RL: optimal decision through environment.
- DRL: enable RL scale to complex and high-dimension tasks.

But they are not parallel.

## ML(Machine Learning)

Why AI revivals? Because of the advances in computational power and large dataset.

Let $f_\theta$ be the **parametric model**, $\mathcal{X}$ and $\mathcal{Y}$ be the **input and output spaces**, $\theta$ is the **model parameter**. Dataset is  $\mathcal{D} = \{(x_i,y_i)\}_{i = 1}^N$. $\Theta$ is the parameter space.

The model parameter is learned by minimizing a **loss function**:

$$
\theta^* = argmin_{\theta} \Sigma_{i = 1}^N \ell(f_\theta (x_i), y_i).
$$

where $\ell(·, ·)$ is the loss function quantifies the **prediction error** between the model output $f_\theta(x_i)$ and the true label $y_i$.

DL(Deep Learning) is using a DNN as anapproximator of $f_\theta$.

## RL(Reinforcement Learning)

RL address **sequential decision-making problems**, commonly modeled as **MDP(Markov Decision Process)**:

$$
\mathcal{M} = (S, A, P, R, \gamma)
$$

Where:

- $S$ is a set of states.
- $A$ is a set of actions.
- $P(s' \mid s,a)$ is the state transition probability function.
- $R(s,a,s')$ is the reward function.
- $\gamma \in [0,1]$ is the discount factor.

<!-- ## classical automata + opacity x AI 

75 -->

