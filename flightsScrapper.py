
#This program takes in a location and gets a small list of flights and some details
#Last editted April 29th by Shira Feinberg

from requests_html import HTML, HTMLSession

#Opens the session
session = HTMLSession()

#Gets the user input for location and then gets the appropriate url for flight to that location
location = input("Please enter the city you would like to visit: ")
r = f'https://www.bing.com/search?q=flights+to+{location}'

url = session.get(r)

#Gets to the html location where the title of the flights are
allFlights = url.html.find('div.fb_FltSingle.fb_shw_ovrly')
print("Round trip flight to " + location)

#Traverses through each flight for the given location and prints the airline, time of flight, and cost 
for flight in allFlights:
    airline = flight.find('div.fb_al', first=True).text
    timeDets = flight.find('div.fb_timeDetails', first=True).text
    cost = flight.find('div.fb_fareDetails > span.fb_totalfare', first=True).text 
    print("Airlines: " + airline + "    Time: " + timeDets + "  Cost: " + cost)
    
