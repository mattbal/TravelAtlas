
#This program takes in a location and gets a small list of hotels and some details
#Last editted April 29th by Shira Feinberg

from requests_html import HTML, HTMLSession
from random import randint

#Opens the session
session = HTMLSession()

#Gets the user input for location and then gets the appropriate url for hotels at that location
location = input("Please enter the city you would like to stay at: ")
r = f'https://www.bing.com/search?q=hotels+in+{location}'

url = session.get(r)

#Gets to the html location where the title of the hotels are
allHotels = url.html.find('div.b_scard')
print("Hotels in " + location)

#Traverses through each hotel for the given location and gives details about it
for hotel in allHotels:
    hotelName = hotel.find('span.lc_content > h2', first=True).text
   
    cost = randint(80, 150)
    print("Hotel: " + hotelName + "     Cost: " + str(cost))