Solutions
1. Images: fixed the image path in myApisService.js, added ./img/

2. Location Error: needed to inject location into the controller 

3. Clear button: on click set the elected product to null to remove the product you are currently viewing 

4. Required Products: added ng-if statement to products to display the product idea if there is a required product

5. Fixed all CSS issues listed - if I had more time I would have created a nav bar and added the products and the partners in a drop down menu and floated the search bar to the right

I would have also centered the products and made the image large as well as set up the product info on two columns at the bottom (buttons on the right and info on the left)

I would have also had a logo at the top or image above the nav bar 

6. pre-loader: this can be done two ways 
	- a set timeout function that appends a full page div and then removes it after x amount of seconds
	- the better way would be to remove it once the DOM content is loaded (this is they way I was trying to go, but did not solve)

7. linking arrays: I was stuck on this trying to get it to link in angular - I know you need to say in the product.id !== partners.products then remove it from the products array