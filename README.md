# E-commerce website : Zeta Shoe Shop 

The most interesting features are detailed below.

## Home Page and filter products by categories

At Home Page of the website you will be able to see all the releases, being able to see different categories. You can filter the category you are looking for using the navigation bar.

Ex:

https://user-images.githubusercontent.com/62315321/147111199-b7986a7a-d137-494b-aaca-17e386b33f5a.mp4


## Product stock

Stock of all products are connected to Firestore Database. This means that the number of products you can add to the cart depends on the amount of stock that product has in that database.

Ex:

https://user-images.githubusercontent.com/62315321/147110940-9d522802-50be-462a-90ac-0a89aaf3d875.mp4


## Add to cart 

You can choose any product to add to cart and the counter at the top of the page will update automatically

Ex:

https://user-images.githubusercontent.com/62315321/147111163-97912ab2-5717-44e9-aa32-d5bf9b19c93a.mp4


## Go to checkout

When you finish choosing your products, you will go to checkout where you must fill out a form which was implemented using formik. You must fill your name, last name and your email to proceed. 

After that, due to it's connected to Firebase, the number of order with the buyer's details will be uploaded to Firestore Database. In addition, the number of stock of each selected product will be updated too. 

Ex:

https://user-images.githubusercontent.com/62315321/147111092-f4dd7418-4edb-43f1-bfd0-28114e7a740f.mp4
