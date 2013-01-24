---
comments: true
date: 2010-10-08 09:41:07
layout: post
slug: bottom-knowledge-management-crowdsource-taxonomy
title: 'Bottom up knowledge management: Crowdsource your taxonomy'
wordpress_id: 1072
categories:
- knowledge management
- crowdsourcing
- taxonomy
---

A good list of keywords could be a ‘saviour’ while doing a research – it gives orientation, quick access and offers a cluster to find the right documentation. But such a simple list is often missing in most websites because it is not so easy to be achieved. And here a bottom up process, a crowdsourcing of a taxonomy, can be an option.

[![Image by Beth Kanter](/images/tagging-pencil-300x261.jpg)](http://www.bethkanter.org/)


**The traditional way **
Defining the keywords for a website, such as a navigation, often follows the logic of the organizational structure and hierarchy. It can work well finding information, but only with those ones familiar with the system, and it mostly ends with the ‘try on the search engine.’ After all, as Nielsen points out in his [latest brief](http://www.useit.com/alertbox/alpha-sorting.html), users prefer logical structuring or prioritization by importance lists.

There is this wonderful example from the [Steve Museums project](http://steve.museum/index.php?option=com_content&task=blogsection&id=1&Itemid=2), which years ago found out that 70% of the category defined by experts were not the ones that previous experts had put together. How is prioritization by importance possible when only 30% of keywords are overlapping?

**Tagging through a folksonomy
** Another approach is to let users tag content by themselves. Famous examples are tag clouds, which represent the most popular tags of users. Information junkies – like me – are big fans of them, but I have to admit that after various tests and interviews, they do not often work and seem confusing to most users although they are excellent to get a picture of the topics around your community.

**Crowdsource your taxonomy
** With the lessons learnt, I went to a different approach together with [Fredrik Lassen](http://www.flink-solutions.de/) using Drupal. For my open data project [Create Frankfurt](http://www.frankfurt-gestalten.de), we wanted to analyze and structure thousands of documents, so citizens can quickly find information next to the option of geo referenced data. The documents have to do with a variety of topics in urban development – a similar use case for an information management system of an organization.

So, first, we used an API called [tagthe.net](http://www.tagthe.net/) to automatically extract keywords. The results were more keywords than documents! Then, a tag cloud gave us an insight to major topics, but we had to erase 80% of tags, which did not help us, such as "implication" or "plan." Here one could see the challenges of automated tagging – we still had more than 3,000 words left, so we started the crowdsourcing experiment.

We invited people with various backgrounds to crowd source a new taxonomy. We built a tool, where a user gets a random keyword that he needs to tag with a meta-keyword. We offered a few first meta-keywords, but left it open to users to create their own.

Over some weeks we had about two dozens of volunteers categorizing existing tags linked to thousands of documents. We are not finished yet, but we have already collected roughly one hundred categories. That is an easy list to deal with. You can merge similar concepts and get good working tags (often used) and less good ones.

Sure it is quite a process to undergo, but it can save tremendous search costs later on and might even involve less time when a few people have endless discussions on definitions.

Drop me an [email](http://www.crisscrossed.net/contact) if you want to know more about the tool and process.
