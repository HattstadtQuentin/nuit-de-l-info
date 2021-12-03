import requests
import re
import json
from bs4 import BeautifulSoup

url = 'https://sauveteurdudunkerquois.fr/tableau-d-honneur/'
r = requests.get(url, allow_redirects=True)

soup = BeautifulSoup(r.content, features="html.parser")
main_div = soup.find('div', attrs={'class':'entry clr'})
# print(main_div)


for a in main_div.findAll('a'):
    href = a.attrs["href"]
    if re.search(r"-[0-9]{4}[a-z]", href): # find people links 
        user_page = requests.get(href, allow_redirects=True)
        page_content = BeautifulSoup(user_page.content, features="html.parser")
        main_content = page_content.find('div', attrs={'class':'entry clr'})

        print(href)
        if main_content is not None:
            print(main_content.find("h1"))

            user_name = a.text.strip()
            user_name = re.sub("[^\w ]", "", user_name)
            filename = user_name.replace(" ", "_")
            # print(vars(main_content))
            user_dict = {}
            user_dict["name"] = user_name
            user_dict["page_content"] = "".join(str(main_content.contents))

            print(filename)
            with open(f"data/sauveteurs/{filename}.txt", "w") as user_file:
                user_file.write(json.dumps(user_dict))
        else:
            print("Couldn't reach content")
        print()
        
        # print(a.attrs["href"], a.text)
        # break
