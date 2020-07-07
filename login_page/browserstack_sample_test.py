from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

BROWSERSTACK_URL = 'https://bsuser72652:8Nk4xppKjFiLUe3kTMYp@hub-cloud.browserstack.com/wd/hub'

desired_cap = {
          
  'browserName': 'iPhone',
  'device': 'iPhone XS',
  'realMobile': 'true',
  'os_version': '13',
  'name' : "bsuser72652's First Test"

}

driver = webdriver.Remote(
    command_executor=BROWSERSTACK_URL,
    desired_capabilities=desired_cap
  )

driver.get("http://www.google.com")
if not "Google" in driver.title:
    raise Exception("Unable to load google page!")
elem = driver.find_element_by_name("q")
elem.send_keys("BrowserStack")
elem.submit()
print(driver.title)
driver.quit()