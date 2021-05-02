
#This program takes in a location and gets a small list of the top things to do in that location.
#Last editted April 29th by Shira Feinberg

from requests_html import HTML, HTMLSession

#Opens the session
session = HTMLSession()

#Gets the user input for location and then gets the appropriate url for things to do in that location
location = input("Please enter the city you would like to visit: ")
r = f'https://www.bing.com/search?q=things+to+do+in+{location}'

url = session.get(r)

#Gets to the html location where the title of the things to do are
allPlaces = url.html.find('div.bm_details_overlay')
print("Thing to do in " + location)

#Traverses through each thing to do at the given location
for place in allPlaces:
    placeName = place.attrs['data-resultswithdetailsoverlay']
    
    #Splits the string to only get the name of the thing to do
    placeName = placeName.split(',')[2]
    placeName = placeName.split(':')[1]

    #Prints things to do
    print(placeName)

