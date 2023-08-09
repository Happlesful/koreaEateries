import json
import webbrowser

# Read JSON file
with open('/Users/swislar/Desktop/MangoPlateMatJibMain.json', 'r') as json_file:
    data = json.load(json_file)

limit = 20
counter = 570

# Iterate through the data and open links
# for restaurant in data['restaurants'][counter:counter+limit]:
#     url = restaurant['URL']
#     webbrowser.open(url)
#     counter+=1
    
# Checking for duplicate stores
restaurantArray = []
restaurantDupes = []
for index, restaurant in enumerate(data['restaurants']):
    if restaurant['Name'] not in restaurantArray:
        restaurantArray.append(restaurant['Name'])
    else:
        restaurantDupes.append((restaurant['Name'], index - len(restaurantDupes)))
print('\n')        
print (restaurantDupes)
print('\n')

# Checking for typo errors in type
typeArray = ['샐러드', '이탈리안', '남미', '알라보', '샌드위치',
              '면', '일식', '한정식', '카페', '디저트', '해산물', 
              '간식', '탕', '국수', '찌개', '치킨', '쌈', '고기', 
              '포차', '바', '중식', '양식', '수시', '회', '찜닭', 
              '분식', '떡', '닭', '베이커리', '한식', '오리', '피자', 
              '돈까스', '딤섬', '만두', '버거', '한중식', '퓨전', '스테이크', 
              '바베큐', '삼계탕', '빙수', '태국 음식', '벤토', '커스', '라멘', 
              '우동', '소바', '헤산물', '먄', '칵테일', '영식', '프랑스', 
              '카레', '아이스크림', '인도 음식', '꽈배기', '도넛', '닰', 
              '빵', '딝', '아탈리안', '베트남 음식', '남미 음식']

typeIncorrect = ['한중식', '헤산물', '먄', '영식', '닰', '딝', '아탈리안']
typeIncorrectIndex = []

for index, restaurant in enumerate(data['restaurants']):
    types = restaurant['Type'].split(',')
    for i in types:   
        if i.strip() not in typeArray:
            typeArray.append(i.strip())
print('\n')        
print (typeArray)
print('\n')

for index, restaurant in enumerate(data['restaurants']):
    types = restaurant['Type'].split(',')
    for i in types:  
        if i.strip() in typeIncorrect:
            typeIncorrectIndex.append((i.strip(), index))
print('\n')
print(typeIncorrectIndex)
print('\n')