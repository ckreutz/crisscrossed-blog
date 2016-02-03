---
comments: true
date: 2010-10-25 12:17:19
layout: post
slug: challenges-options-data-open
title: The challenges and options to get non open data
wordpress_id: 1128
categories:
- knowledge-management
- open-access
- open-data
- programming
- visualization
---

Nowadays, if you want to start an [open data](http://www.opendefinition.org/) project, you should rather check the availability of information first, and then imagine something useful because so little useful raw data is available. That's why for the foreseeable future, at least in countries such as Germany, collecting documents is the way forward.

[![Frankfurt-Gestalten.de (OpenStreetMap Creative Commons CC-by-SA 2.0 Lizenz. Rendering © 2010 Cloudmade](/images/ffm-norden-karte-300x220.png)]()

Although there are millions of documents available on the Internet, the most interesting ones are hidden in databases, protected as PDF files or only partially offered on websites. It often takes hours to get figures out of a PDF file to be used for analysis. For example, the budget of the city of Frankfurt is offered in a PDF page with more than one thousand pages.

How can you possibly draw different conclusions or see problems and even public misexpenditure? Even a local press paper does not have the resources (any more) to disclose the puzzle of large figure columns.  So I am glad to see my friends at [Tactic Tools](http://tactical-tools.net/) started a  project called [Open Budget](http://bund.offenerhaushalt.de/) (Offener Haushalt) to shed some more light in the public budget of Germany's government. Other great example comes from [David McCandless](http://www.informationisbeautiful.net/), who presented them in a great [TED presentation](http://blog.ted.com/2010/08/23/the-beauty-of-data-visualization-david-mccandless-on-ted-com/) called "the beauty of data visualization". However the remaining problem is that it takes a lot of time to extract  data, not talking about how to present it.


**What are the different ways to get data?**









  1. To use an API ([Application Programming Interface](http://en.wikipedia.org/wiki/Application_programming_interface) such as the [one from the World Bank](http://data.worldbank.org/))
  2. To download open available data
  3. To copy and paste data from documents
  4. To scrape content from websites through software
  5. To collect automatically data from different sources
  6. Or by crowdsourcing your data





Number one and two are the perfect case. Number three can lead to incredible work. Imagine you copy and paste a PDF document of one thousand pages, which is probably printed as an Excel sheet version.  Number four is even possible with PDF files [thanks to OCR](http://www.crisscrossed.net/2010/09/13/data-explosion-the-many-ways-to-get-content-online-or-how-we-digitize-the-world/), but [scrapping](http://en.wikipedia.org/wiki/Data_scraping) can lead to a load of information.

Number 6 is a very different collective approach. For example, the widely cited [Ushahidi](http://blog.ushahidi.com/) is an instrument to offer new channels for data collection if one gets a critical base of contributors. [The Guardian uses it these days to track the effects of budget cuts in the city of Leeds](http://cutswatch.guardian.co.uk/ushahidi/main).

If you do not have the network or public relation budget to run such a crowd sourcing initiative, then you should think about collecting it from existing sources. For example, a lot of data is offered in RSS or XML format. An advantage is the way data is already referenced, such as date, key words and even locations if you are lucky. A nice tool in this regard is Drupal driven [Managing News](http://developmentseed.org/), which I use also for [Create Frankfurt](http://www.frankfurt-gestalten.de/) to geo-reference all incoming information.

Such aggregating tools allow automatic collection of data. So you can identify such information, subscribe to it and look at it from time to time. Two examples: Public transport congestion alerts or political municipality documents. A year of such data can give you some insights and might lead to interesting conclusions.
