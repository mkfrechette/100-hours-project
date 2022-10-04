# HairConnect

Our mission is to provide an easy to use, accessible online platform for hair stylists and hair models to connect. A space to showcase and explore your creative side as you connect with stylists and models interested in collaboration. We'll help you forge personal friendships and professional relationships in your local community.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, MongoDB, Ejs, Bootstrap 5

## Why I Built This

I've been a hair model for 6+ years, and it was not easy to find a stylist looking for a hair model. I had to go to Instagram, look up hashtag hairmodel, find a salon using the hashtag, and message them asking if they had a stylist looking for a model. This is not something most people might think to do, and it's not a great option. I decided to solve this problem by building a full stack website to bypass those steps and connect models and stylists directly.

## How it Works

A user can sign up as either a stylist or a model, with different questions to answer. When someone new creates an account, their information (username, location, bio, social links, etc) are displayed on either the "Models" or "Stylists" page. The home page explains the purpose of the site, and features a hair collaboration and a featured stylist.

## Lessons Learned:

Creating two types of users via two collections in the database was easy, authenticating them through Passport.js was not! Learning how to do this was a great (and greatly frustrating) experience.

![alt tag](https://i.postimg.cc/FKbxBP2X/index1.png)
![alt tag](https://i.postimg.cc/9FnVDbg2/index2.png)
![alt tag](https://i.postimg.cc/TYpvvmd4/signup.png)
![alt tag](https://i.postimg.cc/8CGYcrGD/login.png)
![alt tag](https://i.postimg.cc/XvxsvHxc/models.png)
![alt tag](https://i.postimg.cc/mrdKngxs/stylists.png)

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

#
