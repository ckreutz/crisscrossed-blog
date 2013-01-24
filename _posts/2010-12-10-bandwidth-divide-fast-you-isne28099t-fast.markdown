---
comments: true
date: 2010-12-10 16:25:54
layout: post
slug: bandwidth-divide-fast-you-isn%e2%80%99t-fast
title: 'Bandwidth divide: What''s fast to you, isn’t fast to others'
wordpress_id: 1197
categories:
- ICT4D
- performance
- web2fordev
---

[![Connection Speed in Europe](/images/heatmap-eu.png)]()

[On my last post](http://www.crisscrossed.net/2010/12/06/slow-website-speed-consequences-search-costs/), I talked about how slow websites can trigger higher search costs. In this post I want to further elaborate on the bandwidth divide that exists within and between countries, and which is largely ignored by website developers. There is also the notion that we have unlimited capacities for websites – the more the features, the better the website. On the contrary, especially now with the increasing usage of the web, low-bandwidth websites are more important than ever.


## Connection speed comparison


[![Average connection speeds by Pingdom](/images/Average-Internet-connection-speeds-for-50-countries.png)]()

Check, for example, the latest [“real” connection speed overview from Pingdom](http://royal.pingdom.com/2010/11/12/real-connection-speeds-for-internet-users-across-the-world/) based on Akamai data. South Korea has been leading in terms of bandwidth for years, while other Western countries have considerable less capacity available. I did a little heat map to show the geographical variation across the world. Would you have guessed that Romania has the fastest connection speed in Europe?

On the bottom of the list are countries such as Nigeria, Indonesia and Iran, which have 1/3 of users with less than 256kbs per second connection. If that speed is really available, it still needs 6 seconds to load the Wikipedia page example from my last post. Take a book and select a page and then wait 6 seconds before you open it. Do that for a few pages and you will see how frustrating can slow speed can be when doing research.


## Website speed and search engine ranking


Although the mobile web is growing exponential, only a minority offers customized websites because most such changes take time, skill and resources. Even Google is taking website speed into consideration. Its primary goal probably is to save resources for their crawlers. In the tool Google webmaster you can see your website's speed performance. This example is with 5 second slower loading time than the majority of other websites. ￼

[![Google Webmaster Tools](/images/webspeed-google.png)]()


## Some hints to dive into website speed


You can also use tools such as webpagtest.org and see that, for example, the new World Bank page still has 900 kb to load. This means that with a fast connection, it still takes 8 seconds to load. [Check here for details](http://www.webpagetest.org/result/101207_235H/). With a low-bandwidth connection, which is the situation in many developing countries, it takes over one minute to load the front page.


Here are a few first steps to get faster loading websites:
	
  * Think about whether you really need a special feature – certain widgets and slideshows (e.g. World Bank's websie) need a lot of kilobytes to load. Less is more, and your reader will thank you.

	
  * Check your website speed with tools such as [Yslow](https://addons.mozilla.org/en-US/firefox/addon/5369/) or [Page speed](http://code.google.com/speed/page-speed/), and analyze how many files your website has and if there is potential to minimize or at least to combine them.

	
  * Check whether it is possible to cache your page. This means that it can also be available in static html and updated regularly. For Drupal, there is, for example, the [Boost module](http://drupal.org/project/boost), and for Wordpress the [Super Cache](http://wordpress.org/extend/plugins/wp-super-cache/) or [W3 Total Cache](http://wordpress.org/extend/plugins/w3-total-cache/) plugin.

	
  * Use HTTP compression (http://en.wikipedia.org/wiki/HTTP_compression).

	
  * Throw out all external widgets, which are not very necessary, since they often load a lot extra coding to your website.

	
  * Consider to work with a [Content Distribution Network](http://en.wikipedia.org/wiki/Content_delivery_network).







This is just a small list. There is a lot more to tweak for better performance.




## Content Delivery Network


One other great approach is content distribution network (CDN). They distribute your files around the world and put them closer to the user's end. So, if a user visits your site from Asia, then he gets the files from a server in Asia instead of Europe. Basically, you distribute the same files across servers. Wonder why is Google so fast? Because they have servers around the world. If your audience is let's say in Uganda, you better not only host the website in the US, but also in Kampala or Kenya. However, it all depends on your audience.
