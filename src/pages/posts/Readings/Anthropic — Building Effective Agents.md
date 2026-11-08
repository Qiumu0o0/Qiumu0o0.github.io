---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Anthropic《Building Effective Agents》阅读笔记'
pubDate: 2026-11-09
updatedDate: 2026-11-09
description: '梳理 Anthropic 对 workflow 与 agent 的区分，以及框架选择、augmented LLM 和 prompt chaining 等 Agent 系统设计原则。'
author: '秋木'
image:
    url: '/Crimson Rosella.png'
    alt: ''
tags: [Anthropic, AI Agent, workflow, 阅读笔记]
---

# Anthropic — Building Effective Agents

## What are Agents?

In this blog, there are two main categories in the **agentic systems**: the **workflows** and the **agents**.

Basically speaking:

- **Workflows** are systems where LLMs and tools are orchestrated through predefined code paths.
- **Agents** are systems where LLMs  direct their own process and tool usage, maintaining control over how they accomplish tasks. 

> Here we can see, workflow sounds more like a people do everything follows a guidance, while agents sound to be more creative.

## When (and when not) to use Agents

When building with LLMs, the possible simplest solution is the best choice. Agentic system will produce trade off **latency** and **cost** for better task performance.

As for more complex tasks, workflows provide a more **predictable** and **consistent** outcome for **well-defined task**, while agents may be better for large scale model-driven-decision-making and flexibility are needed. However, using LLMs with good **retrieval** and **in-context examples** usually are enough.

## When and how to use frameworks

Using framework will make it easier to get start by simplify **standard low-level tasks**(like calling LLMs, defining and parsing tools, and chaining calls together). However, using these framework usually make the debugging harder, and also may add complexity.

It is suggested to **start by using LLMS APIs**, which is very simple to implement. Without understanding the underlying code of the framework often make errors.

> You can find some recommended frameworks in the section, from the official notes. Also, a link is provided below for some implementations.

## Building blocks, workflows, and agents

This section will introduce the common patterns for agentic systems. Starting from the **foundation building block**: the **augmented LLMs**, and gradually increase the complexity, from **simple compositional workflows** to **autonomous agents**.

### Building block: The augmented LLM

The augmented LLMs is an LLM with augmentations such as **retrieval, tools and memory**.

> Oh so if Matlas is integrated into an LLM, then it is a kind of augmentation -- a tool.

When made augmentations for the LLMs, there are two key aspects: 

- **tailoring** these capabilities to the specific use case;
- ensuring the augmentations provide an easy, well-documented **interface** for the LLMs;

For the reminder of this section, we assume that each LLM call has access to these augmented capabilities.

### workflow: prompt chaining

**Prompt chaining** decomposes a task into a sequence of steps, where each LLM call processes the output of the previous one. We can add **programmatic checks**(called **gate**) on any intermediate steps(usually after an output) to ensure that the process is still on track.

**When to use workflow**: when the whole task can be **easily and cleanly** decomposed into fixed subtasks. It **trade off latency for higher accuracy**, by making each LLM call an easier task.

> Now I gradually understand why some people say that the 基模 will swallow everything, since if the 基模 can do hard task good, then there is no need to decomposing.

### workflow: Routing
