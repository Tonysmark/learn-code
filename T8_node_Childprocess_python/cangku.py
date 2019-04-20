from pyquery import PyQuery as pq
import requests
from fake_useragent import UserAgent
import time
agent = UserAgent()

domain = 'https://www.cangku03.com'
photolist = ['/photolist/am/',  # 丝袜 0
             '/photolist/yz/',  # 亚洲 1
             '/photolist/xz/',  # 清纯 2
             '/photolist/om/',  # 欧美 3
             '/photolist/ns/',  # 头条 4
             '/photolist/mt/']  # 模特 5

# NOTE: Photolist 入口
photoControl = photolist[0]


def downloader(img_name, img_url):
    try:
        img = requests.get(img_url, headers={'user-agent': agent.random})
        f = open(img_name + '.jpg', 'ab')
        f.write(img.content)
        f.close()
    except:
        print('报错图片地址:'+img_url)


def mainPage(ulrs, page_num):
    """
    NOTE: 主页抓取 20 个人物角色的入口 URL
    """
    entry_url = domain+ulrs+page_num+'.html'
    doc = pq(entry_url, encoding="utf-8", headers={'user-agent': agent.random})
    content = doc('.movie_list ul li a').items()
    arr = []
    for li_a in content:
        href = li_a.attr('href')
        arr.append(href)
        # print('抓取到人物网站'+href)
    return arr


def avatar(pages):
    urls = mainPage(photoControl, pages)
    for url in urls:
        res = domain+url
        page = pq(res, headers={'user-agent': agent.random})
        title = page('.post_title h1').text()
        images = page('.post_content a').items()
        for a_tag in images:
            href = a_tag.attr('href')
            name = title+href[-7:-4]
            print(' 所在页数 '+pages+' 正在下载: '+name)
            downloader(name, href)
            time.sleep(0.5)
        time.sleep(0.5)  # 出去拿下一个链接前等待两秒


#  NOTE: 控制主入口  多页循环
for i in range(20):
    pages = 'p'+str(i+3)  # 可以在这里控制第几页默认第一页
    time.sleep(1)
    avatar(pages)
