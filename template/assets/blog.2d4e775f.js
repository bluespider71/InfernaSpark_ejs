import{_ as A}from"./DemoLinks.b68e1d3f.js";import{_ as y,a as x}from"./DemoTitle.8129d84d.js";import{D as z}from"./DocumentationFooter.26e38be2.js";import{_ as v,a as b}from"./PrismCode.c318c48c.js";import{_ as k}from"./DemoProps.3732b33d.js";import{v as m,o as h,f as c,h as e,w as o,A as s,F as w,g as i,n as V,M as _}from"./index.65d9db8a.js";import{_ as j}from"./BlogGrid.0ade74cb.js";import{d as T,a as M,r as B,b as F}from"./index.49c25cb2.js";import{_ as D}from"./ResourceGrid.3f8efa31.js";import"./Hero.cf13b060.js";import"./FooterBubbles.b04e47b0.js";import"./vue.runtime.esm-bundler.9fd4def1.js";import"./SimpleTableHeader.6e02b7e3.js";import"./Tags.cff8261f.js";const S={props:[{name:"posts",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"20",values:["number"]},{name:"upsideDown",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},P=`
<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
<\/script>

<template>
  <BlogGrid :posts="posts" :limit="3" upside-down />
</template>
`,J=`
export const posts = [
  {
    id: 0,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/1.jpg',
    title: 'How to Conduct an Amazon Competitor Analysis',
    abstract:
      'Selling on Amazon is a battle you are constantly fighting, both when it comes to managing your own operations...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/45.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 1,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/2.jpg',
    title: 'How to Request Reviews on Amazon (Safely)',
    abstract:
      'Reviews are integral to the success of your ecommerce business, particularly if you sell on Amazon. Online...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/42.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 2,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/3.jpg',
    title: 'How Amazon Supply Chain Works',
    abstract:
      'Whether you\u2019re a larger or smaller company looking to scale your online operations, Amazon is a...',
    views: '1.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/30.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 3,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/4.jpg',
    title: 'Amazon Sponsored Display Ads: A Full-Funnel Approach',
    abstract:
      'A full-funnel of self-service ads for Amazon sellers and brands is made up of Sponsored  Products...',
    views: '1.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/17.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 4,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/5.jpg',
    title: 'Expanding Your Ecommerce Business Internationally',
    abstract:
      'I had a great talk with Ryan Cramer, fellow-of-all trades at PingPong. PingPong offers solutions for...',
    views: '1.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/15.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 5,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/6.jpg',
    title: 'Advanced Accounting Tips to Grow Profits For Your Brand',
    abstract:
      'Cyndi Thomason, founder of bookskeep and best-selling author of Profit First For Ecommerce Sellers, joined...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/58.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 6,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/7.jpg',
    title: 'Are My Walmart Listings Ready for Advertising?',
    abstract:
      'My team and I have the privilege of working with many sellers who are new to advertising on Walmart or...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/55.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 7,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/8.jpg',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you\u2019re...',
    views: '2.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/53.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 8,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/9.jpg',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '3.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/35.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 9,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/10.jpg',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you\u2019re...',
    views: '3.7k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/36.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 10,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/11.jpg',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '4.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/31.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 11,
    image: '/https://infernaco.com/spark-files/assets/demo/img/posts/12.jpg',
    title: '5 Key Levers to Drive Profits\u2014Levers 3, 4 and 5',
    abstract:
      'Note: This is part 4 in a 4 part series on profitability. Read part 1 here, part 2 here, and part 3 here. ...',
    views: '5.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: '/https://infernaco.com/spark-files/assets/demo/img/avatars/39.jpg',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Spark to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Spark bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Spark and our advanced bidding engine. Spark\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Spark was low or non-existent. </p><p> Hundreds of sellers signed up for Spark last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Spark and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Spark software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Spark for the first time in 2020. The data examined spans both the 60 days prior to using Spark, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Spark advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
]
`,$=i("div",{class:"py-4"},null,-1),E=i("div",{class:"py-4"},null,-1),H=i("div",{class:"py-4"},null,-1),C=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),X=m({setup(g){return(d,f)=>{const a=y,n=j,t=V,r=_,l=v,u=k,p=b;return h(),c(w,null,[e(r,{id:"block-a-demo","bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),$,e(n,{posts:s(T),limit:3},null,8,["posts"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 2",link:"block-a-props"}),E,e(n,{posts:s(M),limit:3,"upside-down":""},null,8,["posts"])]),_:1})]),_:1}),e(r,{id:"block-a-props","bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block A Props",subtitle:"Available props for block A"}),H,e(p,null,{code:o(()=>[e(l,{language:"html",code:s(P)},null,8,["code"])]),props:o(()=>[e(u,{props:s(S).props},null,8,["props"])]),sample:o(()=>[e(l,{language:"javascript",code:s(J)},null,8,["code"])]),usage:o(()=>[C]),_:1})]),_:1})]),_:1})],64)}}}),I={props:[{name:"posts",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"20",values:["number"]},{name:"upsideDown",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},W=`
<script setup lang="ts">
import { resources } from '/@src/data/pages/blog'
<\/script>

<template>
  <ResourceGrid :posts="posts" :limit="3" upside-down />
</template>
`,R=`
export const resources = [
  {
    id: 0,
    image: '/https://infernaco.com/spark-files/assets/illustrations/blog/landscape-abstract-1.svg',
    title: 'How to run competitive team meetings',
    likes: '234',
    categories: [
      {
        name: 'Business',
      },
      {
        name: 'Tech',
      },
      {
        name: 'Productivity',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 1,
    image: '/https://infernaco.com/spark-files/assets/illustrations/blog/landscape-abstract-2.svg',
    title: 'All you need to know about the One-on-One meeting',
    likes: '93',
    categories: [
      {
        name: 'Technique',
      },
      {
        name: 'Speech',
      },
      {
        name: 'work',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 2,
    image: '/https://infernaco.com/spark-files/assets/illustrations/blog/landscape-abstract-3.svg',
    title: 'Top tips from Jeff Jordan on team management efficiency',
    likes: '54',
    categories: [
      {
        name: 'Management',
      },
      {
        name: 'Team',
      },
      {
        name: 'HR',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
]
`,q=i("div",{class:"py-4"},null,-1),G=i("div",{class:"py-4"},null,-1),L=i("div",{class:"py-4"},null,-1),Y=i("p",{class:"paragraph rem-95"}," Spark ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=m({setup(g){return(d,f)=>{const a=y,n=D,t=V,r=_,l=v,u=k,p=b;return h(),c(w,null,[e(r,{id:"block-b-demo","bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),q,e(n,{posts:s(B),limit:3},null,8,["posts"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 2",link:"block-b-props"}),G,e(n,{posts:s(F),limit:3,"upside-down":""},null,8,["posts"])]),_:1})]),_:1}),e(r,{id:"block-b-props","bordered-bottom":""},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{title:"Block B Props",subtitle:"Available props for block B"}),L,e(p,null,{code:o(()=>[e(l,{language:"html",code:s(W)},null,8,["code"])]),props:o(()=>[e(u,{props:s(I).props},null,8,["props"])]),sample:o(()=>[e(l,{language:"javascript",code:s(R)},null,8,["code"])]),usage:o(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}}),de=m({setup(g){const d=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(f,a)=>{const n=x,t=A;return h(),c("div",null,[e(n,{title:"Advanced Blog",subtitle:"Discover Spark's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(t,{links:d,width:"400px"}),e(X),e(N),e(z)])}}});export{de as default};
